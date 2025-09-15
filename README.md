# Internal Newsletter

This web application was _*originally*_ built to serve as a new home for a company's internal newsletter. This repo is currently an anonymized, repurposed representation of the original app, in order to showcase what it might look like in use.

Development will continue, as I have a clear vision for how this app can be repurposed with time to serve as a way to consistently log life, lessons, and learning.

As new updates are made, this README will be updated to reflect any tech stack changes, content management steps, and deployment workflows.

Essentially, this app allows one to document reflections, achievements, projects, thought processes, memories, and more over time.

Ultiamtely, the goal is to allow users to have a medium in which they can freely express themselves, for the sake of appreciating their life and all its experiences. And to never forget the fun along the way, of course.

## Development

Spin up the development server on [http://localhost:8000](http://localhost:8000) by running `npm run develop`.

When proposing changes, always verify the build process runs without error locally with `npm run build`. Serve the built application on port `localhost:9000` with `npm run serve`.

## Content Management

> [!NOTE]
> A content manager UI and database support are under construction, in order to support multiple users and allow personal, shareable entries, tied to the users' accounts ...

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

After the frontmatter, the only requirement is that h1 headers are reserved for the purpose of (`# Section Title`) to denote the beginning of a new section. These h1s will be automatically converted to smart section header components seen in each issue. These headers will also be automatically listed in the table of contents. The section titles and number of sections are all up to you, however.

> [!NOTE]
> Inline images are in the works...

The following is a template to follow in the following section, but feel free to look at past editions' `index.md` files in `src/newsletter-issues` for additional guidance.

> [!IMPORTANT]
> Be sure to only use h1 headers in this way, as h1s will only be interpreted as (mapped to) custom section header compnoents and table of contents list items.
> Otherwise, feel free to use any valid markdown (GFM) syntax.

### Markdown File Template

Here's an example of what an `index.md` (newsletter issue) markdown file may look like before adding any content.

```bash
---
volume: 4
issue: 6
blurb: >
  The June edition of the Internal Newsletter includes
  all kinds of awesome things ...
coverImage:
  path: "../images/cover-image.png"
  caption: >
    Pictured: Image description goes here. If this caption ends up being
      longer than one line, make sure to include a small indent on subsequent
      lines, as shown here ...
---

# Title of Section
# Yet Another Section Title
# Section 3
# Section 4
# Section 5
# Section 6
# Section 7
# Section 8
# Section 9
# Section 10
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
- Any inline images
  - The path used in the`[]()` markdown syntax is relative to where the markdown file is: `src/newsletter-issues`

Once these files are added to this new edition's directory, the application will automatically update the newest edition (landing) page to accommodate this change.

> [!NOTE]
> The newest edition will not be displayed in the archive until it is no longer the newest edition.

## Deployment

First, decide the version number of your release using [semver](https://semver.org/). For this example, we will assume the version number is 1.1.4. The latest image version number can be found at [container registry change in progress](registry-1.docker.io) and the latest deployed image can be found by using this command:

```bash
kubectl get pods -n comms -o jsonpath="{.items[*].spec.containers[*].image}" -l app.kubernetes.io/name=n8-newsletter
```

Docker personal access token support under construction, I'm reading the [docs](https://docs.docker.com/security/access-tokens/).

> [!NOTE]
> The GitHub Actions automation workflow is being reworked at the moment, so be aware that creating a new release version on the main branch will not trigger a production deployment at the moment.

To build the image, draft a new release in GitHub, give it a version, then publish it. Github Actions will be triggered on the publishing of a new release. You can view the details of the build under the Actions tab in the repo.

Once the image has been successfully built, update the deployment version in the [kubernetes/values.yaml](https://github.com/nathanlf/n8-news/kubernetes/values.yaml) file.

After the image version has been updated (don't forget to commit and push), run this command to perform the upgrade in the kubernetes cluster:

```bash
helm upgrade n8-news ./kubernetes -n gamer_city
```

### Manual Deployment

You can build, test, and push to the container registry manually by using the following series of commands. Make sure to update the version number accordingly and to use an unused port to test the image.

```bash
docker login `registry-1.docker.io`
docker build -t registry-1.docker.io/gamer_city/n8-newsletter:1.4.4 .
docker run --rm -p 8080:8080 registry-1.docker.io/gamer_city/n8-newsletter:1.4.4
docker push containers.renci.org/comms/newsletter:1.4.4
helm upgrade n8-news ./kubernetes -n gamer_city
```

### Tech Stack

This is a [Node.js](https://nodejs.org/en) and [Gatsby](https://www.gatsbyjs.com/) project.

## Formatting

This project uses Prettier with the default rules. To format the entire project, run `npm run format` and to check if the project is properly formatted, run `npm run check-format`.

We recommend setting up auto-formatting on save in your editor. If you're using VSCode, these setting have included in the [workspace settings](./.vscode/settings.json) of this repo, so they should automatically work. If your editor doesn't support auto-formatting with Prettier, just run the format command before you submit a PR.
