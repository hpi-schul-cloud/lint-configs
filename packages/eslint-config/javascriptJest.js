// https://github.com/jest-community/eslint-plugin-jest
const eslintConfigForJest = {
  "plugins": ["jest"],
  "extends": ["plugin:jest/style"],
  env: {
    jest: true,
  },
  rules: {
    // additional rules
    "jest/consistent-test-it": "error",
    "jest/no-duplicate-hooks": "error",
    "jest/no-expect-resolves": "error",
    "jest/no-test-return-statement": "error",
    "jest/no-truthy-falsy": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/prefer-spy-on": "error",
    "jest/prefer-strict-equal": "error",
    "jest/prefer-todo": "error",
    "jest/require-top-level-describe": "error",
    "jest/require-to-throw-message": "error",
    "jest/valid-title": "error",
	},
};

module.exports = eslintConfigForJest;