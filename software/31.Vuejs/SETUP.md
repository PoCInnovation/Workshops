# Setup - Vue.js

## Install Node.js and npm

In this workshop, you'll have to install:
- [Node.js](https://nodejs.org/): JavaScript runtime
- [npm](https://www.npmjs.com/): node package manager
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VSCode extension

To install node:

- Fedora: `sudo dnf install nodejs -y`
- Ubuntu: `sudo apt install nodejs npm -y`

After the installation, run the following command to ensure it has been properly installed on your computer:

```shell
# The Node version must be at least 16.0 or higher
node -v
npm -v
```

It should print your current version of Node.js and npm.

## Initialize your project

Run the following commands in your terminal:

```shell
npm create vue@3
```
This will init the Vue.js project.

Then, you will be presented with a list of options to include in your project.

```
✔ Project name: … workshop-vue-poc
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
```

Select `Yes` for the TypeScript and the ESLint options. For the other options, choose `No`.
Once the project is created, go into your project directory and install the necessary dependencies.

```shell
cd workshop-vue-poc
npm install
```

Now, you can launch the Vue app.

```shell
npm run dev
```

## Install Element Plus

Run the following command to add the Element Plus library we will use to build our app:

```shell
npm install element-plus --save 
```

Nice, you can now [go back](./README.md) to the workshop!
