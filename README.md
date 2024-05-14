# RavenState

`RavenState` is a powerful package that simplifies global state management in React Native applications. It utilizes the Context API, making it easy to share state across your entire app.

## Features

- Easily manage global state in your React Native application.
- Utilizes the efficient Context API for state sharing.
- Simple to integrate and use within your existing project structure.

## Example Expo React Native and Basic Usage

[On Expo Snack](https://snack.expo.dev/@rinaldycodes/ravenstate-state-management-example)

## Changelog

### Fix Error with Webpack Loader

If you encounter the error message:
"File was processed with these loaders:
 * ./node_modules/source-map-loader/dist/cjs.js
You may need an additional loader to handle the result of these loaders."

You can address this issue by following these steps:

1. Update your `app.json` (if using Expo and React Native):

```json
"web": {
  "favicon": "./assets/favicon.png",
  "build": {
    "babel": {
      "include": [
        "raven-state-management"
      ]
    }
  }
}
```

## Installation

```bash
npm install raven-state-management

