# Workshop 19 - Chat with Socket.IO

✔ Understand the sockets
✔ Learn Typescript Languages
✔ Understand how transmission data works
✔ Learn how to create a HTTP server with express and Socket Io

## Step 0 - Setup

All the required information to start this workshop can be found in [SETUP.md](./SETUP.md).

Be careful to finish every step before moving one to the next thing.

If you are new to Typescript, you should check our [Typescript cheatsheet](https://github.com/PoCInnovation/Workshops/blob/master/software/8.Typescript/HELP.md).

[What's a socket ?](https://socket.io/docs/v4/index.html)

## Step 01 - Link your page HTML

In the file src/router/router.ts import `path` and replace `Hello World`
by the path of your HTML page `src/Front/index.html`.

If your reload your browser page, you must see input and button `Send`.

## Step 02 - Create Socket Server

Your server work with express, you can find it in src/index.ts.
You need to change this file to allow express and socket.io to use it at the same time.
That will allow you to issue and receive data on your server.

For your first step create many variables:
* socket exposed by require("socket.io").
* http exposed by require("http").
* path exposed by require("path").

After that, create two variable below your variable `server_express`.
The first variable name server use http to create server with like argument application
of you express_server.
The second variable is`io` that listens to your http server.

Now you can remove print("Hello World !") and server.start and replace by server.listen with
your port like parameter.

If you don't have error in your terminal, and you have your browser on your HTML page, let's go to the next step !

#### Resources :
- [Variable Typescript](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
- [Server Socket.IO](https://socket.io/get-started/chat)
- [Link HTML](https://www.techiediaries.com/express-sendfile-serve-static-files/)
- [Http_Server](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

## Step 03 - Set Connection

To every connection of a user, we will send a message to our shell with the help of console.log().

Create an event `connection` with socket like parameters. Inside you must print `New User`.

uncomment this line `express_server.app.use(express.static(path.join(__dirname, 'front'));`
to listen the file chat.ts and connect front and backend.
Like that you can emit and receive socket between them.

If you open and close your browser page you must have the message on your terminal.

#### Resources :
- [Introduction Socket.IO](https://socket.io/docs/v4/index.html)
- [Socket.IO](https://socket.io/)

## Step 04 - Transmission Data

Now, you have established connection !

Now, go to the file `src/front/chat.ts` and complete the Class `Chat`.
For that, you must create a function emit_data with for parameter a string.
Inside you must emit socket with parameter `data` and your message.
Now, in your index.ts you must get information with your event `data' and the message.
* Tips: read the resource `Server Socket` and how receive your socket after emit it.

Start with the famous 'Hello World' that you will display in your shell.

#### Resources :
- [Class](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Base Print](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Emit Socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)

## Step 05 - Get Browser Data

Now that we will get the data, we will send it from our server in index.ts.

The objective of this step is to know when a message is sent from the web page
and to add its messages to our div.

It is time to get information on your input.

First step: create three const variable:

* form_data: get element form by id on your html page.
* input_data: get element input by id on your html page.

Now you must listen event submit on your input.
if the button is submitted you must get data of your data_input add
call your function emit_data to send your message to your server.
* Tips: to get value of your data_input cast your variable with `HTMLInputElement`.

Go to your console on your shell and watch if you receive the message when you
click on the button `Send`.

#### Resources :
- [Socket listener](https://socket.io/docs/v4/index.html)
- [Cast Variable](https://www.typescripttutorial.net/typescript-tutorial/type-casting/)

## Step 06 - Print Data in Your Browser Console

Having our message on your shell is great but receive your message in your browser console is better.

Now add a print to console in your last event in chat.ts and change your socket.emit
of your file index.ts for send socket to all clients in the current namespace except the sender.

Now, if you submit message and look your console browser you must see your message.
#### Resources :
- [Socket Client](https://socket.io/docs/v4/client-socket-instance/)
- [Type of emit Socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)


## Step 07 - Set Connection Of Your Client

With this step, you will send a message to all the user on the page HTML each time there is a connection or disconnection.

For this end, we will create a function that add contents with the help of a query on our HTML page.
You have to take in consideration the message that your server display to sent it to your front.

To test your code, we will open two pages of your browser with the url : http://localhost:8080/

Throughout the connection, you have to print "Connection" and "Disconnexion" when you leave the page.

#### Resources :

- [Emit socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)
- [Request HTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)

## Step 08 - Print Data in your Browser Html Page

Create a function that sent the content of our input on our HTML page.


For this, we will create a function `append_data` on your class Chat.

First step, create const variable:
* html_page: get element by id of your `div`, the name of this id is `messages'.

Your second step is in your function `append_data`:
* Create variable `add_element` like element  `div`.
* The attribute the value of this variable to the message of your parameter.
* Append this variable on your variable `html_page`.

Finally, call this function in the function `emit_data`.

If you send a message, you must see in your HTML page !!!!!
Congratulation !

#### Resources :

- [Release a socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)
- [Request HTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
- [Socket Client](https://socket.io/docs/v4/client-socket-instance/)

## Step 09 - Set username

Create a variable `my_name` that retrieves the names of users through a prompt.

After that, print `New user + name` with username, when a user connects to the page.

#### Resources :
[Set Name Variable](https://www.dummies.com/web-design-development/javascript/how-to-prompt-the-user-for-input-in-javascript/)

## Step 10 - Message Management

Emit event `new-user` with `my_name` like parameter in chat.ts to prevent the arrival
of a new user to the server.
Receive message in your server add name in array variable `username` and
print in your console `new user` with her name.

In your chat.ts add the name of your client before the message.
You must change the print value of when you add your div.

When you log in, you have `New User` + my_name and` name: message` with each message sent.

Congratulation you have a chat online !

#### Resources :

## Bonus

* Set connection and disconnect.
* Create rooms that allow you to send a message to every user that are in the same room as you.
* Amelioration of your Front with React.
* Authentication of the user with socket.
* Add a database to stock the message et refresh when there is a connexion.

#### Resources :
- [React](https://reactjs.org/)
- [Room Socket](https://socket.io/docs/v3/rooms/index.html)
- [Authentication Socket](https://socket.io/docs/v3/middlewares/)