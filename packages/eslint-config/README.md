# @schul-cloud/eslint-config

This package contains shareable ESLint configuration used by the @schul-cloud applications.

## Getting Started

### 1. Installation

Using npm:

```shell
  npm install @schul-cloud/eslint-config --save-dev
```

Using Yarn:

```shell
  yarn add @schul-cloud/eslint-config --dev
```

### 2. Usage

* Create a new file and name it as `.eslintrc.js`
* Import relevant config file from `@schul-cloud/eslint-config` and just export it as follows.

For JavaScript projects:

```javascript
module.exports = {
  extends: '@schul-cloud/eslint-config/javascript',
};
```

For Vue projects:

```javascript
module.exports = {
  extends: '@schul-cloud/eslint-config/javascriptVue',
};
```

## Override Default Config

If you want to override the default configuration, then add the following code in `.eslintrc.js` file:

For JavaScript projects:

```javascript
module.exports = {
  extends: '@schul-cloud/eslint-config/javascript',
  // your config options goes here, e.g. plugins: [...]
};
```

For Vue projects:

```javascript
module.exports = {
  extends: '@schul-cloud/eslint-config/javascriptVue',
  // your config options goes here, e.g. plugins: [...]
};
```
