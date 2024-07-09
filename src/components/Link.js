import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { Link as MUILink } from "@mui/joy";

export const ExternalLink = ({ to, children, ...props }) => {
  return (
    <>
      <MUILink
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        {...props}
      >
        {children}
      </MUILink>
    </>
  );
};

export const InternalLink = ({ to, children, ...props }) => {
  return (
    <MUILink component={GatsbyLink} to={to} {...props}>
      {children}
    </MUILink>
  );
};

export const Link = ({ to, children, ...props }) => {
  const externalUrlPattern = new RegExp(/^https?:\/\//);
  const externalURLMatch = externalUrlPattern.exec(to);

  const mailtoPattern = new RegExp(/^mailto:/);
  const mailtoMatch = mailtoPattern.exec(to);

  if (externalURLMatch || mailtoMatch) {
    return (
      <ExternalLink to={to} {...props}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <InternalLink to={to} {...props}>
      {children}
    </InternalLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ExternalLink.propTypes = Link.propTypes;
