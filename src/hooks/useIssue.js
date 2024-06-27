import { graphql, useStaticQuery } from "gatsby";

/**
 * This uses a static query to pull in all newsletter issue content.
 *
 * @param     {number}    vol      The edition volume identifier, corresponds to the year {2020 + volume}
 * @param     {number}    iss      The edition issue identifier, corresponds to the month
 * @return    {object}    The requested newsletter issue content, represented by edition {volume.issue}
 * */

export const useIssue = (vol, iss) => {
  console.clear();
  console.log("Volume before:", vol);
  console.log("Issue before:", iss);

  const data = useStaticQuery(graphql`
    query AllNewsletterIssues {
      allMarkdownRemark(sort: { frontmatter: { volume: ASC } }) {
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

  // retrieve array of all issue objects
  const allIssues = data.allMarkdownRemark.nodes;

  // todo:
  //    - request more than just frontmatter and id, since we need the content we would use when rendering an issue
  //        - i.e. rawMarkdownBody, ..., reference things in issue.js
  //    - create custom data structure / collection to represent what we need in an organized way

  // new solution (wip)
  const issuesByVolume = allIssues.reduce((acc, currIssue) => {
    // modify acc
    const { volume, issue } = currIssue.frontmatter;
    if (!(volume in acc)) {
      acc[volume] = {};
    }
    acc[volume][issue] = currIssue;

    return acc;
  }, {});

  console.log(issuesByVolume);
  console.log("Volume after:", vol);
  console.log("Issue after:", iss);
  console.log("Requested Volume object: ", issuesByVolume[vol]);
  //   console.log("Requested Issue object: ", issuesByVolume[vol][iss]);

  return issuesByVolume[vol]?.[iss];
};
