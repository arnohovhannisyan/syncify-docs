---
title: Profiles
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Syncify supports using profiles to have different settings for different occasions.

> Note that profiles are currently only supported using the default `repo` syncer

## Creating a New Profile

<Tabs>

<TabItem value="Using the GUI" default>

1. Run `Syncify: Open Settings` in the command palette
2. Scroll down to the `Repo Syncer -> Profiles` section
3. Click the `+` button to create a new profile
4. Fill in the `branch` and `name` fields

</TabItem>

<TabItem value="Manually">

1. Run `Syncify: Open Settings` in the command palette
2. Click `Open file in editor`
3. Add a new object to the `repo.profiles` array with the following format

```json
{
	"branch": "[BRANCH]",
	"name": "[NAME]"
}
```

`[BRANCH]` is the Git branch that will be used to store your settings, while `[NAME]` is the name of the profile.

</TabItem>

</Tabs>

## Switching the Current Profile

1. Run `Syncify: Switch profile` in the command palette
2. Select the profile you want to switch to

> After switching the current profile using the command, Syncify will prompt you to download the new settings.

## Example Configuration

```json
{
	"syncer": "repo",
	"repo": {
		"url": "...",
		"profiles": [
			{
				"branch": "master",
				"name": "main"
			},
			{
				"branch": "react",
				"name": "react-tools"
			}
		],
		"currentProfile": "react-tools"
	}
}
```
