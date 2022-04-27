# Setup

## Setup Starton 

Go to the register page of the [Starton Website](https://app.starton.io/register) and create an account.

Get your Starton api key in the Developer Section on the Dashboard and Copy it in the variable `STARTON_API_KEY` in the `.env` file at the root of the api project.

Got to the Wallet section, create a Starton Wallet and claim faucet on Matic Polygon (Ex Matic) mumbai network with your own wallet address.

## Setup Docker

You need to install Docker and Docker-Compose on your system to lunch the database. Here is a documentation for it : [Install Docker Engine](https://docs.docker.com/engine/install/), [Install Docker Compose
](https://docs.docker.com/compose/install/).

## Install Node and Npm

To start the project, you need npm and a node version >= 17.9.0. Here is documentation about it: [How To Install Node.JS On Linux](https://upstack.co/knowledge/how-to-install-node-js-on-linux), [Install npm on Linux](https://linuxconfig.org/install-npm-on-linux)

To manage your node version you can you use nvm (node version manager), here is the github repository : [Node Version Manager](https://github.com/nvm-sh/nvm)


## Start the project

First of all, you need to lunch the db.

To do that it's very simple, you just need to use the command:

    npm run db:up

If the database is started correctly, you will be able to access to the [mongoDb interface](http://localhost:8081/)

If you want to stop the db you just need to use the command:

    npm run db:down

After that, use this command to install all the nodes dependences of the project. These dependences concern all the external packages that your project need:

    npm install

Now, you can lunch the backend with nodemon (for hot reload) with the command :

    npm run dev

If the backend start and connect correctly to db you will see this on your terminal :

    > backend-starton@1.0.0 dev
    > nodemon src/index.ts

    [nodemon] 2.0.15
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: ts,json
    [nodemon] starting `ts-node src/index.ts`
    server is listening on 3000
    Connected

## Setup Postman

Postman is a very usefull tool for testing backend application.
This tool allow you to test your api's endpoints without a frontend.

To download it, go to the [download page](https://www.postman.com/downloads/) on the Postman Website.

Congratulation, you can now start the backend project ! 🎉