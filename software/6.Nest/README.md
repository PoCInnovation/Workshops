# REST API with Nestjs

## Step 0: Typescript

If you do not already know typescript, you can read [this file](https://github.com/PoCInnovation/Workshops/blob/master/software/6.Nest/src/step-0/learn.md) to learn the basics.

<br>

## Step 1: Basics

### Step 1.1: first route

- In the app.controller.ts file, create a @Get() route `/article` (the route `hello` should help you to do so)

Now, launch the server:
```
$ npm run start:dev
```

Go to http://localhost:3000/article via your browser (or Postman) to see if you can get this route.

As said before, the command `start:dev` makes use of `file watchers`. Every time you save a file, nestjs will automatically rebuild the server with the updated file(s).
That way you will not need to restart it manually after each modification.

<br>

### Step 1.2: first provider

Read the first 2 sections of [modules](https://docs.nestjs.com/modules) and [providers]((https://docs.nestjs.com/providers)). It will teach you some basic concepts and architecture of nestjs.

As you can see, AppService is an AppModule Provider (in `app.module.ts`).
And it is [injected](https://docs.nestjs.com/providers#dependency-injection) in the controller (in the constructor).

In the AppService, create a method `getArticle`. For now just return a test value.

You can now try to call it using the AppService instance in the controller you previously declared.
Launch the server and use your browser to check if everything went well.

<br>

## Step 2: Variable decorator

> a @Decorator() is a Javascript feature that allows you to wrap one piece of code with another.<br>
You can read more about decorators [here](https://www.sitepoint.com/javascript-decorators-what-they-are/)

<br>

### Step 2.1: Use @Body() to get data from a POST request

You will now use the [POST](https://en.wikipedia.org/wiki/POST_(HTTP)) http method. It will allow you to send data via a Body.

The object containing data that will be transfered is named DTO ([Data Transfer Object](https://en.wikipedia.org/wiki/Data_transfer_object)).<br>
A class `article.dto` is provided [here](https://github.com/PoCInnovation/Workshops/blob/master/software/6.Nest/src/step-2/article.dto.ts). It is a simple class that describes an article.

Make sure you have installed ``class-validator`` and ``nestjs/swagger``

```
$ npm install class-validator @nestjs/swagger
```

With the decorator [@Body()](https://docs.nestjs.com/controllers#request-payloads) (found in `@nestjs/common`), you will be able to get the body of the request.

You should now be able to create a route `/article` using @Post(). The type of the object will be the provided dto class.

Now, add debug logs that print the received body.

> Use Postman to test the new route

Here is an example of a body:
```javascript
{
    "title": "simple article",
    "body": "simple body",
    "author": "simple author"
}
```

<br>

### Step 2.2: Use @Param() to get URL route parameters

First, read a little about [route parameters](https://docs.nestjs.com/controllers#route-parameters).

You can now update the previously created `getArticle` function to take a route `@Param()`. This will allow you to get an article by its title.

<br>

### Step 2.3: Put request to update data

A Put request usually uses both `@Param()` (e.g. find the article to update) and `@Body()` (containing the updated article)

Using the `@Put()` method and what you have just learnt, write a route to get both the body and the url param.

> As always, do not forget to test if everything works as intended before moving on to the next step !

<br>

### Step 2.4: Bonus

A controller usually contains routes with similar routes (e.g. `/user`, `/user/profile` ...).<br>
With [controller routing](https://docs.nestjs.com/controllers#routing) you can specify a prefix to be applied to every routes of this controller (it would `user` here)

<br>

## Step 3: Database (Service)

### Step 3.1: Incorporate Database service in App' service

You can find [here](https://github.com/PoCInnovation/Workshops/blob/master/software/6.Nest/src/step-3/database.service.ts) a Provider DatabaseService. This provider is simulating a database by using an array as a storage. You will use it for the last step; as setting up and using a real database is a bit out of scope.

> Make sure the import statement of `article.dto` is correct in the `database.service.ts`. it may not be according to the file locations

As for the AppService, you will have to add the DatabaseService in the Module Provider list and `inject` it (via the constructor) in AppService.

<br>

### Step 3.2: Use the Database service

The new service exposes 4 functions: createArticle, updateArticle, findArticle, deleteArticle

As these functions are [asynchronous](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function), you will have to use `Promise`s (i.e. `await` or `.then()`). <br>
Feel free to ask questions or read about Promises if you do not feel at ease with them.

Now, update the functions in AppService to use the database and call them in the controller.

If everything went well, you should be able to create, update and get articles !

> Try with Postman !

<br>

### Step 3.3: Delete

What about deletion !

Create a route to `@Delete()` an article on your own !

<br>

### Step 3.4: Bonus

Nestjs [HttpException](https://docs.nestjs.com/exception-filters#built-in-http-exceptions)s are an elegant way to send error response.<br>
For example, the `findArticle` function may return `undefined` if no article matches the requested title.
In that case you should send a `NotFoundException`

<br>

## Bonus

Congratz !<br>
If you want to go further, here are some ideas:
<br>
<details>
  <summary>Validate user input</summary>

  [class-validator](https://docs.nestjs.com/techniques/validation)
  allows you to easily validate incoming input (i.e. Body and Query params)
</details>
<details>
  <summary>Document your routes</summary>

  [Nestjs swagger](https://docs.nestjs.com/recipes/swagger) offers an easy way to document your routes (with @Decorators).
  It can then generate an open-api documentation using swagger
</details>
