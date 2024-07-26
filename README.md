# RENCI Internal Newsletter

This web application was built to serve as a new home for RENCI's internal newsletter.

## Content Management

### Markdown File Requirements

Newsletter issues should be written in, or at least converted to, markdown files.

Each issue should start with frontmatter, denoted by opening and closing `---` lines. The frontmatter should include the following items:

- volume [number]
  - The volume number, which is the number of years that have passed since the newsletter's creation, in 2020. For example, volume 4 represents all issues released in 2024.
- issue [number]
  - The issue number, which is aligned with the month the edition is for. For example, issue 5 represents the month of May.
- blurb [blockquote string]
  - A few sentences summarizing the issue's key information, which will be rendered immediately after the new edition's cover image and its caption. This blurb will also appear as an edition preview in the archive.
- cover image path [string]
  - This is the cover image file's path relative to the markdown file. Since our image should be in the same file location as our `index.md` markdown file, this path should always simply be `"cover-image.png"`, as long as the cover image file is also named `cover-image.png`.
- cover image caption [blockquote string]
  - A brief description of what is depicted in the cover image. This will be displayed immediately below the cover image in each newsletter.

> [!NOTE]
> As of now, links within the image caption are unsupported.

After the frontmatter, the only requirement is that you should use h1 headers (`# Section Title`) to denote the beginning of a new section. These h1s will be automatically converted to the smart section headers seen in each issue. These headers will also be automatically listed in the table of contents.

> [!IMPORTANT]
> Be sure not to use h1 headers in other ways, as they will only be interpreted as section headers.
> Otherwise, feel free to use any valid markdown (GFM) syntax.

> [!NOTE]
> As of now, inline images are unsupported.

We have included a template to follow in the following section, but feel free to look at past editions' `index.md` files in `/newsletter-issues` for additional guidance.

### Markdown File Template

Here's an example of what your `index.md` markdown file may look like before adding any content.

```bash
---
volume: 4
issue: 5
blurb: >
  The May edition of the RENCI Internal Newsletter includes
  all kinds of awesome things ...
coverImage:
  path: "cover-image.png"
  caption: >
    Pictured: Image description goes here. If this caption ends up being
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

> [!TIP]
> You may find it helpful to use a previewer when writing in markdown to see what it may look like
> ahead of publication. GitHub has an editor and preview tab built-in when viewing a markdown file in
> the repository. Otherwise, feel free to use sites like [this](https://markdownlivepreview.com/),
> or [this](https://loilo.github.io/gfm-preview/) for GFM.

### Adding a New Edition

Inside the `/newsletter-issues` directory, create a new directory named after the new edition. For example, the directory for Volume 4, Issue 5 would be `/4.5`.

In this new edition's directory, include the following files:

- A `1999px x 370px` cover image named `cover-image.png` to match the `coverImage` value in the frontmatter
- A markdown file named `index.md` containing the newsletter content, frontmatter, and section (h1) headers
- Any inline images (unsupported as of now, but when they are, they will go here)
  - The path used in the inline image `[]()` markdown syntax is relative to where the markdown file is

Once these files are added to this new edition's directory, the application will automatically update the newest edition (landing) page to accommodate this change.

> [!NOTE]
> The newest edition will not be displayed in the archive until it is no longer the newest edition.

## Deployment

Deployment docs on main branch, resolve potential conflict here

### Tech Stack

This is a [Node.js](https://nodejs.org/en) and [Gatsby](https://www.gatsbyjs.com/) project.

### Scripts

`npm run predevelop` to run [image preoptimization](https://www.gatsbyjs.com/docs/preoptimizing-images/) script and start the development server.

`npm run prebuild` to run [image preoptimization](https://www.gatsbyjs.com/docs/preoptimizing-images/) script and create a production build.

## Formatting

This project uses Prettier with the default rules. To format the entire project, run `npm run format` and to check if the project is properly formatted, run `npm run check-format`.

We recommend setting up auto-formatting on save in your editor. If you're using VSCode, these setting have included in the [workspace settings](./.vscode/settings.json) of this repo, so they should automatically work. If your editor doesn't support auto-formatting with Prettier, just run the format command before you submit a PR.

## Contributing

## License
