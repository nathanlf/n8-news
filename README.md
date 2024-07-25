# RENCI Internal Newsletter

This web application was built to serve as a new home for RENCI's internal newsletter.

## Content Management

### Markdown File Requirements

Newsletter issues should be written in, or at least converted to, markdown files.

Each issue should start with frontmatter, denoted by opening and closing `---` lines.

The frontmatter should include the following items:

- volume [number]
  - The volume number, which is aligned with the number of years that have passed since the newsletter's creation, in 2020. For example, volume 4 represents all issues released in 2024.
- issue [number]
  - The issue number, which is aligned with
- blurb [blockquote string]
  - A few sentences summarizing the issue's key information, which will be rendered immediately after the new edition's cover image and its caption. This blurb will also appear as an edition preview in the archive.
- cover image path [string]
  - This is the cover image file's path relative to the markdown file. Since our image should be in the same file location as our `index.md` markdown file "cover-image.png", so make sure to name your cover file accordingly.
- cover image caption [blockquote string]

We have included a template to follow in the following section, but feel free to look at past editions' `index.md` files in `/newsletter-issues` for additional guidance.

[!NOTE]
As of now, links within the image caption are unsupported.

- md file, of course
- frontmatter
  - `bash template`
  - description of each item, highlight/specify which items need to be updated each edition
    - specify data types
    - `[]()` links in captions not supported, as of now
- section # (h1) headers to divide sections (no h1 headers anywhere else, btw) -- will auto convert to fancy one
- in between the section headers, feel free to use any valid markdown (GFM) & do whatever / follow TBD structure
  - inline images are not supported, as of now

[!NOTE]
This is a note or informational message

[!TIP]
This is a tip or suggestion.

[!IMPORTANT]
This is important or critical information.

## Frontmatter Template

Here's an example

```bash
---
volume: 4
issue: 5
blurb: >
  The May edition of the RENCI Internal Newsletter includes
  all kinds of awesome things! ...
coverImage:
  path: "cover-image.png"
  caption: >
    Pictured: Image description goes here! If this caption ends up being
      longer than one line, make sure to include a small indent on subsequent
      lines, as shown here ...
---

# Notes From OOD
# Projects, Funding and Awards
# ACIS Messages
# Finance Messages
# DEIA
# Proposals
# Professional Development
# Announcements
# Upcoming Events
# Ongoing Initiatives
```

### Adding a New Edition

Inside the `/newsletter-issues` directory, create a new directory named after the new edition. For example, the directory for Volume 4, Issue 5 is `/4.5`.

In this new edition's directory, include the following files:

- A `1999px x 370px` cover image named `cover-image.png` to match the `coverImage` value in the frontmatter
- A markdown file named `index.md` containing the newsletter content, frontmatter, and section (h1) headers
- Any inline images (unsupported, but when they are, they will go here)
  - Note: the path used in the inline image `[]()` markdown syntax will be relative to where the markdown file is

## Deployment

Docs on main branch, resolve potential conflict here

- this is a Node.js & Gatsby project (link docs)
- `npm run predevelop` image optimization script

## Formatting

This project uses Prettier with the default rules. To format the entire project, run `npm run format` and to check if the project is properly formatted, run `npm run check-format`.

We recommend setting up auto-formatting on save in your editor. If you're using VSCode, these setting have included in the [workspace settings](./.vscode/settings.json) of this repo, so they should automatically work. If your editor doesn't support auto-formatting with Prettier, just run the format command before you submit a PR.

## Contributing

## License
