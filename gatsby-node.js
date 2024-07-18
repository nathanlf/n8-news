const path = require("path");
const issueTemplate = path.resolve(`./src/templates/issue.js`);
const archiveTemplate = path.resolve(`./src/templates/year.js`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const issues = await graphql(`
    query Issues {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            volume
            issue
          }
        }
      }
    }
  `);

  if (issues.errors) {
    reporter.panicOnBuild("Error loading MD issues", issues.errors);
  }

  // This query returns an array of volume numbers as strings in increasing order, same as src/hooks/useVolumes.js
  const volumeNums = await graphql(`
    query VolumeNums {
      allMarkdownRemark {
        volumes: distinct(field: { frontmatter: { volume: SELECT } })
      }
    }
  `);

  const posts = issues.data.allMarkdownRemark.nodes;
  const volumes = volumeNums.data.allMarkdownRemark.volumes
    .map((str) => parseInt(str))
    .reverse();

  // prepare to get node for newest edition,
  // we know that first element is max because we reversed the volume numbers
  const maxVolume = volumes[0];
  let maxIssue = -1;
  let newestIssueObj = undefined;

  // call `createPage` for each newsletter issue, find node for newest edition
  posts.forEach((node) => {
    const { volume, issue } = node.frontmatter;

    // find newest issue of newest volume
    if (volume === maxVolume) {
      if (issue > maxIssue) {
        maxIssue = issue;
        newestIssueObj = node;
      }
    }

    const formattedIssue = issue < 10 ? `0${issue}` : `${issue}`;
    createPage({
      path: `archive/` + `${2020 + volume}` + `/` + formattedIssue,
      component: issueTemplate,
      context: { id: node.id },
    });
  });

  // call `createPage` for landing page (newest edition)
  createPage({
    path: "/",
    component: issueTemplate,
    context: { id: newestIssueObj.id },
  });

  // call `createPage` for each collection of years
  volumes.forEach((volume) => {
    createPage({
      path: `archive/` + `${2020 + volume}`,
      component: archiveTemplate,
      context: { vol: volume },
    });
  });
};
