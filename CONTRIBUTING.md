# Contributing Guide

Thank you for contributing to this project! All contributions are greatly appreciated.

Before making contributions, please read and understand the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Setting up for development

First install [Node.js](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/getting-started/install), and [Visual Studio Code](https://code.visualstudio.com/Download) if you haven't already.

Then open a terminal and clone this repo:

<details open>
<summary>HTTPS</summary>

```bash
git clone https://github.com/EdwinChang24/website.git && cd website
```

</details>

<details>
<summary>SSH</summary>

```bash
git clone git@github.com:EdwinChang24/website.git && cd website
```

</details>

<details>
<summary><a href="https://cli.github.com/">GitHub CLI</a></summary>

```bash
gh repo clone EdwinChang24/website && cd website
```

</details>

Install the necessary dependencies:

```bash
yarn install
```

Open the folder in Visual Studio Code:

```bash
code .
```

If you see a notification about recommended workspace extensions, install them.

Now, in the extensions view of Visual Studio Code, search this:

```text
@builtin typescript-language-features
```

There should be an extension called **TypeScript and JavaScript Language Features**.
Click the arrow next to the button that says **Disable** and click on **Disable (Workspace)**.
Then reload Visual Studio Code.
This will enable [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471).

To run the website, open a terminal and run:

```bash
yarn run dev -- -o
```

This will start a development server at `localhost:3000/`.

## Notes

-   Using Visual Studio Code's built-in Git tools may not work properly with the custom Git hooks. Please use the command line instead.
-   When committing changes, it's recommended to use `yarn run commit` rather than `git commit`. This will show a prompt to format the commit message correctly.
