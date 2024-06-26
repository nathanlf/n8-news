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

  // For more on distinct queries, https://danielabaron.me/blog/gatsby5-distinct-query/
  // * This query returns an array of volume numbers as strings
  const volumeNums = await graphql(`
    query VolumeNums {
      allMarkdownRemark {
        volumes: distinct(field: { frontmatter: { volume: SELECT } })
      }
    }
  `);

  if (issues.errors) {
    reporter.panicOnBuild("Error loading MD issues", issues.errors);
  }

  const posts = issues.data.allMarkdownRemark.nodes;
  const volumes = volumeNums.data.allMarkdownRemark.volumes.map((str) =>
    parseInt(str)
  );

  // call `createPage` for each newsletter issue
  posts.forEach((node) => {
    const { volume, issue } = node.frontmatter;
    const formattedIssue = issue < 10 ? `0${issue}` : `${issue}`;
    createPage({
      path: `archive/` + `${2020 + volume}` + `/` + formattedIssue,
      component: issueTemplate,
      context: { id: node.id },
    });
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
