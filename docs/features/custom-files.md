---
title: Custom Files
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Registering a Custom File

<Tabs>

<TabItem value="Using the GUI" default>

1. Right-click a file and click `Syncify: Register Custom File`.
2. Optionally rename the file

</TabItem>

<TabItem value="Using Command Palette">

1. Run `Syncify: Register Custom File` in the command palette
2. Select the file you want to register using the file picker
3. Optionally rename the file

</TabItem>

</Tabs>

After registering the file, it will be synced when uploading and downloading.

## Importing a Custom File

1. Run `Syncify: Import Custom File` in the command palette
2. Select the file you want to import
3. If prompted, select the workspace you want to import the file into
4. Optionally, rename the file to whatever you want

### Importing into a Specific Folder

1. Right-click on the folder you want to import the file into
2. Click `Syncify: Import Custom File` on the context menu
3. Select the file you want to import
4. Optionally, rename the file to whatever you want

The selected file will either be copied into the root of the selected workspace or into the specified folder.
