---
id: version-v3.12.1-configuring
title: Configuring
original_id: configuring
---

## Opening the Settings Page

To open the settings page, run `Syncify: Open Settings` in the command palette. This will open a page where you can change most settings using a pretty interface. To open the raw settings file, click on the `Open File in Editor` button at the top.

## Default Settings

The most up-to-date version of the default settings can be found [here][defaultsettings].

## `syncer`

Type: `"repo" | "file"`

This is the method that is used by Syncify to sync your settings.

## `repo`

These are settings specific to the `Repo` method.

### `url`

Type: `string`

This is the URL to your `Git` repository.

### `profiles`

Type:

```ts
Array<{
  branch: string,
  name: string
}>
```

This is the list of profiles used to sync multiple configurations.

### `currentProfile`

Type: `string`

This is the profile currently being used by Syncify.

## `file`

These are settings specific to the `File` method.

### `path`

Type: `string`

This is the folder that your settings are exported to when using the `File` method.

## `ignoredItems`

Type: `string[]`

These are [globs](https://en.wikipedia.org/wiki/Glob_%28programming%29) used to exclude certain files/folders from being uploaded.

## `autoUploadDelay`

Type: `number`

This is the amount of time (in seconds) the extension waits before auto-uploading your settings. It is only used if [`watchSettings`](#watch-settings) is turned on.

## `watchSettings`

Type: `boolean`

This determines whether the extension automatically uploads your settings when you change them.

## `syncOnStartup`

Type: `boolean`

This determines whether `Syncify: Sync` should be run on VSCode startup.

## `hostname`

Type: `string`

This is the value used by the `host` attribute for Sync Pragmas

## `forceDownload`

Type: `boolean`

This determines whether settings should be downloaded even if they are already up to date.

## `forceUpload`

Type: `boolean`

This determines whether settings should be uploaded even if they are already up to date or newer.

[defaultsettings]: https://github.com/arnohovhannisyan/vscode-syncify/blob/master/src/models/settings.ts
