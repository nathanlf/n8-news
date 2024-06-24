import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { Link as MUILink } from "@mui/joy";

// export const ExternalLinkIcon = ({}) => {
//     return (
//            <></>
//     )
// }

export const ExternalLink = ({ to, children }) => {
  return (
    <>
      <MUILink
        href={to}
        target="_blank"
        // sx={{
        //     ':hover': {

        //     }
        // }}
      >
        {children}
      </MUILink>
    </>
  );
};
