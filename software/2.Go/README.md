# Workshop 2 - API REST in Go

In this workshop we will learn how to use the main functions of the http package in Go and how to create a REST API.

## Step 0: Initialization

All the required information to install the workshop's dependencies are given in the [SETUP.md](./SETUP.md)

## Step 0.5: The codebase

We designed a boilerplate for this project, it will be useful to start this project, but also to summarize all the required parts of an API
We will have :

- `controllers`: this is where you will design your routes endpoint. it will often be a wrapper that calls other API or the database itself
- `middlewares`: those are functions that can be called to print logs or check access rights before entering a controller
- `routes`: the core of the router, setting up all the routes handler, with their middlewares and controllers
- `models`: wraps all the database calls

There are plenty of other important package you may need in a real API, but these are the main one you can be sure you'll need one time or another. Now let's code.

Add a route on the endpoint `/hello`:
- It uses the `GET` method
- It responds `"hello world"`

> You can test it with `http://localhost:8080/hello` in a browser or with `postman`

## Step 1: Let's get started

You are now fine with the creation of endpoint.
Next step is to add messages logs because our server doesn't print anything, yet we would like to know when a route is called to know if everything went well.

Create a middleware that logs the traffic of the API:
- Use the `log` native package
- Apply this middleware to the `/hello` route


> This [tutorial](https://golang.io/fr/tutoriels/les-middlewares-avec-go/) may help you

> You can make this middleware global to all route rather than calling it manually on each and every route you create

<details>
  <summary>See how to request with postman :satellite:</summary>

  Enter your URL and the method you which to use in the titlebar and click `Send`.

  ![Seek](../../.github/go-http/seek.png)

  Then the result (if there is any) will be printed out at the bottom.

  ![Result](../../.github/go-http/result.png)

</details>

## Step 2: Authentication and security

On a real API, there are parts of your routes you only want some people to use.
To protect some routes from unknown users, we'll have to add another middleware.

- Create an middleware that checks if the request has a header called `Authorization` and if it contains the `allowed` string
- Create a route `/auth/hello` with both middlewares (logs and the one we've just created) to check if it works

> In a real life scenario you will check if the field contains a token, and if this token is valid thanks to `JSON Web Token` or any sessions

> `r.Header` is of type `map[string]string`, you should give a look at how to check if a value exist within a map beforehand

<details>

  <summary>See how to send a header :satellite:</summary>

  Go into the 3rd panel, there you will be able to create the headers that you want to send, toggle the checkbox to send them or not.

  ![Header](../../.github/go-http/header.png)

</details>

## Step 3: Vars

Creating routes is nice, but we cannot receive variables from them... To do so, we will use `"github.com/gorilla/mux"` to have modular routes

Create an endpoint `/whoami/{user}`
- It uses the `GET` method
- It responds `I am $user` with `$user` being the text sent in the URL

> Look at the `{``}` syntax, these brackets indicate which part of the URL will contain vars

> Check the mux [doc](https://github.com/gorilla/mux) for more information

## Step 4: Database and data transfers

Finally, we will use the API to manipulate data in a database. As we don't have the time to setup a real database, we've created functions to fake the behavior of a simple database.

> You must import the `model` package, it contains 3 functions to manipulate users.

You will need to implement an endpoint for:

- `/add`
  - It uses the `POST` method
  - It creates a user thanks to the information given in the `body`
- `/get/{id}`
  - It uses the `GET` method
  - It gets a user based on its `id`
- `/del/{id}`
  - It uses the `DELETE` method
  - It deletes a user based on its `id`

> The `body` will contain a JSON that has the same structure that the one designed in the model package as `model.Users`

<details>

  <summary>See how to send JSON in body :satellite:</summary>

  Go into the 4rd panel and select the `raw` option, then you can write your JSON (you can also copy this one).

  ![Body](../../.github/go-http/body.png)

  </details>

## Bonus

Theoretically, you should have all the basis needed to create your own API, if you still want to toy around with Go and all its usages, you can take a look at other go features like:
- `go routines`
- `interfaces`

You can also use a real database with these ORM packages:
- [GORM](https://github.com/go-gorm/gorm/)
- [Ent](https://github.com/facebookincubator/ent)

## Authors
- [Théo Ardouin](https://github.com/Qwexta)
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Grégoire Brasseur](https://github.com/lerimeur/)
