# Setup - Building a P2P network with lib2p in golang

## Install golang

Please follow the instructions given [here](https://golang.org/doc/install).

After the installation, run the following command to ensure go has been properly installed on your computer :

```shell
go version
```

It should print your current version followed by the architecture your OS is running on.

## Initialize your project

Create a new folder named `workshop-poc-libp2p-go` and run the following commands in your terminal :

_Will move to the project directory._
```shell
cd workshop-poc-libp2p-go
```

_Will create the golang module required to install dependencies._
```shell
go mod init ws
```

## Add project dependencies

Run the following command to add the required dependencies to your project :

```shell
go get github.com/libp2p/go-libp2p
go get github.com/libp2p/go-libp2p/p2p/discovery/mdns@v0.15.1
```

## Back to the workshop

[Jump !](./README.md)
