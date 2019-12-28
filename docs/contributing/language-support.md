---
id: language-support
title: Language Support
---## Where are the language files?

All language files should be placed at the extension root folder. They should also follow the following naming scheme: `package.nls.<language>.json`

Currently supported languages:

- English

`package.nls.json` is the default localization file if your language is not supported.

## How to support my language?

1. Find your language id [here](https://code.visualstudio.com/docs/getstarted/locales#_available-locales)
2. Copy `package.nls.json` and rename it to `package.nls.<language-id>.json`
3. Update the values to accommodate for your language in the new file
4. Open a Pull Request with your changes
