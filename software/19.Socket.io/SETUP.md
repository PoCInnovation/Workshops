# Workshop 19 - Setup

## Tools

FOr this workshop, you need to install these tools : 
- [VSCode](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/) on your computer
- [NodeJS](https://nodejs.org/en/) >= 10 ([installation](https://lmgtfy.com/?q=how+to+install+nodejs))
- [npm](https://www.npmjs.com/) (Generally installed with NodeJS)

## Preparation

Download the  [sources](./source.zip) to have base to start from.

Sources are composed with the following files:
- `package.json` : Dependency manager of NPM
- `package-lock.json` : A file containing the versions of each dependency used on the project.
- `tsconfig.json` : A configuration file for the Typescript.
- `src/index.ts` : Server express and draw "Hello World" on your localhost.
- `src/server/server.ts` : Class server allowing to listen according to the given port.
- `src/router/router.ts` : Defines the listening routes for our server.
- `src/Front/chat.ts` :Empty file which will accommodate our configuration to front page.
- `src/Front/index.html` : HTML page for our Online Chat.

You just have to follow these steps:
- Create folder `workshop-learn-socket`
- Copy file `source.zip` in the folder
- Launch command `unzip source.zip`
- Install dependencies with the command `npm install`
- Check that everything works with the command `npm run dev`

You should get the following output:
```sh
[1] [nodemon] restarting due to changes...
[1] [nodemon] starting `node dist/index.js`
```

You can go to the [workshop](./README.md).