# Workshop 8 - Express with TypeScript

✔ Learn how to create an HTTP server with express.

✔ Understand the basics and best practices of web development.

✔ Secure your server routes with validation frameworks.

## Step 0 : Setup

All the information related to the preparation of the workshop is available in the [SETUP.md](./SETUP.md).

Make sure you have completed its steps before moving on.

## Step 01 : Health or Death

To create a web server in TS, you will need the [express](https://github.com/expressjs/express) package.

```sh
npm install express @types/express
```

The purpose of this exercise is to set up a server that exposes two routes `/health` and `/death`. With `/health` returns `OK` and `/death` returns `BAD_REQUEST`.

For this it will be necessary to create and to use the method  **GET**.

In the file `src/server.ts` :
- Create a new variable `app` who will instantiate your express server.
- Start the server by listening on the port `8080`.
- Define a route **GET** `/health` which returns `OK`
- Define another route **GET** `/death` which returns `BAD_REQUEST` 

> A basic practice when starting a server is to display a message with the server address so that you can easily access it.

#### Resources :
- [Express](https://github.com/expressjs/express)
- [Serveur HTTP](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)


## Step 02 : Use our routes

We'll need to test those routes, but before let's change the status that sees our route.

> :bulb: A REST API returns data based on what a client requests, but if a client tries to access data that does not belong to them, or does not exist, our API will not be able to send them what they request.

> :bulb: An HTTP code is used to determine the result of a request or to indicate an error to the client. These codes are essential for the proper functioning of HTTP communication services. It is therefore essential to properly setup your server to return the codes adapted to the situation.

Change your route **GET** `/health` to always return the status `200` and always display the message `OK`.

Change your route **GET** `/death` to always return the status `400` and always display the message `BAD_REQUEST`.

If ever during your tests this route does not work anymore, it is because your server is not running or does not work.

It is common to use `http-status-codes` to explain your status in your code.

Install this dependency with the following command:

```sh
npm i http-status-codes
```

```ts
import { StatusCodes } from 'http-status-codes'
```

Replace your hard-written status-codes with those offered in the package:

```ts
res.status(StatusCodes.OK).send("ok");
```

#### Resources :
- [The main HTTP codes](https://medium.com/@sahelasumi/http-status-codes-31644d99fb1)
- [Full list of codes](https://developer.mozilla.org/docs/Web/HTTP/Status)
- [Using HTTP status in Typescript](https://github.com/prettymuchbryce/http-status-codes)


> When we create a route, we want to be able to simply test if it works, and if its implementation has not broken the other route.
<br>
It is in this case that Postman can be very useful.

So you will create a Postman collection containing tests on all previously coded routes.<br>
Once your queries are created, you should be able to run a test-suite on your server.

> We recommend that you update this collection for all routes of the following exercises.

#### Resources :
- [Installing Postman](https://www.postman.com/downloads/)
- [Postman Collection](https://learning.postman.com/docs/sending-requests/intro-to-collections/)
- [Postman Test suite](https://www.postman.com/use-cases/api-testing-automation/)
- [Postman Environnement ](https://learning.postman.com/docs/sending-requests/managing-environments/)


## Step 03 : Abuse the good things

In HTTP, the parameters of your request can be expressed in different places:

- `body`
- `parameter`
- `query`
- `cookie`
- `header`

To parse data from these different locations, you will need to install [middlewares](https://aws.amazon.com/what-is/middleware/) used by express:
```sh
npm install body-parser cookie-parser @types/cookie-parser
```

Your express application will then need to use (`use()`) on these 2 parsers to apply them to the entire server.
  
Now all you have to do is create these different routes:

- Create a route **GET** `/repeat-my-query`
  - Takes a query parameter `message`
  - Returns the given message as a parameter
  - If no message is given
    - Set Status 400
    - Return `Bad Request`
    <br><br>
- Create a route **GET** `/repeat-my-param/:message`
  - Takes a parameter `message`
  - Returns the given message as a parameter
  <br><br>
- Create a route **POST** `/repeat-my-body`
  - Returns the `message` given in the body of the request
  - If the body is empty
    - Set Status 400
    - Return `Bad Request`
    <br><br>
- Create a route **GET** `/repeat-my-header`
  - Cherche un header `X-Message`
  - Returns the message written in it
  - If no message is given
    - Set Status 400
    - Return `Bad Request`
    <br><br>
- Create a route **GET** `/repeat-my-cookie`
  - Look for a cookie `message`
  - Returns the message given in the cookie
  - If no message is given
    - Set Status 400
    - Return `Bad Request`

> As before, [Postman](https://www.postman.com/) may be useful to test your HTTP routes :rocket:

#### Resources :
- [Cookies with Express](https://github.com/expressjs/cookie-parser)
- [headers with Express](https://flaviocopes.com/express-headers/)

## Step 04 : Always think about scaling

> :bulb: Environment variables are variables used by your operating system in many areas. They are visible by typing `env` in your terminal. 

> These variables are used when you deploy an application in production to secure passwords and private identifiers. It is therefore essential to know how to use them in your code :wink:
 
For this, we will use the package [env-var](https://github.com/evanshortiss/env-var) which allows you to automatically load environment variables from a file:

```sh
npm i env-var
```

Next, create a file `.envrc` which will export the following environment variables:
  - SERVER_PORT=8080
  - HELLO_MESSAGE=world

:warning: You will also need to install [direnv](https://direnv.net/) to load the variables into your environment with the `direnv allow`.

In the file `src/serverConfig.ts`, retrieve these two environment variables and export them.

> It is common in an API to have a file specific to the configuration, it allows you to keep a clean and constant architecture.

Adapt the express server code to use the port set in the your environment, and if it's not set, use the port `8080`.

Create a route **GET** `/hello` to use the variable `HELLO_MESSAGE` as a response.
  - If the variable is not present:
      - Set Status 404
      - Return `No Message Defined`

>:bulb: If your `.envrc` contains private variables, it is imperative not to push it on the repo.  
> The best practice is to create a `envrc.example` file containing the various variables but without their values, in order to indicate what will subsequently be needed, then fill it in and rename it to `.envrc`.

> It is important to think from the beginning of the application about integrating your server into a web architecture by placing as many variables as possible that may change in the environment :floppy_disk:

#### Resources :
- [env-var](https://github.com/evanshortiss/env-var)
- [direnv](https://direnv.net/)

## Step 05 : Testing time

Have you tested the new routes you created?

If you did, congratulations, that's a good habit to have, you can move on to the next step :partying_face:

Else, enrich your test collection with tests for your new routes :wink:

#### Resources :
- [Postman Collection](https://learning.postman.com/docs/sending-requests/intro-to-collections/)
- [Postman Test suite](https://www.postman.com/use-cases/api-testing-automation/)
- [Postman Environnement ](https://learning.postman.com/docs/sending-requests/managing-environments/)

## Step 06 : The bodyguards of the servers

On the web, it's important to know which types of data are sent to your API.<br>
This allows you to have a stable and secure code.

Send an empty body to a route reading data from it, you should get an error back if you didn't perform checks.  
This kind of error is not acceptable for an API.

But fortunately, to ensure the security of an API, there is a system called `middleware`.

Here is the structure of a custom middleware in an express API:


```typescript

const myMiddleware = (req: Request, res: Response, next: NextFunction) => {
}

```

> :bulb: Middlewares can also be used to set up a logger, manage permissions etc.

- Create a route `/private`.
- You can see that in the second parameter we have the middleware

```ts
app.get("/private", middleware, (_req, res) => {
    console.log("Password is good");
    res.status(StatusCodes.OK);
});
```

### Update .envrc
Create a new variable in your `.envrc`

```
AUTHORIZATION_PORT=mykey
```

:warning: Your objective is to verify the value of the user in his headers, which must be equal to your variable `AUTHORIZATION_PORT`

### Write a middleware
Create a file `middlewares.ts`, write a middleware that will check the headers of the `/private` route with as key `authorization`.<br>
In case of invalid headers, return the status `400` and the reason for the refusal.
<br>
<br>

#### Resources :
- [Middleware](https://expressjs.com/en/guide/using-middleware.html)
<br>
<br>

## To go further

Here is a list of links if you want to learn more about Typescript APIs:
- [How to Write Useful API Documentation](https://www.freecodecamp.org/news/how-to-write-api-documentation-like-a-pro/#:~:text=Your%20API%20documentation%20should%20be,the%20end%20of%20the%20documentation.)
- [How to work with asynchronicity](https://javascript.info/async-await#:~:text=1.,settles%20and%20returns%20its%20result)
- [Test your app with insomnia](https://insomnia.rest/)
- [Other NodeJs framework](https://nodesource.com/blog/Express-Koa-Hapi)
- [Nestjs, a progressive NodeJs framework](https://docs.nestjs.com/)
- [Centralized error management](https://dev.to/nedsoft/central-error-handling-in-express-3aej)

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
