import React from "react";
import PropTypes from "prop-types";
import { Link } from "./Link";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useVolumes } from "../hooks/useVolumes";

export const YearSelector = ({ defaultYear }) => {
  const volumes = useVolumes();
  const years = volumes.map((volume) => volume + 2020);

  return (
    <Select
      defaultValue={defaultYear}
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 90,
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
        <Link key={year} to={`/archive/${year}`}>
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
