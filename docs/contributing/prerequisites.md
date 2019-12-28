---
id: prerequisites
title: Prerequisites
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Clone the Project

Before contributing to Syncify, you must first create your own fork of it and clone it to your machine.

<Tabs defaultValue="ssh" values={[{ label: "HTTPS", value: "https" }, { label: "SSH", value: "ssh" }]}>

<TabItem value="https">

```sh
git clone https://github.com/<user>/vscode-syncify --recurse-submodules
```

</TabItem>

<TabItem value="ssh">

```sh
git clone git@github.com:<user>/vscode-syncify --recurse-submodules
```

</TabItem>

</Tabs>

> The `--recurse-submodules` flag is required as Syncify uses submodules

## Install Dependencies

<Tabs defaultValue="yarn" values={[{ label: "npm", value: "npm" }, { label: "Yarn", value: "yarn" }]}>

<TabItem value="npm">

```sh
npm install
```

</TabItem>

<TabItem value="yarn">

```sh
yarn
```

</TabItem>

</Tabs>

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
