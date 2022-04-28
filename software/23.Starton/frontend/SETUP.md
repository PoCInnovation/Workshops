# 23 Workshop - Front Setup

## 1. Install

Go to the `frontend` folder

```shell
    cd frontend
    npm install
    npm install axios
    npm i @types/axios
```

⚠️ You must download the extension for your IDE, styled components ⚠️ :
* [Vscode](https://marketplace.visualstudio.com/items?itemName=diegolincoln.vscode-styled-components#:~:text=The%20styled%2Dcomponents%20extension%20adds,linter%20and%20other%20language%20features.)
* [WebStorm](https://plugins.jetbrains.com/plugin/9997-styled-components--styled-jsx)

To make web, we can only advise you to use [WebStorm](https://www.jetbrains.com/fr-fr/toolbox-app/) 😉

## 2. Start your project

To start your project you can do:

```shell
    npm start
```

To check that everything is working properly, open `http://localhost:3000/hello`.

You should have this page displayed:
(IMAGE)

## 3. Start workshop

[Go back to the exercise](./README.md)

## In case of an error

If even after restarting your IDE and updating your web page, you have an error with your packages.

You can try to install them manually (there is usually no need to do this):

```shell
  npm i styled-components
  npm install --save @types/styled-components
  npm i react-router-dom
  npm install --save @types/react-router-dom
  npm install --save-dev @babel/preset-env
  npm install axios
  npm i @types/axios
  npm i
```

You can try to restart your project with:

```shell
   npm start 
```

If you have any problems, you can contact a PoC supervisor.