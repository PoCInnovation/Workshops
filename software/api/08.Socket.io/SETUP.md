# Workshop 19 - Setup

## Tools

For this workshop, you need to install these tools : 
- [VSCode](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/) on your computer
- [NodeJS](https://nodejs.org/en/) >= 10 ([installation](https://lmgtfy.com/?q=how+to+install+nodejs))
- [npm](https://www.npmjs.com/) (Generally installed with NodeJS)

## Preparation

Download the [sources](./source.zip) in the root of the repository to have a base to start from.

Sources are composed of the following files:

```shell
$ tree -a

├── package.json # Dependency manager of NPM
├── package-lock.json # A file containing the versions of each dependency used on the project.
├── README.md
├── SETUP.md
├── src
│   ├── Front
│   │   ├── chat.ts # Empty file which will accommodate our configuration to front page.
│   │   └── index.html # HTML page for our Online Chat.
│   ├── index.ts # Server express and draw "Hello World" on your localhost.
│   ├── router
│   │   └── router.ts # Defines the listening routes for our server.
│   └── server
│       └── server.ts # Class server allowing to listen according to the given port.
└── tsconfig.json # A configuration file for the Typescript.

```

You just have to follow these steps:
```shell 
# Create a new directory
mkdir -p poc-workshop-Socket-Io

# Move to that directory
cd poc-workshop-Socket-Io 

# Move source zip in the directory
mv -t . ~/Downloads/source.zip

# Extract source
unzip source.zip

# Remove old zip
rm source.zip

# Install dependencies
npm install

# Launch project
run npm dev
You should get the following output:
```sh
[1] [nodemon] restarting due to changes...
[1] [nodemon] starting `node dist/index.js`
Hello World !
```

If you go on your browser at http://localhost:8080/
you should see this on the screen :

```
Hello World !
```
The server runs and doesn't need to be run again with `nodemon`.
The script in your `package.json` reload it for you after each modification.
[Go back to exercises](./README.md).