# Setup

## Node, Docker and database

In this workshop, you'll have to install:
- [node (at least version 10)](https://github.com/nodejs/node): JavaScript interpretor
- [npm](https://www.npmjs.com/): node package manager
- [docker](https://github.com/PoCInnovation/Workshops/blob/master/software/04.Docker/SETUP.md): Container tool for the database
- [mongodb-compass](https://www.mongodb.com/docs/compass/current/install/): Tool to explore the content of your database

To install node:
- Fedora: `sudo dnf install nodejs -y`
- Ubuntu: `sudo apt install nodejs npm -y`

<br/><br/>
## Project setup

First off, create your project:
```sh
mkdir auth-workshop
cd auth-workshop
npm init -y
```

Then, download our [src base folder](./src) and install the dependencies we will be using to build our app:
```sh
npm install
```

Run the MongoDB docker with:
```sh
docker run --rm --name mongodb -p 127.0.0.1:27017:27017 -e MONGO_INITDB_ROOT_USERNAME=username -e MONGO_INITDB_ROOT_PASSWO\
RD=root -e MONGO_INITDB_DATABSE=database -d mongo
```

Finally, run the app with:
```sh
npm run dev
```

<br/><br/>

**If it prints "Connected to MongoDB", then you can start the exercises!**

[Go back to the exercises](./README.md)
