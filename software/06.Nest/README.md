# Workshop 6 - REST API with NestJS

✔️ Discover [Nest](https://nestjs.com/), a framework to build server-side NodeJS applications with full TypeScript support.

✔️ Learn the concept of decorator

✔️ Create services to interact with a mocked database

In this workshop, you'll use [Nest](https://nestjs.com/), a framework built on top of [Express](https://expressjs.com/) to create efficient and scalable apps. It's a very opinionated framework that provides everything you need and has built-in integration with many other frameworks (queues, type ORMs, validators, documentation, and much more!).  
Nest fully supports TypeScript (in fact it's [built in TypeScript](https://github.com/nestjs/nest)).

## Step 0: Setup

All the required information to start this workshop can be found in [SETUP.md](./SETUP.md)

## Step 1: Basics

- In the `app.controller.ts` file, create a `@Get()` route `/article` (the route `hello` should help you to do so)
- You also have to create the corresponding provider to return a test value.

> 📖 The documentation about [modules](https://docs.nestjs.com/modules) and [providers](https://docs.nestjs.com/providers) will teach you some basic concepts and architecture of Nest. The concept of [dependency injection](https://docs.nestjs.com/providers#dependency-injection) is a really interesting part of Nest.

Now, launch the server:
```sh
npm run start:dev
```

You can now go to <http://localhost:3000/article> in your browser (or using Postman) to see if it works 🚀

> As said before, the command `start:dev` makes use of `file watchers`. Every time you save a file, Nest will automatically rebuild the server with the updated file(s).  
> This way you won't need to restart it manually after each modification 😉

> 💡 As you can see, AppService is an AppModule Provider (in `app.module.ts`) and it's [injected](https://docs.nestjs.com/providers#dependency-injection) in the controller (in the constructor).

## Step 2: Getting started

In this step, we will cover the basics of using NestJS and get familiar with its fundamental concepts. Understanding these basics will provide a solid foundation for building applications with NestJS.

These are the CLI commands you will need, we will explain later:

```sh
nest generate controller epi_steam
nest generate module epi_steam
nest generate service epi_steam
```

These commands allow you to quickly generate controllers, modules, and services in NestJS. The generate command followed by the desired type (controller, module, or service) and the name of the component (epi_steam in this case) will automatically scaffold the corresponding files and update the necessary configurations.

in your app.module.ts you will find something like this:

```javascript
@Module({
  imports: [EpiSteamModule],
  controllers: [AppController, EpiSteamController],
  providers: [AppService],
})
```

## Step 3: Introducing the epi-steam

Upon accessing the epi-steam page, you'll notice that it currently lacks content. Let's proceed by adding some essential elements, starting with a welcoming page.

- You should be able to create the epi-steam DTO, but what is a [DTO](https://betterprogramming.pub/how-to-use-data-transfer-objects-dto-for-validation-in-nest-js-7ff95309f650)?
    - This DTO should include the following information:
        - An ID for the primary-key
        - The number of visitors
        - An array of IDs representing all available games
        - The revenue generated from each game purchase on the site.


If you want to establish communication with your site, you need to employ an [APIRest](https://www.restapitutorial.com/lessons/httpmethods.html), for this project we will use **GET**, **POST**, **DELETE**, **PATCH**

- Each time a user accesses the epi-steam/ route, they will be greeted with the message 'Welcome to epi-steam', and the number of visitors will be incremented.

- The user can see the games avaibles, if there are not any games yet, you should send a message.

## Step 4: The games

Now you have your own games page but it's there are no games, let's create a game together.

You know how to create a DTO for the epi-steam, let's create one for the games, it should contain:
- An ID for the primary-key
- The name
- The price
- The income

Always in the the **epi-steam** controller you will now need to do a few a actions:
- Get all the games, if there are not any games yet, send a message.
- Get a game by his ID using **@Param()**
- Post a new game
- Delete a game by his ID
- Change the price for a game for the soldes
- Buy a new game


## Step 5: The user


## Authors

| [<img src="https://github.com/molaryy.png?size=85" width=85><br><sub>Mohammed JBILOU</sub>](https://github.com/molaryy)
| :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
