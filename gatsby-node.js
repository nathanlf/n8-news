const path = require("path");
const postTemplate = path.resolve(`./src/templates/issue.js`); // replaced post.jsx with issue.js - plugin-mdx to transformer-remark

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
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

  if (result.errors) {
    reporter.panicOnBuild("Error loading MD result", result.errors);
  }

  const posts = result.data.allMarkdownRemark.nodes;

  // call `createPage` for each result
  posts.forEach((node) => {
    const { volume, issue } = node.frontmatter;
    const formattedIssue = issue < 10 ? `0${issue}` : `${issue}`;
    createPage({
      path: `archive/` + `${2020 + volume}` + `/` + formattedIssue,
      component: postTemplate,
      context: { id: node.id },
    });
  });
};
