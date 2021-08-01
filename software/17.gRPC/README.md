# Workshop 17 - gRPC and Protocol Buffers with TypeScript

## Step 0 - Setup

You have to install node and npm to follow this workshop.

You have to install yarn globally using the following command:
```shell
npm install --global yarn
```

In order to install the required dependencies listed in the `package.json` file, you must run the following command:
```shell
yarn install
```

A `node_modules` folder and a `yarn.lock` file should now have appeared in your workspace.

## Step 1 - The basics

gRPC stands for **g**oogle **R**emote **P**rocedure **C**all.
It is a framework developed by Google on top of the [RPC protocol](https://en.wikipedia.org/wiki/Remote_procedure_call).

If you want to learn more about the differences between gRPC and REST, you can read [this great blogpost](https://www.imaginarycloud.com/blog/grpc-vs-rest/#comparison).

## Step 2 - Writing protobuf file

When dealing with gRPC, the data sent between the client and the server is packed in a specific format : protobuffers.

> Okay, but why do we use protobuf and not JSON ? JSON are nice : they are human-readable, easy to build and to extract.
In fact, it is the data serialization method used in a lot of REST APIs.

The main issue with JSON is the following : it is really heavy, because the data sent is formatted into a string.

Meanwhile, protobuf serialize data in a binary format, which makes the communication really fast !

So we need to define the data we will send into a .proto file. Let's do it !

### Unary gRPC call

Starting with the unary call. You can think as this as the standard Request/Response model.

In this step, you must create:

- A gRPC service named `Chat`
  
- With one rpc call, named `Hello`.

    - The `Hello` call will take a `HelloRequest` message as the argument.
    - And will return a `HelloResponse` message as the response.

### Client stream
### Server stream
### Bi-directional stream

## Step 3 - Generating TypeScript definitions

## Step 4 - The server

## Step 5 - The client

## Step 6 - Adding some tests

## Authors

- [PtitLuca](https://github.com/PtitLuca)

Made with heart by PoC.

If you want to support our work, please add a star to this repository !
