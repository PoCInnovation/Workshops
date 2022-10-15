# Workshop 30 - Firebase

## Node and NPM
In this workshop, you'll need to install the JavaScript runtime [node (at least version 10)](https://github.com/nodejs/node) and its package manager [npm](https://www.npmjs.com/).

You can use the following command to do so:
- under fedora: `sudo dnf install nodejs`.
- under ubuntu: `sudo apt install nodejs npm`.

> 💡 You can use [nvm](https://github.com/nvm-sh/nvm) to easily manage your versions of node

## Google account
Since Firebase is a Google product, you'll need a [Google account](https://accounts.google.com/) for this workshop, you can create it [here](https://accounts.google.com/signup) if you don't have one 😉

## Base project
To use firebase, we first need to setup a project.  
Normally you would have to use `npm install`, but here we provided you an existing `package.json`.  

It's pretty basic, we just installed a few packages:
- `nodemon` to use it in our `start` script, it will watch for changes in our code to automatically reload our server, which is gonna be very useful 🚀
- `express` to create and run an HTTP server
- `cors` to [enable any origin to access our API](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
The `start` script will execute the `index.js` file: it's pretty empty for now, but we will fill it soon enough don't worry 😉


It's finally time to use Firebase, click [here to go back to the exercises](./README.md)