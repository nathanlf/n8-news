## Formatting

This project uses Prettier with the default rules. To format the entire project, run `npm run format` and to check if the project is properly formatted, run `npm run check-format`.

We recommend setting up auto-formatting on save in your editor. If you're using VSCode, these setting have included in the [workspace settings](./.vscode/settings.json) of this repo, so they should automatically work. If your editor doesn't support auto-formatting with Prettier, just run the format command before you submit a PR.

## Content Management

### Converting From Google Docs

This is the process that was used to convert all archived issues to markdown, as they were originally written in Google Docs. There are a few tools out there for this, but I found pandoc to be the only one with an almost perfect conversion for our purposes.

Download the document as a `.docx` file.

Ensure that [Pandoc](https://www.pandoc.org/installing.html) is installed locally.

Open a terminal, cd to the directory/folder that contains the downloaded document.

Run the following command to convert from `.docx` to `.md`:

```bash
pandoc -t gfm --extract-media . "FILE_NAME.docx" -o index.md
```

Make sure to replace "FILE_NAME" with the name of the downloaded `.docx` file. This will generate a markdown file named `index.md` in the current directory.

#### Cleaning Up Conversion Errors

Pandoc's conversion with complex documents has few errors, unlike many other document conversion tools. Nonetheless, there may be some small things to look out for. Most of these can be quickly removed using a simple `ctrl + f` or `cmd + f` find and replace all.

- The following items were often found, and should be discarded:
  - `<u>` and `</u>`
  - `<span class="mark">` and `</span>`
  - `<!-- -->`
  - `<img ... />` tags (denoting sections)
- Occasionally, there will be other formatting errors:
  - For example, white space characters that are _italicized_ (that do not show up visually in Google Docs) _will_ show up in the converted Markdown. As a result, you may come across text that looks something like `**Text goes here! **`, which will not render properly as there is a space before the closing asterisks. When removed, `**Text goes here!**` will be italicized as intended.
