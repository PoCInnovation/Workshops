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

- A `pochat.proto` file in the `proto` folder. The package name in the protobuf file must be `PoChat`.

- A gRPC service named `Chat`
  
- With one rpc call, named `Hello`.

    - The `Hello` call will take a `HelloRequest` message as the argument containing a string named `content`.
    - And will return a `HelloResponse` message as the response containing a string named `content`.


## Step 3 - Generating TypeScript definitions

So now that your protobuf file is ready, you can generate the TypeScript definition using the following command:
```shell
yarn protogen
```

Some files should have appeared in the `proto` folder.

## Step 4 - The server

Let's get to the fun part : implementing the client.

What's nice about gRPC is that is does a lot of the work for you. Because you and I are lazy, that's the dream.

So here is what you'll have to do:

- In the `src/server.ts` file, you'll find some code. **Don't modify this code**, it is responsible for importing the gRPC package that you'll have to use.

- Create a `PoChatServer` class and export it as the default export.
  
- It's constructor must initialize it's `server` member using the `@grpc/grpc-js` package.

- After the initialization, it must add the pochat.Chat service. For the moment, just print the request data.
  
  The implementation of the service must be cast to a `ChatHandlers` object.

- Then, you must bind the address `localhost:3000` to the server. Tips: use `bindAsync` to add a `console.log` in the callback.

- Finally, start the server.

## Step 5 - The client

## Step 6 - Adding some tests

## Authors

- [PtitLuca](https://github.com/PtitLuca)

Made with heart by PoC.

If you want to support our work, please add a star to this repository !
