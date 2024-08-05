/**
 * This algorithm collects and returns the text associated with each h1 header
 *  in an html abstract syntax tree.
 *
 * @param     {object}    issueObj      An issue object retrieved from using the useIssue hook
 * @return    {array}     An array of section header (h1) names as strings
 * */

export const useHeaders = (issueObj) => {
  const { htmlAst } = issueObj;
  const headers = [];

  // traverse htmlAst to find h1 elements
  htmlAst.children.forEach((child) => {
    if (child.tagName === "h1") {
      // extract text value of header
      const headerName = child.children.find((el) => el.type === "text").value;
      headers.push(headerName);
    }
  });

  return headers;
};
