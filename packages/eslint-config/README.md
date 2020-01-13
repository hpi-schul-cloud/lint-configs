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

### For JavaScript projects

```javascript
module.exports = {
  extends: '@schul-cloud/eslint-config/javascript',
};
```

### For Vue projects

```javascript
module.exports = {
  extends: '@schul-cloud/eslint-config/javascriptVue',
};
```

### For Jest tests

> You should apply these rules only to your testfiles! Otherwise there will be a lot of false positives. It is recommended to [use overrides](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files) for that.

```javascript
module.exports = {
  // ... all your normal rules
  overrides: [
    {
      files: ["**/*.unit.js"], // regex that matches your testfiles
      extends: ["@schul-cloud/eslint-config/javascriptJest"],
    },
  ],
};
```

## Override Default Config

If you want to override the default configuration, then add the following code in `.eslintrc.js` file:

### Override config in JavaScript projects

```javascript
module.exports = {
  extends: '@schul-cloud/eslint-config/javascript',
  // your config options goes here, e.g. plugins: [...], rules: { ... }
};
```

### Override config in Vue projects

```javascript
module.exports = {
  extends: '@schul-cloud/eslint-config/javascriptVue',
  // your config options goes here, e.g. plugins: [...], rules: { ... }
};
```

### Override config in Jest tests

```javascript
module.exports = {
  // ... all your normal rules
  overrides: [
    {
      files: ["**/*.unit.js"], // regex that matches your testfiles
      extends: ["@schul-cloud/eslint-config/javascriptJest"],
      rules: {
        // you can adjust the rules here.
      },
    },
  ],
};
```
