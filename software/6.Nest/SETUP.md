# Setup

## 1. Installation

You will need:
- [node (version 10 or higher)](https://github.com/nodejs/node): javascript interpreter
- [npm](https://www.npmjs.com/): node package manager
- [nestjs-cli](https://docs.nestjs.com/cli/overview):

To install node:
- under fedora: `sudo dnf install nodejs`.
- under ubuntu: `sudo apt install nodejs npm`.

Then `sudo npm install -g @nestjs/cli`.

Nestjs is a very opinionated framework, he provides everything you need and has built-in integration with many other frameworks (queues, type ORMs, validators, documentation, and many more !).

The cli with be useful to generate a starter project:
Try to create a new project with the name of your choice:
> `nest new project-name`

Here are the files you will use in this workshop:

- `package.json`: list of the project dependencies and useful command to run the project
- `main.ts`: entry point of the project, it creates the `nest factory` that will put everything together and listen for http request (by default `http://localhost:3000`)
- `app.controller.ts`: this is where your routes will be defined, usually there is not much code here, all the logic responsibility is given to the services
- `app.service.ts`: useful collection of functions that will be used by the controller
- `app.module.ts`: a small class that defines to nest the links between controllers and providers (services)

It's up to you to explore the other generated files if you're curious !

// Tutorial typescript

## 2. Postman, Postwoman, Curl

We will be using `postman` to test out our routes, but you can also use `postwoman`, `curl`, or whatever other tool you want for your tests since they will be personal, but we highly recommend `postman` as we will go into an in depth explanation of how to use it.

- [Postman](https://www.postman.com/downloads/)
- [Postwoman](https://postwoman.io/fr/)
- [Curl](https://curl.haxx.se/) (often already installed on your computer)

## 3. Launching the server

```sh
npm run start
# to simply launch the server
```
or
```sh
npm run start:dev
# this will watch for changes and automatically rebuild if needed
```

**If you have `Server runs on http://localhost:3000`, you've finished the setup and you can go for the exercises**

[Go back to the exercises](./README.md)
