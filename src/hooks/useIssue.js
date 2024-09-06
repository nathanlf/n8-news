import { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

/**
 * This uses vol & iss values to lookup desired issue content.
 *
 * @param     {number}    vol      The edition volume identifier, corresponds to
 *                                 the year {2020 + volume}
 * @param     {number}    iss      The edition issue identifier, corresponds to
 *                                 the month
 * @return    {object}    The requested newsletter issue content and an array of
 *                        h1 header strings for that issue
 * */
export const useIssue = (vol, iss) => {
  const issuesArchive = useAllIssues();

  // object representation of the current issue, as specified by `vol` & `iss`
  const issueObj = useMemo(() => issuesArchive[vol]?.[iss], [issuesArchive, vol, iss]);

  // array of headings from issue html
  const headers = useMemo(() => issueObj.htmlAst.children
    .reduce((acc, child) => {
      if (child.tagName === "h1") {
        const headerName = child.children.find((el) => el.type === "text").value;
        acc.push(headerName);
      }
      return acc;
    }, []), [issueObj.htmlAst.children]);

  return {
    headers,
    issueObj,
  };
};

/**
 * This uses a static query to pull in all newsletter issue content.
 *
 * @return    {object}    The requested newsletter issue content and an
 *                        array of h1 header strings for that issue
 * */
const useAllIssues = () => {
  const data = useStaticQuery(issuesQuery);

  return data.newsletter.issues
    .reduce((acc, currIssue) => {
      const { volume, issue } = currIssue.frontmatter;
      if (!(volume in acc)) {
        acc[volume] = {};
      }
      acc[volume][issue] = currIssue;

      return acc;
    }, {});
};

const issuesQuery = graphql`
  query AllNewsletterIssues {
    newsletter: allMarkdownRemark(
      sort: [
        { frontmatter: { volume: ASC } }
        { frontmatter: { issue: ASC } }
      ]
    ) {
      issues: nodes {
        frontmatter {
          volume
          issue
          blurb
          coverImage {
            path {
              childImageSharp {
                gatsbyImageData(width: 1000, placeholder: BLURRED)
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
`;