const eslintConfigForJS = {
	"extends": "airbnb-base",
	"rules": {
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 2,
				"maxBOF": 0,
				"maxEOF": 0
			}
		],
		"max-len": [
			"error",
			{
				"code": 120
			}
		],
		"no-tabs": "off",
		"no-restricted-syntax": "off",
		"no-await-in-loop": "off",
		"class-methods-use-this": "off",
		"no-underscore-dangle": [
			"error",
			{
				"allow": [
					"_id",
					"_v",
					"__v"
				]
			}
		],
		"no-shadow": [
			"error",
			{
				"allow": [
					"err",
					"error"
				]
			}
		],
		"prefer-destructuring": [
			"warn",
			{
				"object": true,
				"array": false
			}
		],
		"no-param-reassign": [
			"warn",
			{
				"props": false
			}
		],
		"no-unused-vars": [
			"warn",
			{
				"args": "after-used",
				"argsIgnorePattern": "app|req|res|next|options|params"
			}
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1,
				"VariableDeclarator": 1,
				"outerIIFEBody": 1,
				"FunctionDeclaration": {
					"parameters": 1,
					"body": 1
				},
				"FunctionExpression": {
					"parameters": 1,
					"body": 1
				},
				"CallExpression": {
					"arguments": 1
				},
				"ArrayExpression": 1,
				"ObjectExpression": 1,
				"ImportDeclaration": 1,
				"flatTernaryExpressions": false,
				"ignoredNodes": [
					"JSXElement",
					"JSXElement > *",
					"JSXAttribute",
					"JSXIdentifier",
					"JSXNamespacedName",
					"JSXMemberExpression",
					"JSXSpreadAttribute",
					"JSXExpressionContainer",
					"JSXOpeningElement",
					"JSXClosingElement",
					"JSXText",
					"JSXEmptyExpression",
					"JSXSpreadChild"
				],
				"ignoreComments": false
			}
		],
		"arrow-parens": ["error", "always"]
	},
	"plugins": [
		"import"
	],
}

module.exports = eslintConfigForJS;