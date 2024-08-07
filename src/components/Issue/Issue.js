import React from "react";
import PropTypes from "prop-types";
import { useIssue } from "../../hooks/useIssue";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TableOfContents } from "./TableOfContents";
import { Markdown } from "../Markdown";
import { Box, Divider, Stack, Typography } from "@mui/joy";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { CoverHeader } from "./CoverHeader";
import { EndSign } from "./EndSign";

/**
 * @param     {number}    vol      The edition volume identifier, corresponds to the year {2020 + volume}
 * @param     {number}    iss      The edition issue identifier, corresponds to the month
 * @return    The requested edition's content to be rendered
 * */
export const Issue = ({ vol, iss }) => {
  const { issueObj, headers } = useIssue(vol, iss);
  const { isCompact } = useWindowWidth();

  const { blurb } = issueObj.frontmatter;
  const { rawMarkdownBody } = issueObj;
  let coverImg = getImage(
    issueObj.frontmatter.coverImage?.path.childImageSharp?.gatsbyImageData
  );
  let caption = issueObj.frontmatter.coverImage?.caption;
  const date = new Date(`${2020 + vol}-${iss}-01`);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });

  return (
    <Stack
      direction="row"
      sx={{
        ".side-toc": {
          flex: "0 0 250px",
          maxWidth: isCompact ? 0 : "250px",
          transition: "max-width 400ms ease",
          overflow: "hidden",
          whiteSpace: "nowrap",
        },
        ".main-content": {
          flex: 1,
          justifySelf: "stretch",
        },
      }}
    >
      <Box
        className="side-toc"
        xs={4}
        sx={{
          height: "100%",
          position: "sticky",
          top: "0.5rem",
        }}
      >
        <TableOfContents headers={headers} />
      </Box>
      <Box className="main-content">
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
        <Markdown src={rawMarkdownBody} vol={vol} iss={iss} />
        <EndSign />
      </Box>
    </Stack>
  );
};

Issue.propTypes = {
  vol: PropTypes.number.isRequired,
  iss: PropTypes.number.isRequired,
};
