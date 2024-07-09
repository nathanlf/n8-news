import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Link } from "./Link";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { KeyboardArrowDown } from "@mui/icons-material";

export const YearSelector = ({ defaultYear }) => {
  const data = useStaticQuery(graphql`
    query VolumeNums {
      allMarkdownRemark {
        volumes: distinct(field: { frontmatter: { volume: SELECT } })
      }
    }
  `);

  // distinct query returns strings - convert to integers, reverse to list volumes DESC (newest to oldest)
  const volumes = data.allMarkdownRemark.volumes
    .map((str) => parseInt(str))
    .reverse();
  const years = volumes.map((volume) => volume + 2020);

  return (
    <Select
      defaultValue={defaultYear}
      indicator={<KeyboardArrowDown />}
      sx={{
        py: 1,
        width: 240,
        fontWeight: 600,
        display: "flex",
        justifyContent: "center",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {years.map((year) => (
        <Link
          key={year}
          to={`/archive/${year}`}
          sx={{
            fontWeight: 500,
            justifyContent: "center",
          }}
        >
          <Option value={year} sx={{ flexGrow: 1 }}>
            {year}
          </Option>
        </Link>
      ))}
    </Select>
  );
};

YearSelector.propTypes = {
  defaultYear: PropTypes.number.isRequired,
};
