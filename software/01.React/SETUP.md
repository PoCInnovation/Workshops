# Setup

## Node & IDE

In this workshop, you'll have to install:
- [nodejs](https://github.com/nodejs/node): JavaScript runtime
- [npm](https://www.npmjs.com/): node package manager
- [npx](https://www.npmjs.com/package/npx): node_modules command executor
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VSCode extension
- react devtools extension ([firefox](https://addons.mozilla.org/fr/firefox/addon/react-devtools/)/[chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi))

To install node:
- Fedora: `sudo dnf install nodejs -y`
- Ubuntu: `sudo apt install nodejs npm -y`

Then `sudo npm install -g npx`
<br/><br/>
## Project setup

First off, create your project with npx:
```sh
npx create-react-app react-workshop-poc --template typescript && cd react-workshop-poc
```

Then, install the dependencies we will be using for build our app:
```sh
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install -D @types/material-ui
```
💡 You will figure out later their purposes!

All you have to do now is to open the `react-workshop-poc` folder in VSCode (if you just open the `src` folder, ESlint won't be able to give warnings)

Finally, launch the app (in the `react-workshop-poc` folder once again):

```sh
npm start
```

**If it opens a tab in your browser with an atom logo spinning, then you can start the exercises!**

[Go back to the exercises](./README.md)
