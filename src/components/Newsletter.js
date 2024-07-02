import React from "react";
import { useIssue } from "../hooks/useIssue";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Typography from "@mui/joy/Typography";
import { TableOfContents } from "../components/Issue/TableOfContents";
import { Markdown } from "../components/Issue/Markdown";
import { PageTitle } from "../components/Layout/PageTitle";

/**
 * @param     {number}    vol      The edition volume identifier, corresponds to the year {2020 + volume}
 * @param     {number}    iss      The edition issue identifier, corresponds to the month
 * @return    The requested edition's content to be rendered
 * */
export const Newsletter = ({ vol, iss }) => {
  const issueObj = useIssue(vol, iss);

  const { blurb } = issueObj.frontmatter;
  const { rawMarkdownBody, htmlAst } = issueObj;
  let coverImg = getImage(
    issueObj.frontmatter.coverImage?.path.childImageSharp?.gatsbyImageData
  );
  let caption = issueObj.frontmatter.coverImage?.caption;
  const date = new Date(`${2020 + vol}-${iss}-01`);
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
      <PageTitle title={`Volume ${vol}, Issue ${iss}`} />
      <Typography color="neutral" level="h4" variant="plain" gutterBottom>
        {`${date.toLocaleString("en-US", { month: "long" })} ${date.getFullYear()}`}
      </Typography>
      <GatsbyImage image={coverImg} alt={`${vol}.${iss} cover image`} />
      <Typography
        level="body-sm"
        textAlign="center"
        gutterBottom
        sx={{
          fontStyle: "italic",
          py: 1,
        }}
      >
        {caption}
      </Typography>
      <div>
        <TableOfContents headers={headers} />
      </div>
      <Typography
        level="body-lg"
        sx={{
          fontStyle: "italic",
          fontWeight: 500,
        }}
      >
        {blurb}
      </Typography>
      <Markdown src={rawMarkdownBody} />
    </>
  );
};
