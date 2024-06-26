import { graphql, useStaticQuery } from "gatsby";

/**
 * This uses a static query to pull in all newsletter issue content.
 *
 * @param     {string}    edition      The edition identifier, `volume.issue`
 * @return    ***
 * */

export const useIssue = () => {
  const allIssues = useStaticQuery(graphql`
      query AllNewsletterIssues {
        1: allMarkdownRemark(filter: {frontmatter: {volume: {eq: 1}}}) {
            nodes {
            
            }
        }
        2: allMarkdownRemark(filter: {frontmatter: {volume: {eq: 2}}}) {
            nodes {
            
            }
        }
      }
    `);

  return allIssues;
};
