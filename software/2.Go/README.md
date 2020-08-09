# Workshop 2 - API REST in Go

In this workshop we will learn to use the main function of the http package in Go and how to create a REST server.  

## Step 0: Initialization

All the required informations to install workshops's dependencies are explained in the [SETUP.md](./SETUP.md)

## Step 0.5: The codebase

We designed a boilerplate for this project, it will be useful for starting this project out, but also summarize all the needed part of a API
We will have :

- `controllers`: this is where you will design your routes endpoint. it will often be wrapper that calls other API or the database itself
- `middlewares`: those are gates that can be chained to log or check access rights before entering a controller
- `routes`: the core of the router, setting up all the routes handler, with their middlewares and controller
- `models`: wraps all the database calls

There is plenty of other important package you may need in a real API, but those are the main one you can be sure of needing at one time or another. Now let's code.

Add a route on the endpoint `/hello`:
- It uses the `GET` method
- It responds `"hello world"`

> You can test it with `http://localhost:8080/hello` in a browser or with `postman`

## Step 1: Let's get started

You are now fine with the creation of endpoint.
Next step is to add log because our server doesn't log anything, yet we would like to know when a route a called to know if everything went well.

Create a middleware that logs the traffic of the API:
- Use the `log` native package
- Apply this middleware to the `/hello` route


> This [tutorial](https://golang.io/fr/tutoriels/les-middlewares-avec-go/) may help you

> You can make this middleware global to all route rather than calling it manually on each and every route you create

<details>
  <summary>See how to request with postman</summary>

  Enter your URL and the method you which to use in the titlebar and click `Send`.

  ![Seek](./res/seek.png)

  Then the result (if there is any) will be printed out at the bottom.

  ![Result](./res/result.png)

</details>

## Step 2: Authentication and security

On a real API, there part of your routes you only want some people to use.  
To protect some routes from unknown users, we'll have to add another middleware

- Create a middleware that check if the request has a header called `Authorization` and if it contains the `allowed` string
- Create a route on `/auth/hello` with the same controller as before wrapped with this new middleware to check if it works

> In a real life scenario you will check if the field contain a token, and if this token is valid thanks to JWT or any sessions

> `r.Header` is of type `map[string]string` you should give a look at how to check if a value exist within a map beforehand

<details>

  <summary>See how to send header</summary>

  Go into the 3rd panel, there you will be able to create the header you wish to send, toggle the checkbox to send them or not.

  ![Header](./res/header.png)

</details>

## Step 3: Vars

Creating routes is nice, but we cannot receive variables from them... To do so, we will use `"github.com/gorilla/mux"` to have modular routes

Create a endpoint `/whoami/{user}`
- It uses the `GET` method
- It responds `I am $user` with `$user` being the text sent in the URL

> See the `{``}` syntax those bracket will indicate which part of the URL will be contain in the vars

> Check the [doc](https://github.com/gorilla/mux)

## Step 4: Database and data transfers

Finaly, we will use the API to manipulate informations in a database. We don't have the time to setup a real databse, so we created fonctions to fake the behavior of a simple database.

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

> The `body` will contain a json on the form of the structure designed in the model package as `model.Users`

<details>

  <summary>See how to send json in body</summary>

  Go into the 4rd panel and select the `raw` option, then you can write your json (you can also copy this one).

  ![Body](./res/body.png)

  </details>

## Bonus

Theoretically, you should have all the basis needed for creating you own API, if you still wish to toy around with Go and all its usage, you can take a look at other go features like:
- `go routines`
- `interfaces`

You can also use a real database with these ORM packages:
- [GORM](https://github.com/go-gorm/gorm/)
- [Ent](https://github.com/facebookincubator/ent)

## Authors
- [Théo Ardouin](https://github.com/Qwexta)
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Grégoire Brasseur](https://github.com/lerimeur/)