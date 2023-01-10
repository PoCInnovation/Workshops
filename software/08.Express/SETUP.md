# Workshop 8 - Setup

## Tools

For this workshop, you need to install these tools:
  - [VSCode](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/)
  - [NodeJS](https://nodejs.org/en/) >= 10 ([installation guide](https://lmgtfy.com/?q=how+to+install+nodejs))
  - [npm](https://www.npmjs.com/) the Node package manager

## Preparation

Download the [source](./source.zip) file.

This file contains the following sub-files:
 - `package.json`: The NPM Dependency Manager file
 - `package-lock.json`: A file containing the versions of each dependency used on the project.
 - `tsconfig.json`: A configuration file for Typescript
 - `src/index.ts`: A file which execute a simple Hello world function

All you have to do is to follow these steps:
 - Create a folder `express-workshop-poc`
 - Copy the file `source.zip` inside.
 - Run the command `unzip source.zip`
 - Install all the dependencies with the command `npm install`
 - Run the server with the command `npm start`

You should get the following result:

```sh
> ts-node src/index.ts

Welcome to this Express workshop :)
```

Congratulations! You can now start the [workshop](./README.md).
