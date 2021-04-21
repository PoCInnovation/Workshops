# Setup

## 1. Installation

Please make sure you have the following programs installed:
- [node (version 10 or higher)](https://github.com/nodejs/node): javascript interpreter
- [npm](https://www.npmjs.com/): node package manager
- [nestjs-cli](https://docs.nestjs.com/cli/overview):

To install node:
- under fedora: `sudo dnf install nodejs`.
- under ubuntu: `sudo apt install nodejs npm`.

Then `sudo npm install -g @nestjs/cli`.

Nestjs is a very opinionated framework, it provides everything you need and has built-in integration with many other frameworks (queues, type ORMs, validators, documentation, and so much more !).

The cli with be useful to generate a starter project:
Create a new project, choosing any name you want:
> `nest new project-name`

Here are the files that will be used in this workshop:

- `package.json`: list of the project dependencies and useful commands to run the project
- `main.ts`: entry point of the project; it creates the `nest factory` that will put everything together and listen for http request (by default `http://localhost:3000`)
- `app.controller.ts`: definition of routes; usually only little code is written here, all the logic responsibility being given to the services
- `app.service.ts`: useful collection of functions that will be used by the controller
- `app.module.ts`: small class that defines how to nest the links between controllers and providers (services)

It is up to you to look at the other generated files if you are curious !

## 2. Postman, Postwoman, Curl

We will be using `postman` to test our routes, but you can also use `postwoman`, `curl`, or any other tool you want for your tests, since they are personal. However, we highly recommend `postman` as you will find in-depth explanations on its functionalities in this workshop.

- [Postman](https://www.postman.com/downloads/)
- [Postwoman](https://postwoman.io/fr/)
- [Curl](https://curl.haxx.se/) (often already installed on your computer)

## 3. Launching the server

```sh
npm run start
# launches the server
```
or
```sh
npm run start:dev
# watches for changes and automatically rebuild if needed
```

> Press `CTRL + C` to stop the server

**If `Nest application successfully started` is displayed, the setup is completed and you can go on with the exercises**

[Go back to the exercises](./README.md)
