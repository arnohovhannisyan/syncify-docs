---
id: version-v3.12.1-sync-pragmas
title: Sync Pragmas
original_id: sync-pragmas
---

Syncify supports per-os, per-host, and per-env inline settings and keybindings by using Sync Pragmas.

## Ignoring Certain Settings

You can ignore certain settings in `settings.json` or `keybindings.json` by using the `@sync-ignore` pragma.

```
// settings.json

{
  // @sync-ignore
  "window.zoomLevel": "1", /* won't upload to gist */
}
```

```
// keybindings.json

[
  // @sync-ignore
  {
    "key": "alt+v",
    "command": "workbench.action.closeActiveEditor",
    "when": "editorTextFocus"
  }, /* won't upload to gist */
]
```

## Keywords

There are 3 different keywords that can be used with Sync Pragmas:

- host
- os
- env

### Per-Host

After [configuring a hostname](#setup-hostname) for your computer, you can use the `host` keyword to only include certain parts of `settings.json` or `keybindings.json`.

```
// settings.json on "home" computer

{
  // @sync host=home
  "window.zoomLevel": "1"
}
```

### Per-OS

The `os` keyword can also be used to only include certain parts of `settings.json` or `keybindings.json`.

Currently, there are 3 operating systems supported:

- windows
- linux
- mac

```
// settings.json on linux

{
  // @sync os=linux
  "window.zoomLevel": "1"
}
```

### Per-Env

Syncify can check for the existence of environmental variables using [`process.env`](https://nodejs.org/api/process.html#process_process_env) to only include certain parts of `settings.json` or `keybindings.json`.

```
// settings.json on a computer with the environmental variable "CODE_ZOOM_1" set

{
  // @sync env=CODE_ZOOM_1
  "window.zoomLevel": "1"
}
```

## Example Syntax

### Settings (settings.json)

```
// settings.json on "home" computer running Linux

{
  // @sync host=home os=linux
  "window.zoomLevel": "1",
  // @sync host=work os=windows
  // "window.zoomLevel": "0",
}
```

```
// settings.json on "work" computer running Windows

{
  // @sync host=home os=linux
  // "window.zoomLevel": "1",
  // @sync host=work os=windows
  "window.zoomLevel": "0",
}
```

```
// settings.json on "work-pc" running Linux

{
  // @sync os=linux host=work-pc
  "python.autoComplete.extraPaths": [
    "/blah/blah/python2.7/site-packages",
    "/usr/lib/python2.7/site-packages",
  ],
  // @sync os=windows host=home-pc
  // "python.autoComplete.extraPaths": [
  //   "C:\\Program Files\\blah\\site-packages",
  // ],
}
```

### Keybindings (keybindings.json)

```
// keybindings.json on "home" computer running macOS

[
  // @sync host=home os=mac
  {
    "key": "alt+v",
    "command": "workbench.action.closeActiveEditor",
    "when": "editorTextFocus"
  },
  // @sync host=work os=linux env=CODE_WORK
  // {
  //   "key": "alt+q",
  //   "command": "workbench.action.closeActiveEditor",
  //   "when": "editorTextFocus"
  // }
]
```

```
// keybindings.json on "work" computer running Linux

[
  // @sync host=home os=mac
  // {
  //   "key": "alt+v",
  //   "command": "workbench.action.closeActiveEditor",
  //   "when": "editorTextFocus"
  // },
  // @sync host=work os=linux env=CODE_WORK
  {
    "key": "alt+q",
    "command": "workbench.action.closeActiveEditor",
    "when": "editorTextFocus"
  }
]
```

## Setup Hostname

Visit the [Settings Guide](Settings-Guide#hostname) to learn how to configure the hostname.

## How It Works

Before uploading your settings from `settings.json` or `keybindings.json`, all settings with inline pragmas are uncommented. Then, when your settings or keybindings are synchronized, all the settings or keybindings values with pragmas that don't match with your machine (OS, hostname or ENV variables) will be commented. Therefore VS Code won't apply them.
