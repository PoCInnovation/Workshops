# Workshop 30 - Firebase

## Node and NPM
In this workshop, you'll need to install the JavaScript runtime [node (at least version 10)](https://github.com/nodejs/node) and its package manager [npm](https://www.npmjs.com/).

You can use the following command to do so:
- under fedora: `sudo dnf install nodejs`.
- under ubuntu: `sudo apt install nodejs npm`.

## Google account
Since Firebase is a Google product, you'll need a [Google account](https://accounts.google.com/) for this workshop, you can create it [here](https://accounts.google.com/signup) if you don't have one :wink:

## Base project
To use firebase, we first need to setup a project.  
Normally you would have to use `npm install`, but here we provided you an existing `package.json`.  

It's pretty basic, we just installed the `nodemon` package to use it in our `start` script, it will watch for changes in our code to automatically reload our server, which is gonna be very useful :rocket:  
This script will execute the `index.js` file: it's empty for now, but we will fill it soon enough don't worry :wink:


It's finally time to use Firebase, click [here to go back to the exercises](./README.md)