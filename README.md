<h1 align="center">schul-cloud</h1>

<p align="center">🛠 — Toolkit for building & maintaining futuristic React apps.
</p>

# STOP! 🚧 ✋

[![Greenkeeper badge](https://badges.greenkeeper.io/schul-cloud/lint-configs.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/schul-cloud/lint-configs.svg?branch=master)](https://travis-ci.com/schul-cloud/lint-configs)
[![Mergify badge](https://img.shields.io/endpoint.svg?url=https://dashboard.mergify.io/badges/schul-cloud/lint-configs&style=flat)](https://mergify.io)

This software is still in beta stages and not ready for production use just yet. Please try it out, give feedback, and help fix bugs.

# About

This repo contains several packages to develop and build clean projects.

* [@schul-cloud/eslint-config](./packages/eslint-config) - This repository contains shareable ESLint configurations used by the applications at @schul-cloud.

* [@schul-cloud/prettier-config](./packages/prettier-config) - This repository contains a shareable Prettier configuration used by the applications at @schul-cloud.

* [@schul-cloud/stylelint-config](./packages/stylelint-config) - This repository contains a shareable Stylelint configuration used by the applications at @schul-cloud.

# How to use it

## Initial Setup

Just run `npm run setup`

## Commits & Pulls & Merges

Whenever you merge something into develop, please add the lerna-changelog labels to the pull before you merge to auto generate the changelog.
Read more here: https://github.com/lerna/lerna-changelog#usage

Available Labels:
- breaking (💥 Breaking Change)
- enhancement (🚀 Enhancement)
- bug (🐛 Bug Fix)
- documentation (📝 Documentation)
- internal (🏠 Internal)

## Release Packages

Just bump the version and merge the changes you wan't to deploy into the master branch. All commits on master will be released.
