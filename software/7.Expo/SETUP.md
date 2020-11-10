# Setup

## Node, CLI & IDE

In this workshop, you'll have to install:
- [node (at least version 10)](https://github.com/nodejs/node): JavaScript interpretor
- [npm](https://www.npmjs.com/): node package manager
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VSCode extension
- [Expo Client](https://expo.io/) on your phone:
  - [Apple](https://apps.apple.com/fr/app/expo-client/id982107779)
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr&gl=US)

To install node:
- Fedora: `sudo dnf install nodejs -y`
- Ubuntu: `sudo apt install nodejs npm -y`

> If your distro is too old, node default version from your package manager might be under 10, you'll have to install node via [nvm](https://github.com/nvm-sh/nvm)

Then Expo CLI : `sudo npm install -g expo-cli`

## Project setup

First off, create your project with the CLI:
```bash
expo init --npm -t tabs --name expo-workshop-poc && cd expo-workshop-poc && npm install axios
```

It will create a basic repo based on a template with several pages.

The architecture of the project looks like this:

```
expo-workshop-poc
├── app.json           <-- config file
├── App.tsx            <-- app entrypoint, equivalent to a main
├── assets             <-- assets folder (font, iamges...)
├── babel.config.js    <-- config file
├── components         <-- component folder (react notion)
├── constants          <-- useful variables (color palet, phone dimensions...)
├── hooks              <-- hooks folder (react notion)
├── navigation         <-- pages organisation and configuration folder
├── node_modules       <-- dependencies folder
├── package.json       <-- node file that define dependencies, rules and commands
├── package-lock.json  <-- dependencies specifications
├── screens            <-- screen components folder
├── tsconfig.json      <-- compilation options
└── types.tsx          <-- typescript types
```

All you have to do after that is opening the `expo-workshop-poc` folder in VSCode and run `npm start` inside.

This should start the dev server and print a QR code in your terminal. Scan it with your phone (from the expo app on Android or directly from the camera on iPhones). You can test it and what (simple) features are available


**If it loads the app on your phone then shows a basic app with a bottom navigator and 2 tabs, then you can start the exercises!**

[Go back to the exercises](./README.md)