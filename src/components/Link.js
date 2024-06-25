import React from "react";
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
      >
        {children}
      </MUILink>
    </>
  );
};

export const InternalLink = ({ to, children, ref, ...props }) => {
  return (
    <MUILink component={GatsbyLink} to={to} {...props} ref={ref}>
      {children}
    </MUILink>
  );
};

export const Link = React.forwardRef(({ to, children, ...props }, ref) => {
  const externalUrlPattern = new RegExp(/^https?:\/\//);
  const match = externalUrlPattern.exec(to);
  if (match) {
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
