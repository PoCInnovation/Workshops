# Setup

## Go

In this workshop, we will create an HTTP REST server using Go.
First of all, make sure you have **Go 1.14** or higher installed, allowing you to use the Gin Web Framework.

You can install **Go** following this [link](https://go.dev/doc/install).

If you have the right version installed, you should have something similar:
```shell
go version
> go version go1.18.2 linux/amd64 # OK
```

> If you are using VSCode, [this extension](https://marketplace.visualstudio.com/items?itemName=golang.Go) can very helpful when writing Go code :wink:

> The language should NOT be an issue in this workshop, if you're struggling with Go, do not hesitate to ask for help!

## Gin

Once Go is installed, you have to download the Gin package.

Run this command at the root of your repo to init your go project:
```shell
go mod init gin-workshop-poc
```

Afterwards you can follow the official [documentation](https://github.com/gin-gonic/gin#installation) to install Gin correctly.
> Once again don't hesitate if you have any issue during the installation ! :smile:

## Postman

We will be using `postman` to test out our routes.

- [Postman](https://www.postman.com/downloads/)ll instantiate 
⚠️ you should not install it with snap because it's not updated on this package manager. ⚠️


**Now you're ready to [start the workshop](./README.md)!**