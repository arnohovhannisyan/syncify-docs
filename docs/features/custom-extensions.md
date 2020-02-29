---
title: Custom Extensions
---

Syncify supports syncing extensions that are not in the VSCode Marketplace.

## Adding a Custom Extension

1. Copy the VSIX file to the [vsix folder][term:vsix], creating the folder if it doesn't already exist

> The VSIX file's name should be in the following format: `publisher.extName.vsix`
>
> Replace `publisher.extName` with the extension's corresponding details.

2. Upload your changes by running `Syncify: Upload`

## Removing a Custom Extension

1. Make sure your custom extension is [disabled](#disabling-a-custom-extension)
2. Navigate to the [vsix folder][term:vsix]
3. Delete the VSIX file corresponding to the extension
4. Upload your changes by running `Syncify: Upload`

## Enabling a Custom Extension

1. Install its VSIX file in VSCode

> 1. Go to the `Extensions` tab
> 2. Click the three dots on the upper right corner
> 3. Click `Install from VSIX`
> 4. Select the VSIX file

2. Run `Syncify: Upload` in the command palette to upload your changes

## Disabling a Custom Extension

1. Uninstall the extension
2. Run `Syncify: Upload` in the command palette to upload your changes

[term:vsix]: ../common-terms.md#vsix-folder
