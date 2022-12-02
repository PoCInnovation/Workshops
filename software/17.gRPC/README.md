# Workshop 17 - Discover gRPC with go

✔️ Design a gRPC service

✔️ Write a protocol buffer file

✔️ Make gRPC unary call

✔️ Implement a gRPC server

✔️ Implement a gRPC client

# Introduction

**What you will do and why:**

Let's say that you need to implement a way of communicating between a client and a server.
You've probably heard of the REST model, one of the way that you can implement which is very common in web development.
During this workshop, you will implement a communication channel between a client and a server using gRPC, which is 
one of the other ways to communicate - like REST does.

**But what *is* gRPC ?**

- gRPC stands for **g**oogle **R**emote **P**rocedure **C**all.
- It is a framework developed by Google on top of the [RPC protocol](https://en.wikipedia.org/wiki/Remote_procedure_call).
- When dealing with gRPC, the data sent between the client and the server is packed in a specific format: protobuffers.

> 💡 Okay, but why do we use protobuf and not JSON ? [JSON are nice](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#json_structure): they are human-readable, easy to build and to extract.
In fact, it is the data serialization method used in a lot of REST APIs.

**But why gRPC instead of REST ?**

- gRPC's communication speed is faster than REST one
- gRPC is *kinda* easier to implement, but not faster
- gRPC uses HTTP/2, which is better than HTTP 1.1, the one that REST uses

You can learn more about the main differences between these two models [on this great blog post](https://www.imaginarycloud.com/blog/grpc-vs-rest/).
I highly recommend that you take a look at the article, it is easy to understand, and you will learn a lot of stuff !

## Step 0 - Setup

Please follow the instructions available [here](./SETUP.md).

## Step 1 - Designing the gRPC service

### 📑 **Description**:
When dealing with gRPC, you need to define two things in a very specific file: the [protobuf](https://developers.google.com/protocol-buffers) file.
These two things are :

- `Service` - This is the global communication between two entities
- `Message` - It defines the messages sent and received during the communication

### 📌 **Tasks**:
- Create a folder `messenger`
- In this folder, create a `messenger.proto` file
- Create a `MessengerService` in the `messenger.proto` file
- This service has a `Send` rpc, which:

  - Takes a `Content` message as an argument
  - Returns a `Content` message
  
- Well now, create the `Content` message, which contains:

  - A string, named `body`
  - An int, named `date`
  
- The package name of this protobuf file must be `messenger`
- The syntax version you must use is `proto3`
- Don't forget to set the `option go_package` with the value `./`

### 📚 **Documentation**:

- [Protobuf language guide](https://developers.google.com/protocol-buffers/docs/proto)

### ✔️ **Validation**:
Run the following command and nothing should have appeared on your screen:
```shell
protoc --go_out=messenger --go-grpc_out=messenger messenger/messenger.proto
```
> Two files were generated in the `messenger` directory, we'll use them later 😉

## Step 2 - Implement the main logic

### 📑 **Description**:
Before implementing both the server and the client, you will implement the main logic of the program, which will:

- Take several arguments
- Start as the server or the client

### 📌 **Tasks**:
- Create a `main.go` file at the root of your working folder
- Create a `main` function
- Check the first argument provided to the program

  - If it is `-s`, it will start the server. For the moment, just print `Starting the server`
  - If it is `-c`, it will start the client. For the moment, just print `Starting the client`
  - Otherwise, the program will exit with an error code of 1

### 📚 **Documentation**:

- [Command line args in go](https://gobyexample.com/command-line-arguments)

### ✔️ **Validation**:
Run the following commands:
```shell
go run main.go "-s"
go run main.go "-c"
```
Should print respectively:
```shell
go run main.go "-s"
Starting the server


go run main.go "-c"
Starting the client
```

And running the following command:
```shell
go run main.go "-h" 
```
Should print:
```shell
exit status 1
```

## Step 3 - Implement the server

### 📑 **Description**:
At the first step, the protoc compiler [generated 2 files](https://grpc.io/docs/languages/go/basics/#generating-client-and-server-code): `messenger_grpc.pb.go` and `messenger.pb.go`.  
Let's focus on the first one, which contains a lot of things, including a `MessengerServiceServer` interface.

During this step, you will implement this interface and its method, `Send`.

### 📌 **Tasks**:
- Open the `messenger/messenger_grpc.pb.go` file
- Look for the `MessengerServiceServer`
- Create a folder named `server` at the root of your working directory
- Create a `server.go` file in the `server` folder
- In the `server/server.go` file, create a `Server` structure which contains nothing for the moment
- Create a `Send` method for the `Server` structure which takes the same arguments as the `Send` method of the 
  `MessengerServiceServer` interface
  
  - Print the content received with the following format: `[SERVER]: received {body} at {date}`
  - Return the following message to the client: `hello from server !` with the current date as a UNIX timestamp

Now that your `Server` structure implements all the `MessengerServiceServer` methods, you can start the server.

  - Add a field named `listener` in the `Server` structure
  - Add a field named `core` in the `Server` structure
  - [Embed the unimplemented server](https://github.com/grpc/grpc-go/issues/3794#issuecomment-720599532) in the `Server` structure 
  - Add a `New` method to the `Server` structure
      - The core is a `grpc.Server` that you must create using a method from the grpc package
      - You must register the server using one of the method in `messenger_grpc.pb.go`
      - Then return the instance of the created `Server`

Let's start the server:

  - Add a `Start` method to the `Server` structure
  - Use the `core` and the `listener` property to start serving.

In the `main.go` file:

  - Below the print of `Starting the server`, create a new server and start it
      - The listener must listen on `tcp:9000`

### 📚 **Documentation**:

- Look at the generated protobuf file :)

### ✔️ **Validation**:
Run the following command:
```shell
go run main.go -s
```

Should make the program run indefinitely !

## Step 4 - Implement the client

### 📑 **Description**:
Your server is running, but you need a way to send request.
Here comes the client !

During this step, you will create a client and add methods allowing it to connect, send a message and disconnect 
from the server.

### 📌 **Tasks**:
- Create a folder named `client`
- In this folder, create a `client.go` file
- In this file, create a `Client` structure
- Create a `New` function, which creates a new `Client` instance
- The `New` function initialize two members of the structure
  
  - `conn` which is a `grpc.ClientConn`
  - `core` which is your messenger's client
  - The connection can be insecure for now
  
- Create a `Disconnect` method, which closes the client connection
- Create a `Send` method, which sends the message given as parameter. It returns the response received from the server

In the `main.go` file:

- Below the print of `Starting the client`, create a new client and send a message

### 📚 **Documentation**:

- Look at the protobuf generated file :)

### ✔️ **Validation**:
- Run the server
```shell
go run main.go -s
```
- Open a new terminal, and run
```shell
go run main.go -c
```

The server should print:
```shell
$ go run main.go -s
Starting the server
[SERVER]: received Hello World! at 1659805496
```
> The timestamp is obviously different in your case.

## Step 5 - Shutdown properly

### 📑 **Description**:
When you don't need the server to run anymore, or whenever the client has stopped sending their requests, we need 
to shut it down properly.

As you created the `Disconnect` method for the client, you only need to create the same method for the server that 
triggers whenever you hit `CTRL + C`.

### 📌 **Tasks**:
- Capture when the user hit `CTRL + C` on the server-side
- Create a `Stop` method for the server and call it when necessary
- Use the `Disconnect` method for the client when it has sent its message

### 📚 **Documentation**:
- [Signals in go](https://pkg.go.dev/os/signal)

### ✔️ **Validation**:
Try to hit `CTRL + C` while running the server, and it should shut down without any error message.

## To go further

For the moment, you are using an int to represent the date, but there is the [Timestamp](https://stackoverflow.com/questions/3574716/date-and-time-type-for-use-with-protobuf) type available in protobuf.

Take a look at the [gRPC streams](https://grpc.io/docs/what-is-grpc/core-concepts/) and try to implement a stream 
RPC in the current project.

Or you can try to write the client in [another programming language](https://developers.google.com/protocol-buffers/docs/pythontutorial) ! Here comes the power of protobuf :)

You can add more services to the protobuf file, passing other type of parameters instead of a string, or even combining more data types.

If you want to learn more about gRPC project out there, check out [this](https://github.com/grpc-ecosystem/awesome-grpc) list of amazing projects that uses it.

## Authors

| [<img src="https://github.com/0xPanoramix.png?size=85" width=85><br><sub>Luca Georges Francois</sub>](https://github.com/0xPanoramix) | 
| :---: |
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

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
