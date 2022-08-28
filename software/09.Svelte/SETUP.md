# Workshop 9 - Setup

## 1. Installation

Please make sure you have the following programs installed:
 - [node (version 14 or higher)](https://github.com/nodejs/node): JavaScript runtime
 - [npm](https://www.npmjs.com/): node package manager

To install node:
 - under fedora: `sudo dnf install nodejs`.
 - under ubuntu: `sudo apt install nodejs npm`.

## 2. Project

Create a new Svelte application with this command:

```shell
npm init vite
```
and select the following options
```shell
✔ Project name: › svelte-workshop-poc
✔ Select a framework: › svelte
✔ Select a variant: › svelte-ts
```

## 3. Start

```shell
cd svelte-workshop-poc  # Move into the application
npm install  # Install dependencies
npm run dev  # Run application in dev mod
```

[Go back to the exercise](./README.md)
