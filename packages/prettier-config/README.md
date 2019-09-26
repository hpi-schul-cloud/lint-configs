# @schul-cloud/prettier-config

## Getting Started

### 1. Installation

Using npm:

```shell
  npm install @schul-cloud/prettier-config --save-dev
```

Using Yarn:

```shell
  yarn add @schul-cloud/prettier-config --dev
```


### 2. Usage

* Create a new file and name it as `prettier.config.js`
* Just import `@schul-cloud/prettier-config` and export it.

```javascript
module.exports = require('@schul-cloud/prettier-config');
```

* In order to have a `.prettierignore` file as well, just run the following command from terminal:

```sh
  cat ./node_modules/@schul-cloud/prettier-config/.prettierignore >> .prettierignore
```

## Override Default Config

If you want to override the default configuration, then add the following code in `prettier.config.js` file:

```javascript
  const prettierConfig = require('@schul-cloud/prettier-config');
  module.exports = {
    ...prettierConfig,
    // your config options goes here, e.g. printWidth: 80
  }
```
