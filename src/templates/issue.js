import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Typography from "@mui/joy/Typography";
import TableOfContents from "../components/Issue/TableOfContents";
import { Markdown } from "../components/Issue/Markdown";
import { PageTitle } from "../components/Layout/PageTitle";

export default function NewsletterIssue({ data }) {
  const { volume, issue, blurb } = data.markdownRemark.frontmatter;
  const { rawMarkdownBody, htmlAst } = data.markdownRemark;
  let coverImg = getImage(
    data.markdownRemark.frontmatter.coverImage?.path.childImageSharp
      ?.gatsbyImageData
  );
  let caption = data.markdownRemark.frontmatter.coverImage.caption;
  const date = new Date(`202${volume}, ${issue}`);
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
    <>
      <PageTitle title={`Volume ${volume}, Issue ${issue}`} />
      <Typography color="neutral" level="h4" variant="plain">
        {`${date.toLocaleString("en-US", { month: "long" })} ${date.getFullYear()}`}
      </Typography>
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
    </>
  );
}

export const query = graphql`
  query NewsletterIssue($id: String) {
    markdownRemark(id: { eq: $id }) {
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
`;
