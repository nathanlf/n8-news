import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout/Layout";
import TableOfContents from "../components/Issue/TableOfContents";
import { Markdown } from "../components/Issue/Markdown";

export default function NewsletterIssue({ data }) {
  const { title, date, blurb } = data.markdownRemark.frontmatter;
  const { rawMarkdownBody, htmlAst } = data.markdownRemark;
  let coverImg = getImage(
    data.markdownRemark.frontmatter.coverImage?.path.childImageSharp
      ?.gatsbyImageData,
  );
  let caption = data.markdownRemark.frontmatter.coverImage.caption;
  const headers = [];

  // Traverse htmlAst to find h1 elements
  htmlAst.children.forEach((child) => {
    if (child.tagName === "h1") {
      // Extract text value of header
      const headerName = child.children.find((el) => el.type === "text").value;
      headers.push(headerName);
    }
  });

  return (
    <Layout pageTitle={title}>
      <h3>{date}</h3>
      <p>
        <em>{blurb}</em>
      </p>
      <div>
        <TableOfContents headers={headers} />
      </div>
      <div>
        <GatsbyImage image={coverImg} />
      </div>
      <p>
        <em>{caption}</em>
      </p>
      <Markdown src={rawMarkdownBody} />
    </Layout>
  );
}

export const query = graphql`
  query NewsletterIssue($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
        blurb
        coverImage {
          path {
            childImageSharp {
              gatsbyImageData(width: 1024, placeholder: BLURRED)
            }
          }
          caption
        }
      }
      rawMarkdownBody
      htmlAst
    }
  }
`;
