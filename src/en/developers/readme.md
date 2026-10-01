# Customization and Contribution

## WebGAL Source Code Repository

[https://github.com/OpenWebGAL/WebGAL](https://github.com/OpenWebGAL/WebGAL)

## Branch Description

```
main: Stable version
dev: WebGAL development version
other branches: Archives of older versions
```

## Update Plan

See [WebGAL Information](/info)

## Contributor Guidelines

If you wish to contribute to the WebGAL Terre visual editor, please refer to the [WebGAL Terre Contributor Guide](terre)

### Regarding the Use of AI

AI has changed the way software is developed. While significantly increasing software development efficiency, it has also brought many challenges. When building UI, extensive use of AI often leads to issues known as "AI Slop"—AI-generated UIs frequently do not align with human usage habits, sometimes include meaningless explanatory text, and often suffer from layout issues such as overflow and misalignment. When writing code, AI is also prone to producing a large amount of redundant code or "defensive programming" code in an effort to quickly patch errors. AI also struggles to produce more concise code that is easy to read and maintain.

The WebGAL project has established some guidelines regarding the use of AI. When writing code, please comply with these guidelines:

1. Humans design the architecture and implementation plan, while AI writes the code. We do not accept coding approaches where goals are simply given to AI without human involvement in the design. After AI writes the code, manual code review and testing of the relevant modules are required before submitting a PR.

2. AI-generated text is not allowed in Issues and PRs. Even if it is not very detailed, you only need to provide sufficient information to locate the issue or explain your intent. Overly detailed AI-generated descriptions make it harder to grasp key points and focus on truly important information.

3. For UI, prototype design must be completed by humans; AI can only be used for implementation. Based on our experience over several past version iterations, UIs generated directly by AI based on features are considered far below expectations.

### Contribution Requirements

To help us better understand and review your contribution, please note the following:

**Pre-Pull Request Preparation:**

1. *Submit an Issue First:* **Before starting development work, please submit an Issue to discuss your ideas and design proposal**. This helps avoid duplicate work, ensures your contribution aligns with the project direction, and prevents PRs from being unable to merge due to design issues.

2. *RFC (Request for Comments):* For major changes or new features, we recommend submitting an RFC or detailed design proposal first to discuss the feasibility of the technical approach with maintainers and community members.

**Code Quality Requirements:**

1. To help us understand your code logic, we recommend adding comments to key sections.

2. If you add or modify functionality, please provide corresponding test methods to ensure the functionality works as expected. If you refactor code, please also provide test methods to cover the affected areas and ensure the refactoring does not introduce new issues.

3. When submitting a Pull Request, please briefly describe the changes you made and the reasons behind them, and reference the related Issue. This will help us understand your contribution more quickly.

### Starting the WebGAL Project Locally

WebGAL currently uses yarn as a package manager and yarn workspace as a monorepo manager.

If you don't have yarn, please install it using the following command:

``` bash
npm install yarn -g
```

Then, execute the following command in the project root directory:

``` bash
yarn
```

to install dependencies.

This project has 3 packages, each corresponding to different functionalities:

| Package Name | Content                  |
| ------------ | ------------------------- |
| parser      | WebGAL Parser             |
| server      | WebGAL Local Debug Server |
| webgal      | Engine Core                |
| yukimi      | Planned yukimi support library |

## Starting the WebGAL Engine Project Locally

You can start the development server by running the following script:

``` bash
yarn dev
```

If you want to build WebGAL, use:

``` bash
yarn build
```

The packaged output is located in the `packages/webgal/dist` directory.

## About WebGAL Technology

WebGAL is a project of considerable scale, and diving directly into the code can be overwhelming. Therefore, here is a reference document about WebGAL technology to help you understand it.

[WebGAL Technical Introduction](/en/tech)

In addition, we will also provide some documentation in some key directories of the source code to explain the principles of that module. This information will be provided in Chinese. Nowadays, large language models perform well enough in translation, so you don't have to worry if you can't read Chinese. You can try using a large language model to translate it into your language.

## Importing the Built WebGAL into the WebGAL Terre Editor

::: tip
After you have finished your customization, if you want to use the WebGAL editor to preview and manage resources in real time, import the build output into WebGAL Terre as a custom engine. See [How to use custom engine](/en/derivative). If you are developing WebGAL Terre from source, you can also replace `packages/terre2/assets/templates/WebGAL_Template` to update the built-in engine template.
:::
