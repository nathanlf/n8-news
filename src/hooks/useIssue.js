import { graphql, useStaticQuery } from "gatsby";

/**
 * This uses a static query to pull in all newsletter issue content.
 *
 * @param     {number}    vol      The edition volume identifier, corresponds to the year {2020 + volume}
 * @param     {number}    iss      The edition issue identifier, corresponds to the month
 * @return    {object}    The requested newsletter issue content, represented by edition {volume.issue}
 * */

export const useIssue = (vol, iss) => {
  const data = useStaticQuery(graphql`
    query AllNewsletterIssues {
      allMarkdownRemark(sort: { frontmatter: { volume: ASC } }) {
        nodes {
          frontmatter {
            volume
            issue
            blurb
            coverImage {
              path {
                childImageSharp {
                  gatsbyImageData(width: 800, placeholder: BLURRED)
                }
              }
              caption
            }
          }
          rawMarkdownBody
          htmlAst
        }
      }
    }
  `);

  // retrieve array of all issue objects
  const allIssues = data.allMarkdownRemark.nodes;

  // collect issues into an archive object structure
  const issuesByVolume = allIssues.reduce((acc, currIssue) => {
    const { volume, issue } = currIssue.frontmatter;
    if (!(volume in acc)) {
      acc[volume] = {};
    }
    acc[volume][issue] = currIssue;

    return acc;
  }, {});
  return issuesByVolume[vol]?.[iss];
};
