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
            date
            edition
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MD result", result.errors);
  }

  // Create blog post pages.
  const posts = result.data.allMarkdownRemark.nodes;

  // you'll call `createPage` for each result
  posts.forEach((node) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: "archive/" + node.frontmatter.date + "/" + node.frontmatter.edition,
      // changed from `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}` to postTemplate
      component: postTemplate,
      context: { id: node.id },
    });
  });
};
