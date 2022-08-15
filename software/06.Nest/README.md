# REST API with NestJS

:heavy_check_mark: Discover [Nest](https://nestjs.com/), a framework to build server-side NodeJS applications with full TypeScript support.

:heavy_check_mark: Learn the concept of decorator

:heavy_check_mark: Create services to interact with a mocked database

In this workshop, you'll use [Nest](https://nestjs.com/), a framework built on top of [Express](https://expressjs.com/) to create efficient and scalable apps. It's a very opinionated framework that provides everything you need and has built-in integration with many other frameworks (queues, type ORMs, validators, documentation, and much more!).  
Nest fully supports TypeScript (in fact it's [built in TypeScript](https://github.com/nestjs/nest)).


> If you aren't familiar with TypeScript, you can read [this file](https://github.com/PoCInnovation/Workshops/blob/master/software/06.Nest/src/step0/learn.md) to learn the basics.

## Step 0: Setup

All the required information to start this workshop can be found in [SETUP.md](./SETUP.md)

## Step 1: Basics

- In the `app.controller.ts` file, create a `@Get()` route `/article` (the route `hello` should help you to do so)
- You also have to create the corresponding provider to return a test value.

> :book: The documentation about [modules](https://docs.nestjs.com/modules) and [providers](https://docs.nestjs.com/providers) will teach you some basic concepts and architecture of Nest. The concept of [dependency injection](https://docs.nestjs.com/providers#dependency-injection)

Now, launch the server:
```sh
npm run start:dev
```

You can now go to http://localhost:3000/article in your browser (or using Postman) to see if it works :rocket:

> As said before, the command `start:dev` makes use of `file watchers`. Every time you save a file, Nest will automatically rebuild the server with the updated file(s).  
> This way you won't need to restart it manually after each modification :wink:

> :bulb: As you can see, AppService is an AppModule Provider (in `app.module.ts`) and it's [injected](https://docs.nestjs.com/providers#dependency-injection) in the controller (in the constructor).

## Step 2: Variable decorator

A `@Decorator()` is a Javascript feature that allows you to wrap one piece of code with another.  
You can read more about decorators [here](https://www.sitepoint.com/javascript-decorators-what-they-are/)

### Step 2.1: Use @Body() to get data from a POST request

You will now use the [POST](https://en.wikipedia.org/wiki/POST_(HTTP)) method to send data via a Body.

The object containing data that will be transfered is a DTO ([Data Transfer Object](https://en.wikipedia.org/wiki/Data_transfer_object)).  
A class `article.dto` is provided [here](https://github.com/PoCInnovation/Workshops/blob/master/software/06.Nest/src/step2/article.dto.ts). It is a simple class that describes an article.

With the decorator [@Body()](https://docs.nestjs.com/controllers#request-payloads) (found in `@nestjs/common`), you will be able to get the body of the request.

You should now be able to create a route `/article` using `@Post()`. The type of the object will be the provided dto class.

Now, add debug logs that print the received body.

> Use Postman to test your new route :wink:

Here is an example of a body:
```js
{
    "title": "simple article",
    "body": "simple body",
    "author": "simple author"
}
```

### Step 2.2: Use @Param() to retrieve URL route parameters

First, read a little about [route parameters](https://docs.nestjs.com/controllers#route-parameters).

You can now update the previously created `getArticle` function to take a title as a route `@Param()`.  
Add debug logs again to check if you are correctly receiving it :rocket:

> We'll use this param later to search for this title in our mocked article DB :wink:

### Step 2.3: PUT request to update data

A PUT request usually uses both `@Param()` (e.g. find the article to update) and `@Body()` (containing the updated article)

Using the `@Put()` method and what you have just learnt, write a route to get both the body and the url param.

> As always, do not forget to test if everything works as intended before moving on to the next step!

### Step 2.4: Bonus

A controller usually contains routes with similar routes (e.g. `/user`, `/user/profile` ...).<br>
With [controller routing](https://docs.nestjs.com/controllers#routing) you can specify a prefix to be applied to every routes of this controller (it would be `article` here)

## Step 3: Database Service

### Step 3.1: Incorporate the Database service in your app

You can find a Provider DatabaseService [here](https://github.com/PoCInnovation/Workshops/blob/master/software/06.Nest/src/step3/database.service.ts). This provider is simulating a database by using an array as storage. You will use it for the last step as setting up and using a real database is a bit out of scope for this workshop.

> :bulb: Make sure the import statement of `article.dto.ts` is correct in the `database.service.ts`. it may not be according to the file locations

As for the AppService, you will have to add the DatabaseService in the Module Provider list and `inject` it (via the constructor) in AppService.

### Step 3.2: Use the Database service

The new service exposes 4 functions: createArticle, updateArticle, findArticle, deleteArticle

As these functions are [asynchronous](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), you will have to use `Promise`s (i.e. `await` or `.then()`). <br>
Feel free to ask questions or read about Promises if you do not feel at ease with them.

Now, update the functions in `AppService` to use the database and call them in the controller.

If everything went well, you should be able to create, update and get articles!

> Try with Postman!

### Step 3.3: Delete

What about deletion !

Create a route to `@Delete()` an article on your own !

### Step 3.4: Bonus

Nestjs [HttpException](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)s are an elegant way to send an error response.  
For example, the `findArticle` function may return `undefined` if no article matches the requested title.
In that case you should send a `NotFoundException`.

## Bonus

If you want to go further, here are some ideas:
- Implement a DELETE route and add data to your response to let users know everything went well.
- Validate user input: [class-validator](https://docs.nestjs.com/techniques/validation) allows you to easily validate incoming input (i.e. Body and Query params)
- Document your routes [NestJS swagger](https://docs.nestjs.com/recipes/swagger) offers an easy way to document your routes (with decorators).
  It can then generate an open-api documentation using swagger.
</details>

## Authors

| [<img src="https://github.com/TheoHertz.png?size=85" width=85><br><sub>Theo Hinsinger</sub>](https://github.com/TheoHertz)
| :---: | 
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
