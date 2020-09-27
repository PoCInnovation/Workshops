# Setup

## 1. Go

In this workshop, we will create an HTTP REST server using Go.
First of all, make sure you have **Go 1.11** or higher installed, allowing you to use the `go mod` feature. It makes the development easier.

If you have the right version installed, you should have something similar:
```sh
go version
> go version go1.11.10 linux/amd64 # OK
```

To create the server, we will use external dependencies:
- [mux](https://www.gorillatoolkit.org/pkg/mux), an HTTP router that allows us to create routes to receive data.
- [handlers](https://www.gorillatoolkit.org/pkg/handlers), working with mux, to add middlewares to our routes.

> The language should NOT be an issue in this workshop, if you're struggling with Go, do not hesitate to ask for help !

## 2. Postman, Hoppscotch, Curl

We will be using `postman` to test out our routes, but you can also use `Hoppscotch`, `curl`, or whatever other tool you want for your tests since they will be personal, but we highly recommend `postman` as we will go into an in depth explanation of how to use it.

- [Postman](https://www.postman.com/downloads/)
- [Hoppscotch](https://hoppscotch.io/)
- [Curl](https://curl.haxx.se/) (often already installed on your computer)

## 3. Launching the server

Once everything is installed, you have to download the workshop files **[here](https://downgit.github.io/#/home?url=https://github.com/PoCInnovation/Workshops/tree/master/software/2.Go/src)**.
Then, go in the [src](./src) folder and execute:
```sh
go run ./
# to simply launch the server
```
or
```sh
go build ./ && ./poc-workshop-go
# to compile a binary and run it
```

**If you have `Server runs on http://localhost:8080`, you've finished the setup and you can go for the exercises**

[Go back to the exercises](./README.md)
