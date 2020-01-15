---
title: Repo Syncer
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Description

The `repo` syncer uses `git` to sync your VSCode configuration. You can use it with any `git` repository, even a local one. It is the default and recommended syncer for Syncify.

## Advantages

- Most **stable** and **tested** syncer
- Conflict Resolution
- `Syncify: Sync` command (upload/download automatically based on current status)

## Setup

### Automatic Setup using OAuth

> This method requires Syncify to ask for full control over your public and private repositories, however, this is a limitation of the APIs provided by GitHub, GitLab, and BitBucket. If you are worried about security, feel free to manually set up Syncify using SSH.

1. Open the Command Palette (`Ctrl`+`Shift`+`P`) and run `Syncify: Upload`.
2. Click the login button for your preferred provider (GitHub, GitLab, or BitBucket).
3. Authorize Syncify to access your repositories.

If this is your first time using this extension:

4. Choose the name of your new settings repository by entering it in the first text box.
5. Click `Create` to create it and click `Close` to return to VSCode.

If you have already uploaded our settings before:

4. Click the `List Repositories` button to get a list of your repositories
5. Click the `Use This` button next to the repository you would like to register.

Finally, open the Command Palette (`Ctrl`+`Shift`+`P`) and run `Syncify: Upload` if you just created a repository, or `Syncify: Download` if you've already uploaded your settings before.

> Note that this method is only supported on `github.com`, `gitlab.com`, and `bitbucket.org`

### Manual Configuration

> The URL to the repository can also be the path to a local `git` repository.

<Tabs>

<TabItem value="Using the GUI" default>

1. Run `Syncify: Open Settings` in the command palette
2. Enter the URL of your desired repository into the `File Syncer -> File Export Path` field

</TabItem>

<TabItem value="Manually">

1. Run `Syncify: Open Settings` in the command palette
2. Click `Open file in editor`
3. Set the value of the `repo.url` property to the URL of your desired repository

Example snippet from settings file:

```json {3}
{
  "repo": {
    "url": "git@github.com:arnohovhannisyan/code-settings"
  }
}
```

</TabItem>

</Tabs>
