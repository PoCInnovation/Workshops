# Workshop 9 - Setup

## 1. Installation

Please make sure you have the following programs installed:
 - [node (version 10 or higher)](https://github.com/nodejs/node): javascript interpreter
 - [npm](https://www.npmjs.com/): node package manager

To install node:
 - under fedora: `sudo dnf install nodejs`.
 - under ubuntu: `sudo apt install nodejs npm`.

## 2. Project

Create a new Svelte application with these commands :

```shell
$ npx degit sveltejs/template poc-workshop # Clone svelte template
$ cd poc-workshop # Cd into application
$ node scripts/setupTypeScript.js # Use Typescript
```

## 3. Start

```shell
$ npm install # Install dependencies
$ npm run dev # Run application in dev mod
```

[Go back to the exercise](./README.md)