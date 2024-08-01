import React from "react";
import PropTypes from "prop-types";
import { useIssue } from "../../hooks/useIssue";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TableOfContents } from "./TableOfContents";
import { Markdown } from "../Markdown";
import { Box, Divider, Typography } from "@mui/joy";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { CompactTableOfContents } from "./CompactTableOfContents";
import { CoverHeader } from "./CoverHeader";
import { EndSign } from "./EndSign";

/**
 * @param     {number}    vol      The edition volume identifier, corresponds to the year {2020 + volume}
 * @param     {number}    iss      The edition issue identifier, corresponds to the month
 * @return    The requested edition's content to be rendered
 * */
export const Issue = ({ vol, iss }) => {
  const issueObj = useIssue(vol, iss);
  const { isCompact } = useWindowWidth();

  const { blurb } = issueObj.frontmatter;
  const { rawMarkdownBody, htmlAst } = issueObj;
  let coverImg = getImage(
    issueObj.frontmatter.coverImage?.path.childImageSharp?.gatsbyImageData
  );
  let caption = issueObj.frontmatter.coverImage?.caption;
  const date = new Date(`${2020 + vol}-${iss}-01`);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
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
      {!isCompact && (
        <Box
          sx={{
            position: "absolute",
            right: "100%",
            width: "250px",
            mr: 5,
            height: "100%",
          }}
        >
          <TableOfContents headers={headers} />
        </Box>
      )}
      <GatsbyImage image={coverImg} alt={`${vol}.${iss} cover image`} />
      <CoverHeader vol={vol} iss={iss} month={month} year={year} />
      <Typography
        textAlign="center"
        sx={{
          fontStyle: "italic",
          px: 1,
          py: 1.5,
        }}
      >
        <Markdown src={caption} />
      </Typography>
      <Divider />
      <Typography
        level="body-lg"
        sx={{
          fontStyle: "italic",
          fontWeight: 500,
          pt: 1.5,
        }}
      >
        {blurb}
      </Typography>
      {isCompact && <CompactTableOfContents headers={headers} />}
      <Markdown src={rawMarkdownBody} />
      <EndSign />
    </>
  );
};

Issue.propTypes = {
  vol: PropTypes.number.isRequired,
  iss: PropTypes.number.isRequired,
};
