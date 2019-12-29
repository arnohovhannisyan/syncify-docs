---
id: prerequisites
title: Prerequisites
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Button from "../../src/components/Button";

## Fork the Project

<Button href="https://github.com/arnohovhannisyan/vscode-syncify/fork">
Create Fork
</Button>

## Clone your Fork

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

## Install Dependencies

Syncify uses [Yarn][yarn] to manage its dependencies, so please install it before

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
