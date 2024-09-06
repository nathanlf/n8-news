import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import { Link as MUILink } from "@mui/joy";

export const ExternalLink = React.forwardRef(function (
  { to, children, ...props },
  ref
) {
  return (
    <>
      <MUILink
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
        ref={ref}
        {...props}
      >
        {children}
      </MUILink>
    </>
  );
});

export const InternalLink = React.forwardRef(function (
  { to, children, ...props },
  ref
) {
  return (
    <MUILink component={GatsbyLink} to={to} ref={ref} {...props}>
      {children}
    </MUILink>
  );
});

export const Link = React.forwardRef(function LinkComponent(
  { to, children, ...props },
  ref
) {
  const externalUrlPattern = new RegExp(/^https?:\/\//);
  const externalURLMatch = externalUrlPattern.exec(to);

  const mailtoPattern = new RegExp(/^mailto:/);
  const mailtoMatch = mailtoPattern.exec(to);

  if (externalURLMatch || mailtoMatch) {
    return (
      <ExternalLink to={to} {...props} ref={ref}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <InternalLink to={to} {...props} ref={ref}>
      {children}
    </InternalLink>
  );
});

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ExternalLink.propTypes = Link.propTypes;
