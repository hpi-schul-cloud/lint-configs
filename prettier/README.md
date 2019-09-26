# @schul-cloud/lint-configs/prettier

## Getting Started

### 1. Installation

Please check the [parent README](../)

### 2. Usage

* Create a new file and name it as `prettier.config.js`
* Just import `@schul-cloud/lint-configs/prettier/base` and export it.

```javascript
module.exports = require('@schul-cloud/lint-configs/prettier/base.js');
```

## Override Default Config

If you want to override the default configuration, then add the following code in `prettier.config.js` file:

```javascript
const prettierConfig = require('@schul-cloud/lint-configs/prettier/base.js');
module.exports = {
  ...prettierConfig,
  // your config options goes here, e.g. printWidth: 80
}
```
