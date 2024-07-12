# renci-newsletter

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

## Deployment

First, decide the version number of your release using [semver](https://semver.org/). For this example, we will assume the version number is 1.1.4. The latest image version number can be found in the [harbor repo](https://containers.renci.org/harbor/projects/34/repositories/newsletter-temp/artifacts-tab) and latest deployed image can be found by using this command:

```bash
kubectl get pods -n comms -o jsonpath="{.items[*].spec.containers[*].image}" -l app.kubernetes.io/name=renci-dot-org-newsletter-temp
```

To build the image, draft a new release in GitHub, give it a version, then publish it. Github Actions will be triggered on the publishing of a new release. You can view the details of the build under the Actions tab in the repo.

Once the image has been successfully built, update the deployment tag in the [kubernetes/value.yaml](https://github.com/RENCI/renci-newsletter/blob/main/kubernetes/values.yaml) file.

After the tag has been updated, run this command to perform the upgrade in the kubernetes cluster:

```bash
helm upgrade renci-newsletter ./kubernetes -n comms
```

Be sure to commit and push the image tag change made to `values.yaml`.
