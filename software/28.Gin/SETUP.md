# Setup

## 1. Go

In this workshop, we will create an HTTP REST server using Go.
First of all, make sure you have **Go 1.14** or higher installed, allowing you to use the Gin Web Framework.

You can install **Go** following this [link](https://go.dev/doc/install).

If you have the right version installed, you should have something similar:
```shell
go version
> go version go1.18.2 linux/amd64 # OK
```

> The language should NOT be an issue in this workshop, if you're struggling with Go, do not hesitate to ask for help !

## 2. Postman

We will be using `postman` to test out our routes.

- [Postman](https://www.postman.com/downloads/)
⚠️ you should not install it with snap because it's not updated on this package manager. ⚠️

## 3. Gin

Once everything is installed, you have to download the Gin package.
Go at the root of your repo and run this commands to init a go project:
```shell
go mod init workshop-gin
```

Afterwards you can follow the official [documentation](https://github.com/gin-gonic/gin#installation) to install Gin correctly.
>Once again don't hesitate if you a$have any issue during the installation ! :smile:


**Now everything should work properly you can start the workshop !**

[Go back to the exercises](./README.md)
