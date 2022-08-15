# Setup

## Node, CLI & IDE

Please make sure you have the following programs installed:
- [node (at least version 10)](https://github.com/nodejs/node): JavaScript runtime
- [npm](https://www.npmjs.com/): node package manager
- [nestjs-cli](https://docs.nestjs.com/cli/overview):

To install node:
- Fedora: `sudo dnf install nodejs -y`
- Ubuntu: `sudo apt install nodejs npm -y`

Then Nest CLI: `sudo npm install -g @nestjs/cli`.

## Project setup

First off, create your project with the CLI:
```bash
nest new nest-workshop-poc
```

Here are the files that will be used in this workshop:

```
nest-workshop-poc
├── package.json               <-- node file that define dependencies, rules and commands
├── src
    ├── main.ts                <-- app entrypoint that will put everything together and listen for HTTP requests
    ├── app.controller.ts      <-- definition of routes
    ├── app.service.ts         <-- useful collection of functions that will be used by the controller
    ├── app.module.ts          <-- metadata that Nest makes use of to organize the application structure
```

It is up to you to look at the other generated files if you are curious!

## Postman, Hoppscotch, Curl

We will be using `postman` to test out our routes, but you can also use `Hoppscotch`, `curl`, or any other tool you want for your tests since they will be personal, but we highly recommend `postman` as we will explain you how to use it.

- [Postman](https://www.postman.com/downloads/)
- [Hoppscotch](https://hoppscotch.io/)
- [Curl](https://curl.haxx.se/) (often already installed on your computer)

## Launching the server

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
