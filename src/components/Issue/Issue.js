import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TableOfContents } from "./TableOfContents";
import { Markdown } from "../Markdown";
import { Box, Divider, Stack, Typography } from "@mui/joy";
import { useIssue, useScrollPosition, useWindowWidth } from "../../hooks";
import { CoverHeader } from "./CoverHeader";
import { EndSign } from "./EndSign";
import { createSlug } from "../../util/createSlug";

export const ActiveSectionContext = createContext({});

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

const ActiveSectionProvider = ({ children, vol, iss }) => {
  const { headers } = useIssue(vol, iss);
  const { scrollPosition } = useScrollPosition();
  const defaultActiveSection = { slug: createSlug(headers[0]), top: 0 };
  const [activeSection, setActiveSection] = useState(defaultActiveSection);
  const showOnScroll = scrollPosition > 120;

  // this watches the scrollPosition for any changes, then sets the active section accordingly
  const updateActiveSection = useRef(
    debounce(() => {
      const headingTops = headers.map((header) => {
        const slug = createSlug(header);
        const el = document.querySelector(`#${slug}`);
        const { top } = el?.getBoundingClientRect() ?? 0;
        return { slug, top };
      });

      const activeHeading =
        headingTops.reverse().find((header) => header.top === 0) ??
        defaultActiveSection;

      if (activeHeading && activeHeading.slug !== activeSection?.slug) {
        setActiveSection(activeHeading);
      } else {
        setActiveSection(defaultActiveSection);
      }
    }, 500) // Adjust the delay as needed
  ).current;

  useEffect(() => {
    updateActiveSection();
  }, [scrollPosition, updateActiveSection]);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, showOnScroll }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => useContext(ActiveSectionContext);

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

  // ternary statement is a bugfix for off-by-one month name for months after september
  const date = new Date(
    `${2020 + vol}-${iss > 9 && iss < 12 ? iss + 1 : iss}-01`
  );

  const year = date.getFullYear();
  let month = date.toLocaleString("en-US", { month: "long" });

  // temp bugfix for month remaining off-by-one when month should be December
  if (iss === 12 && month === "November") {
    month = "December";
  }

  return (
    <ActiveSectionProvider vol={vol} iss={iss}>
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
    </ActiveSectionProvider>
  );
};

Issue.propTypes = {
  vol: PropTypes.number.isRequired,
  iss: PropTypes.number.isRequired,
};
