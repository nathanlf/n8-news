## Formatting

This project uses Prettier with the default rules. To format the entire project, run `npm run format` and to check if the project is properly formatted, run `npm run check-format`.

We recommend setting up auto-formatting on save in your editor. If you're using VSCode, these setting have included in the [workspace settings](./.vscode/settings.json) of this repo, so they should automatically work. If your editor doesn't support auto-formatting with Prettier, just run the format command before you submit a PR.

## Workflow for Adding a Newsletter to the Archive

### 1. Convert to Markdown

_If Converting from Google Docs:_

- download the document as a `.docx` file
- open a terminal, cd to the directory/folder that contains the downloaded document
- ensure that Pandoc is [installed](https://www.pandoc.org/installing.html) locally
- run this command to convert from `.docx` to `.md`: `pandoc -t gfm --extract-media . "FILE_NAME.docx" -o index.md`
  - replace "FILE_NAME" with the name of the downloaded `.docx` file

### 2. Clean Up Conversion Errors

_Pandoc's conversion with complex documents has few errors, unlike many other document conversion tools. Nonetheless, there may be some small things to look out for. Most of these can be removed using a simple `ctrl / cmd + f` find and replace (with nothing)._

- Unrendered HTML tags: These are created in the conversion to preserve things that are irrelevant for our purposes and are not rendered as they are intended to be as we make use of the raw Markdown body, which cannot contain HTML.
  - `<u>` and `</u>`
  - `<span>` and `</span>`
  - `<img ... />` tags can be entirely removed and replaced by a `# Section Name` header, since we generate section header ourselves by mapping `h1` section headers to corresponding `SectionHeader` Components.
  - `<!-- -->`
- Anything else that may catch your eye as inaccurate when previewing the rendered markdown
  - for example, white space characters that are _italicized_ that _do not_ show up visually in Google Docs, but _will_ show up in the Markdown. As a result, you may come across text that looks something like `**Text goes here! **`, which will not render properly as there is a space before the closing asterisks. When removed, `**Text goes here!**` will be italicized as intended.

### 3. Add Frontmatter to Markdown File

_Frontmatter Template_

> >

    ---
    title: "Internal Newsletter Volume VOLUME_NUM, Issue ISSUE_NUM"
    date: "YYYY-MM"
    edition: "VOLUME_NUM.ISSUE_NUM"
    blurb: >
      The __MONTH__ edition of the RENCI Internal Newsletter includes ...
        ...
    coverImage:
      path: "cover-image.png"
      caption: >
        Pictured: The __PEOPLE__ working on ...
          ...
    ---

- set `title`, `date`, `edition` (i.e. _"4.1"_, _"4.2"_, etc.), `blurb`, and coverImage `caption` accordingly
- the `path` of coverImage is the name of the image file, which should always be `"cover-image.png"`

### 4. Transfer `index.md` and `cover-image.png` to Project Directory

- These two files should be colocated inside a new directory named after the edition (`VOLUME_NUM.ISSUE_NUM`) at `/src/newsletter-issues/_EDITION_`

#### Note: _If the Newsletter being added to the archive is the newest edition, the string literals denoting the path to the "Newest Edition" page need to be updated in the following files:_

- `/src/pages/index.js`
- `/src/components/Layout/Navbar.js`
