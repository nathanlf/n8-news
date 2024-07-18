import { graphql, useStaticQuery } from "gatsby";

export const useVolumes = () => {
  // query returns volume numbers as strings in increasing order
  // for more on distinct queries, https://danielabaron.me/blog/gatsby5-distinct-query/
  const data = useStaticQuery(graphql`
    query VolumeNums {
      allMarkdownRemark {
        volumes: distinct(field: { frontmatter: { volume: SELECT } })
      }
    }
  `);

  // convert to integers, then convert to descending order (newest to oldest)
  const volumes = data.allMarkdownRemark.volumes
    .map((str) => parseInt(str))
    .reverse();

  return volumes;
};
