<h1 align="center">schul-cloud lint</h1>

[![Build Status](https://travis-ci.com/schul-cloud/lint-configs.svg?branch=master)](https://travis-ci.com/schul-cloud/lint-configs)
[![Mergify badge](https://img.shields.io/endpoint.svg?url=https://dashboard.mergify.io/badges/schul-cloud/lint-configs&style=flat)](https://mergify.io)

# About

This repo contains several packages to develop and build clean projects.

- [@schul-cloud/eslint-config](./packages/eslint-config) - This repository contains shareable ESLint configurations used by the applications at @schul-cloud.
  - [![npm (scoped)](https://img.shields.io/npm/v/@schul-cloud/eslint-config)](https://www.npmjs.com/package/@schul-cloud/eslint-config)
- [@schul-cloud/prettier-config](./packages/prettier-config) - This repository contains a shareable Prettier configuration used by the applications at @schul-cloud.
  - [![npm (scoped)](https://img.shields.io/npm/v/@schul-cloud/prettier-config)](https://www.npmjs.com/package/@schul-cloud/prettier-config)
- [@schul-cloud/stylelint-config](./packages/stylelint-config) - This repository contains a shareable Stylelint configuration used by the applications at @schul-cloud.
  - [![npm (scoped)](https://img.shields.io/npm/v/@schul-cloud/stylelint-config)](https://www.npmjs.com/package/@schul-cloud/stylelint-config)

# How to use it

## Initial Setup

Just run `npm run setup`

## Commits & Pulls & Merges

Please label Pull Requests before merging.

Available Labels:
- `💥 Breaking Change`
- `🚀 Enhancement`
- `🐛 Bug Fix`
- `📝 Documentation`
- `🏠 Internal`

## Release Packages

Just bump the version and merge the changes you wan't to deploy into the master branch. All commits on master will be released.
