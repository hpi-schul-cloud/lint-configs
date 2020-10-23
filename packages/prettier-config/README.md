# @hpi-schul-cloud/prettier-config

[![npm (scoped)](https://img.shields.io/npm/v/@hpi-schul-cloud/prettier-config)](https://www.npmjs.com/package/@hpi-schul-cloud/prettier-config)

## Getting Started

### 1. Installation

Using npm:

```shell
  npm install @hpi-schul-cloud/prettier-config --save-dev
```

Using Yarn:

```shell
  yarn add @hpi-schul-cloud/prettier-config --dev
```


### 2. Usage

* Create a new file and name it as `prettier.config.js`
* Just import `@hpi-schul-cloud/prettier-config` and export it.

```javascript
module.exports = require('@hpi-schul-cloud/prettier-config');
```

* In order to have a `.prettierignore` file as well, just run the following command from terminal:

```sh
  cat ./node_modules/@hpi-schul-cloud/prettier-config/.prettierignore >> .prettierignore
```

## Override Default Config

If you want to override the default configuration, then add the following code in `prettier.config.js` file:

```javascript
  const prettierConfig = require('@hpi-schul-cloud/prettier-config');
  module.exports = {
    ...prettierConfig,
    // your config options goes here, e.g. printWidth: 80
  }
```
