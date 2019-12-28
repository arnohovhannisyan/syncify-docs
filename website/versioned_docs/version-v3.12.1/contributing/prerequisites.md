---
id: version-v3.12.1-prerequisites
title: Prerequisites
original_id: prerequisites
---

## Clone the Project

Before contributing to Syncify, you must first create your own fork of it and clone it to your machine.

> Replace `<url>` with the path to the forked GitHub repository.
>
> Examples:
>
> - `https://github.com/user1/vscode-syncify`
> - `git@github.com:user1/vscode-syncify`

```sh
git clone <url> --recurse-submodules
```

> The `--recurse-submodules` flag is required as Syncify uses submodules

## Install Dependencies

Syncify's dependencies are managed using [Yarn][yarn], so please install it before continuing.

```sh
yarn install
```

## Create Branch

To start making changes, you must first create a new branch for them.

> Replace `<name>` with a dasherized version of the thing you are changing.
>
> Examples:
>
> - `add-some-feature`
> - `fix-some-bug`

```sh
git checkout -b <name>
```

[yarn]: https://yarnpkg.com
