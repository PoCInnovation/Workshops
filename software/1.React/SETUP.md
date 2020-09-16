# Setup

## Node & IDE

In this workshop, you'll have to install:
- [node (at least version 10)](https://github.com/nodejs/node) : javascript interpretor
- [npm](https://www.npmjs.com/) :node package manager
- [npx](https://www.npmjs.com/package/npx) : node_modules command executor
- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) vscode extension
- react devtools extension ([firefox](https://addons.mozilla.org/fr/firefox/addon/react-devtools/)/[chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi))


To install node:
- Fedora: `sudo dnf install nodejs -y`
- Ubuntu: `sudo apt install nodejs npm -y`

Then `sudo npm install -g npx`

## Project setup

First off, create your projet with npx:
```
npx create-react-app ReactWorkshop
cd ReactWorkshop
```

Then setup eslint, it will tell you errors in your IDE:
```
mv src/App.js src/App.jsx && npx eslint --init
```

This will prompt you an installation program in several steps, follow theses settings:

<pre>
? How would you like to use ESLint? <b>To check syntax, find problems, and enforce code style</b>
? What type of modules does your project use? <b>JavaScript modules (import/export)</b>
? Which framework does your project use? <b>React</b>
? Does your project use TypeScript? <b>No</b>
? Where does your code run? <b>Node</b>
? How would you like to define a style for your project? <b>Use a popular style guide</b>
? Which style guide do you want to follow? <b>Airbnb: https://github.com/airbnb/javascript</b>
? What format do you want your config file to be in? <b>JavaScript</b>
Checking peerDependencies of eslint-config-airbnb@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.20.0 eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.21.2 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0
? Would you like to install them now with npm? <b>Yes</b>
</pre>

Your project and your IDE are now ready to work. However, to have Eslint working preperly, you will have to open the `ReactWorkshop` folder, not just `src`.

Finally, launch the app:
```sh
npm start
```

**If it opens a tab in your browser with an atom logo spinning, then you can start the exercices!**