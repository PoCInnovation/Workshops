# Workshop 6 - REST API with NestJS

✔️ Discover [Nest](https://nestjs.com/), a framework to build server-side NodeJS applications with full TypeScript support.

✔️ Learn the concept of decorator

✔️ Create services to interact with a mocked database

In this workshop, you'll use [Nest](https://nestjs.com/), a framework built on top of [Express](https://expressjs.com/) to create efficient and scalable apps. It's a very opinionated framework that provides everything you need and has built-in integration with many other frameworks (queues, type ORMs, validators, documentation, and much more!).  
Nest fully supports TypeScript (in fact it's [built in TypeScript](https://github.com/nestjs/nest)).

## Step 0: Setup

All the required information to start this workshop can be found in [SETUP.md](./SETUP.md)

## Step 1: Basics

📑 Description:
<br>
In this step, you will learn the fundamental concepts of NestJS and its architecture.

📌 Tasks:
- Launch the server, you will see a message 😉
- Change the message that is returned within the app provider by *`"I love this workshop!"`*

📚 Documentation:
- Understand `📦providers` and `〽️dependency injection` [here](https://dev.to/patrick0806/understanding-providers-and-dependency-injection-in-nestjs-248e)


Command to launch the server:
```sh
npm run start:dev
```



> As said before, the command `start:dev` makes use of `file watchers`. Every time you save a file, Nest will automatically rebuild the server with the updated file(s).  
> This way you won't need to restart it manually after each modification 😉



✔️ Validation:

> You can now go to <http://localhost:3000> in your browser (or using Postman) to see if it works 🚀. Notice the message on the page? Congratulations, you just completed your first `I love this workshop!` in NestJS! 🥳

## Step 2: Setting up the poc-shop

📑 Description:

In this step, we will cover the basics of using NestJS and get familiar with its fundamental concepts. Understanding these basics will provide a solid foundation for building applications with NestJS.

📌 Tasks:

First of all you will create a folder in the `src` folder named `poc_shop`, inside the `poc_shop` folder, create the following files:
 - poc_shop.service.ts
 - poc_shop.controller.ts
 - poc_shop.module.ts


✔️ Validation:

You should have the following structure:
```txt
src
 └── poc_shop
      ├── poc_shop.controller.ts
      ├── poc_shop.module.ts
      └── poc_shop.service.ts
```
📚 Documentation:
 - What is is a [provider](https://docs.nestjs.com/providers)?
 - More about [decorators](https://docs.nestjs.com/custom-decorators)
 - What is a [controller](https://docs.nestjs.com/controllers)?
 - What is a [module](https://docs.nestjs.com/modules)
 - What is dependency [injection](https://blog.devgenius.io/exploring-nest-js-dependency-injection-66a68a10acf7)

> ### 2.1 - poc-shop provider

A **provider**, in the context of your project, refers to a class that offers specific services, functionality, or data manipulation related to the poc-shop feature and we will also see the dependency injections here.

Dependency **injection** is a design pattern that helps to *decouple* the components of an application and increase its *maintainability*, *scalability*, and testability. You can create a **provider** by adding the `@Injectable()` decorator to a class

First of all you should import the `Injectable` decorator and then place on the class that you will also create named `PocShopService`.

> ### 2.2 - poc-shop controller


🎮 In this section, you're about to embark on an exciting journey of creating your first controller using the `@Controller('poc-shop')` decorator. 🚀 Controllers play a crucial role in handling incoming requests 📥 and responding to clients with the appropriate data. 💡

To kick things off, let's dive into creating the PocShopController class. This class will serve as the controller specifically designed for the poc-shop route. 🛍️ Inside this class, we'll include a constructor that accepts an instance of the PocShopService and leverages the provider methods. 💼

But wait, there's more! To ensure the smooth flow of your application, you'll need to utilize the Get decorator.

✔️ Validation:

You should have a controller that handles the `poc-shop` route and the constructor with the provider 😄


> ### 2.3 - poc-shop module

🔗 A module is a class annotated with a `@Module()` 🧩 **decorator**. The @Module() decorator provides metadata that Nest makes use of to organize the application `structure`.🏗️

✔️ Validation:

You can now link the `poc-shop` controller to the `app` thanks to the modules.

## Step 3: Introducing the poc-shop

📑 Description:

Upon accessing the poc-shop page, you'll notice that it currently lacks content.📭 Let's proceed by adding some essential elements, starting with a welcoming page. 🎉

📚 Documentation:
- What is a [DTO](https://plainenglish.io/blog/use-of-dto-for-validation-in-nestjs-application-d37ff55f0560)

📌 Tasks:

- You should be able to create the poc-shop DTO
- Create a folder DTO in the `poc_sop/` folder and create a poc_shop.dto.ts
  > This DTO should include the following information:
    - The number of visitors
    - An array of IDs representing all available games
- Send `Welcome to poc-shop` message when user access to `/poc-shop`
- The number of visitors will be incremented each time a user access to `/poc-shop` or `/poc-shop/:id`

> If you want to establish communication with your site, you need to employ an [APIRest](https://www.restapitutorial.com/lessons/httpmethods.html), for this project we will use **GET**, **POST**, **DELETE**, **PATCH**


✔️ Validation:

- Each time a user accesses the poc-shop/ route, they will be greeted with the message 'Welcome to poc-shop'.
- The user can see the games available, if there are not any games yet, you should send a message.

## Step 4: The games

📑 Description:

Now you have your own games page but there are no games, let's create a game together.

📌 Tasks:

> You know how to create a DTO for the poc-shop, let's create one for the games in the `DTO/` folder and you should name it *`games.dto.ts`*, it should contain:

- An ID
- A name
- A price
- The income of the game

> Always in the the **poc-shop** controller you will now need to do a few a actions when a user access to `poc-shop/games`:

- Get all the games, if there are not any games yet, send a message.
- Get a game by his ID using **@Param()**
- Post a new game
- Delete a game by his ID
- Change the price for a game for the sales

## Bonus
If you are here that means that you finished the workshop or you want to go further and learn more about nestJS 🥇.

- Unless you want to restart all the data in your program every time it's down, check what is [postgreSQL](https://www.postgresql.org/) and how to use it thanks to the [ORM](https://www.freecodecamp.org/news/what-is-an-orm-the-meaning-of-object-relational-mapping-database-tools/) that makes it easier to interact with data bases, you can start with [mikroORM](https://docs.nestjs.com/recipes/mikroorm). For more information check this [video](https://youtu.be/jYFyLLqvHy8).
- For more security in your program check about user authentication with [JWT](https://docs.nestjs.com/security/authentication)

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
