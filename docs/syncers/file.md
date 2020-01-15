---
title: File Syncer
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Description

The `file` syncer syncs your VSCode configuration by exporting it to a specific directory.

## Advantages

- Settings are stored locally, so you can keep your confidential data safe

## Disadvantages

- No conflict resolution
- Cannot use `Syncify: Sync` command
- Not used as much as the `repo` syncer, so it may be less stable

## Setup

### Configuring the Export Path

<Tabs>

<TabItem value="Using the GUI" default>

1. Run `Syncify: Open Settings` in the command palette
2. Enter the absolute path to your desired directory into the `File Syncer -> File Export Path` field

</TabItem>

<TabItem value="Manually">

1. Run `Syncify: Open Settings` in the command palette
2. Click `Open file in editor`
3. Set the value of the `file.path` property to the absolute path to your desired directory

Example snippet from settings file:

```json {3}
{
  "file": {
    "path": "/some/absolute/path"
  }
}
```

</TabItem>

</Tabs>
