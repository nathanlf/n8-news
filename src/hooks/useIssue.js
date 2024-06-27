import { graphql, useStaticQuery } from "gatsby";

/**
 * This uses a static query to pull in all newsletter issue content.
 *
 * @param     {number}    volume      The edition volume identifier, corresponds to the year {2020 + volume}
 * @param     {number}    issue       The edition issue identifier, corresponds to the month
 * @return    {object}    The requested newsletter issue content, represented by edition {volume.issue}
 * */

export const useIssue = ({ volume, issue }) => {
  const allIssues = useStaticQuery(graphql`
    query AllNewsletterIssues {
      allMarkdownRemark {
        nodes {
          frontmatter {
            volume
            issue
          }
          id
        }
      }
    }
  `);

  // todo:
  //    - request more than just frontmatter and id, since we need the content we would use when rendering an issue
  //        - i.e. rawMarkdownBody, ..., reference things in issue.js
  //    - create custom data structure / collection to represent what we need in an organized way
  /*
        {
            1: {    // volume 1
                1: {},  // issue 1
                2: {},
                3: {},
                ...
            },
            2: {    // volume 2
                1: {},  // issue 1
                2: {},
                3: {},
                ...
            },
            3: {    // volume 3
                1: {},
                2: {},
                3: {},
                ...
            },
            ...
        }
  */

  const issueToReturn = allIssues.find(
    (_issue) =>
      volume === _issue.frontmatter.volume && issue === _issue.frontmatter.issue
  );

  if (!issueToReturn) {
    throw new Error("Error returning issue");
  }

  return issueToReturn;
};
