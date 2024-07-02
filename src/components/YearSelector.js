import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

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
      sx={{
        py: 1,
      }}
    >
      {years.map((year) => (
        <Option key={year} value={year}>
          {year}
        </Option>
      ))}
    </Select>
  );
};

YearSelector.propTypes = {
  defaultYear: PropTypes.number.isRequired,
};
