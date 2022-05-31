# Plug N Play ESLint and Prettier Setup for Web Dev

These are my settings for ESLint and Prettier. They're fully customizable (incase you dont like them).

[![Version](https://img.shields.io/npm/v/eslint-config-web.svg)](https://www.npmjs.com/package/eslint-config-web)
[![SourceRank](https://img.shields.io/librariesio/sourcerank/npm/eslint-config-web)](https://www.npmjs.com/package/eslint-config-web)
[![license](https://img.shields.io/github/license/relaxxpls/eslint-config-web)](https://github.com/relaxxpls/eslint-config-web/blob/master/LICENSE)

## Installation

```bash
npm install --dev eslint prettier eslint-config-web
# or
yarn add --dev eslint prettier eslint-config-web
```

## Usage

### Javascript

Create a `.eslintrc.js` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc.js` file should look like this:

```js
module.exports = {
  extends: [
    "eslint-config-web",
  ],
};
```

### TypeScript

Create a `.eslintrc.js` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc.js` file should look like this:

```js
module.exports = {
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },

  extends: [
    "eslint-config-web/typescript",
  ],
};
```

TypeScript users will also need a `tsconfig.json` file in their project.
An empty object (`{}`) will do if this is a new project.
