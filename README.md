## Formatting

This project uses Prettier with the default rules. To format the entire project, run `npm run format` and to check if the project is properly formatted, run `npm run check-format`.

We recommend setting up auto-formatting on save in your editor. If you're using VSCode, these setting have included in the [workspace settings](./.vscode/settings.json) of this repo, so they should automatically work. If your editor doesn't support auto-formatting with Prettier, just run the format command before you submit a PR.

## Adding a Newsletter to the Archive Workflow

1.  Convert to Markdown (if not already writing in Markdown)

    > if using Google Docs:

        a. download the document as a `.docx` file
        b. open a terminal, cd to the directory/folder that contains the downloaded document
        c. ensure that Pandoc is [installed](https://www.pandoc.org/installing.html)
        d. run this command to convert from `.docx` to `.md` -- replace "FILE_NAME" with the name of the `.docx` file: `pandoc -t gfm --extract-media . "FILE_NAME.docx" -o index.md`

2.  Add Frontmatter to Markdown File

> Frontmatter Template

    ---
    title: "Internal Newsletter Volume VOLUME_NUM, Issue ISSUE_NUM"
    date: "YYYY-MM"
    edition: "VOLUME_NUM.ISSUE_NUM"
    blurb: >
      The __MONTH__ edition of the RENCI Internal Newsletter includes ...
      ...
      ...
    coverImage:
      path: "cover-image.png"
      caption: >
        Pictured: The __PEOPLE__ working on ...
        ...
    ---

    a. replace __ with __
    b.

3.  Clean Up Conversion Errors

**Pandoc's conversion with complex documents is almost perfect, unlike many other document conversion tools. However, there may be some small conversion errors to look out for.**

-
