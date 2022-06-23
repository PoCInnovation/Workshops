# Workshop 27 - Auth :rocket:

:heavy_check_mark: Discover how to manage authentification with nodejs and mongodb database.  
:heavy_check_mark: Learn services logics
:heavy_check_mark: Improve your Typescript and architecture design skills

## Step 0: Setup

All the installation steps required to do the exercises are detailed in the [SETUP.md](./SETUP.md)

## Step 1: Create your REST API

First of all, you need to create three routes thanks to [Express Routing](https://expressjs.com/fr/guide/routing.html):

- A login route
- A register route
- A profile route

:bulb: You can use [Postman](https://www.postman.com/) to test your routes

## Step 2: Connect to the database and create schemas

To interact with MongoDB, you need to create a MongoDB instance using docker.
You can use the following command:

> docker run --rm --name mongodb -p 127.0.0.1:27017:27017 -e MONGO_INITDB_ROOT_USERNAME=your_username -e MONGO_INITDB_ROOT_PASSWO\
RD=your_password -e MONGO_INITDB_DATABSE=your_database -d mongo

Then, take a look at the [MongoDB Documentation](https://www.npmjs.com/package/mongodb) in order to connect to your database!

:bulb: As MongoDB is *not* a relational database management system, we recommend you to take a look at the [data modeling](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/) and to create defined types using [Typescript interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

## Authors

| [<img src="https://github.com/tonida-rodda.png?size=85" width=85><br><sub>Toni Da Rodda</sub>](https://github.com/tonida-rodda) | [<img src="https://github.com/EdenComp.png?size=85" width=85><br><sub>Florian Lauch</sub>](https://github.com/EdenComp)
| :---: | :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.

