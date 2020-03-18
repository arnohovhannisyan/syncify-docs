---
title: Breaking Changes in v4
author: Arno Hovhannisyan
author_title: Maintainer
author_image_url: https://avatars3.githubusercontent.com/u/25834068?s=64&v=4
tags: [breaking]
---

With the release of Syncify v4, the `@sync-ignore` pragma has been removed in order to implement a new pragma system that is more stable and maintainable.

<!-- truncate -->

## Migrating to `v4`

If you currently use `@sync-ignore`, you can achieve almost the same result by using the [`@sync` pragma][1]. While they will be uploaded to your export location, you can use keywords like `host`, `os`, and `env` to make sure they're only enabled on that machine.

[1]: https://arnohovhannisyan.space/vscode-syncify/docs/features/sync-pragmas
