import React from "react";
import { useIssue } from "../hooks/useIssue";

/**
 * @param     {number}    vol      The edition volume identifier, corresponds to the year {2020 + volume}
 * @param     {number}    iss      The edition issue identifier, corresponds to the month
 * @return    The requested edition's content to be rendered
 * */
export const NewsletterIssue = ({ vol, iss }) => {
  const issueObj = useIssue(vol, iss);
  //   return <>{issueObj content}</>;
  return <></>;
};
