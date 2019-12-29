---
id: setup
title: Setup
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs>

<TabItem value="Using HTTPS" default>

> This method requires Syncify to ask for full control over your public and private repositories, however, this is a limitation of the APIs provided by GitHub, GitLab, and BitBucket. If you are worried about security, feel free to set up Syncify using SSH.

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

</TabItem>

<TabItem value="Using SSH">

SSH can be used to authenticate securely with your remote repository without exposing any tokens to Syncify.

> Please note that you must have SSH set up to use this method.

1. Open the Command Palette (`Ctrl`+`Shift`+`P`) and run `Syncify: Open Settings`.
2. Scroll to the bottom and enter your git repository's SSH URL (e.g. `git@github.com:username/repository`) into the `Repo URL` field.

Finally, open the Command Palette (`Ctrl`+`Shift`+`P`) and run `Syncify: Upload` if you just created a repository, or `Syncify: Download` if you've already uploaded your settings before.

</TabItem>

</Tabs>

<!-- References -->

[installation]: https://github.com/arnohovhannisyan/vscode-syncify#installation
