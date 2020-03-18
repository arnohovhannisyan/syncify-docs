---
title: Sync Pragmas
---

Sync Pragmas let you conditionally enable or disable settings for individual computers using a simple comment-based syntax.

## `host`

> Note that your computer's [hostname](../configuration.md#hostname) must be configured before using this keyword

### Example

```js
// settings.json on "home" computer

{
  // @sync host=home
  "window.zoomLevel": 1
}
```

## `os`

Currently, there are 3 operating systems supported:

- `windows`
- `linux`
- `mac`

### Example

```js
// settings.json on linux

{
	// @sync os=linux
	"window.zoomLevel": 1
}
```

## `env`

### How it works

Syncify can enable certain settings based on if the environmental variable required by the setting is set.

### Example

```js
// settings.json on a computer with the environmental variable "CODE_ZOOM_1" set

{
	// @sync env=CODE_ZOOM_1
	"window.zoomLevel": 1
}
```

## More Examples

### `settings.json`

```js
// settings.json on "home" computer running Linux

{
	// @sync host=home os=linux
	"window.zoomLevel": 1,
	// @sync host=work os=windows
	// "window.zoomLevel": 0,
}
```

```js
// settings.json on "work" computer running Windows

{
	// @sync host=home os=linux
	// "window.zoomLevel": 1,
	// @sync host=work os=windows
	"window.zoomLevel": 0
}
```

```js
// settings.json on "work-pc" running Linux

{
	// @sync os=linux host=work-pc
	"python.autoComplete.extraPaths": [
		"/blah/blah/python2.7/site-packages",
		"/usr/lib/python2.7/site-packages"
	],
	// @sync os=windows host=home-pc
	// "python.autoComplete.extraPaths": [
	//   "C:\\Program Files\\blah\\site-packages",
	// ],
}
```

### `keybindings.json`

```js
// keybindings.json on "home" computer running macOS

[
	// @sync host=home os=mac
	{
		key: "alt+v",
		command: "workbench.action.closeActiveEditor",
		when: "editorTextFocus"
	}
	// @sync host=work os=linux env=CODE_WORK
	// {
	//   "key": "alt+q",
	//   "command": "workbench.action.closeActiveEditor",
	//   "when": "editorTextFocus"
	// }
];
```

```js
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
		key: "alt+q",
		command: "workbench.action.closeActiveEditor",
		when: "editorTextFocus"
	}
];
```
