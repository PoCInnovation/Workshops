# Workshop 19 - Chat with Socket.IO

### Learn Socket.IO by implementing your own online chat.
You will :
:heavy_check_mark: Learn Typescript fundamental
:heavy_check_mark: Work with socket and http servers
:heavy_check_mark: Understand sockets
:heavy_check_mark: Understand how transmits data

- [What's a socket ?](https://socket.io/docs/v4/index.html)

## Step 0 - Setup

All the required information to start this workshop can be found in [SETUP.md](./SETUP.md).

Be careful to finish every step before moving one to the next thing.

If you are new to Typescript, you should check our [Typescript cheatsheet](https://github.com/PoCInnovation/Workshops/blob/master/software/8.Typescript/HELP.md).

## Step 01 - Link your HTML page

Your first step is to modify the content of your '/' routes
in order to have your html page on your route.

In the file `src/router/router.ts`
- import [path](https://nodejs.org/docs/latest/api/path.html)
- replace `Hello World` by your HTML page's path define in `src/Front/index.html`.

If your reload your browser page, you must see input and button `Send`.

#### Resources :
- [Set path](https://www.codegrepper.com/code-examples/html/express+sendFile)

## Step 02 - Create Socket Server

Your server work with express, you can find it in src/index.ts.
You need to change this file to allow express and socket.io to use it at the same time.
That will allow you to issue and receive data on your server.

For your first step create many variables:
* socket exposed by require("socket.io").
* http exposed by require("http").
* path exposed by require("path").

Then, we will add the `socket server` to our `express`:
- Create a new server using `http` package with your old express `app` as arguments
- Create a new `io` server that listens to your HTTP server.
- Replace the `start` method of your server with `listen`
> :bulb: Your server must listen to port `8080`

If you don't have any errors in your terminal, and you have your browser on your HTML page, let's go to the next step!
#### Resources :
- [Variable Typescript](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
- [Server Socket.IO](https://socket.io/get-started/chat)
- [Link HTML](https://www.techiediaries.com/express-sendfile-serve-static-files/)
- [Http_Server](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

## Step 03 - Set Connection

To every connection of a user, we will send a message to our shell with the help of console.log().

* Create an event `connection` with socket like parameters.
* Inside you must print `New User`.
* Uncomment this line `express_server.app.use(express.static(path.join(__dirname, 'front'));`
to listen the file chat.ts and connect front and backend.
Like that you can emit and receive socket between them.

If you open and close your browser page you must have the message on your terminal.

#### Resources :
- [Introduction Socket.IO](https://socket.io/docs/v4/index.html)
- [Socket.IO](https://socket.io/)

## Step 04 - Transmission Data

You have established connection !

It's time to implement a method to send messages from your frontend to your backend.

Now, complete the Class `Chat` in `src/front/chat.ts`  :
- Create a method `emit_data` with a `message` of type `string` as parameter.
- Emit socket with your event named `data` and your `message`.
- In `index.ts` you must receive the information from the `data` event log the `message`.
- Call your `emit method` in `chat.ts` with `Hello World !` as message.

> :bulb: Take your time to read the documentation.

In your terminal you should have to display your `Hello World !`.

#### Resources :
- [Class](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Base Print](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Emit Socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)

## Step 05 - Get Browser Data

Now that we retrieved the data, we will send it from our server to our fronted.

The objective of this step is to know when the user presses the button on the html page.
At this point you will log the content of the input into your terminal.

It's time to get information from your input.

##### Retrieve html input components

In `chat.ts`, you will create two constants variables:
* form_data: get element form by id on your html page.
* input_data: get element input by id on your html page.

Second step:
* Listen to the event submit button.
* Create a `message` variable that gets the data from your input.
* Print content message with console.log().
* Call emit_data to sent `message`.
* Established input in Null.
* Tips: to get value of your data_input cast your variable with `HTMLInputElement`.

Go to your console on your shell and watch if you receive the message when you
click on the button `Send`.

#### Resources :
- [Socket listener](https://socket.io/docs/v4/index.html)
- [Cast Variable](https://www.typescripttutorial.net/typescript-tutorial/type-casting/)

## Step 06 - Print Data in Your Browser Console

Having our message on your shell is great but receive your message in your browser console is better.

In your server `index.ts` changed the sending of sockets.
Make sure that everyone can receive the message.

* Change your socket.emit of your file `index.ts`for send socket to all clients in the current namespace except the sender.

Now, if you submit message and look your console browser you must see your message.

#### Resources :
- [Socket Client](https://socket.io/docs/v4/client-socket-instance/)
- [Type of emit Socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)

## Step 07 - Print Data in your Browser Html Page

Now we will create a new method in our `Chat` class to add the content of our input into our div.
This will allow us to see the messages directly in our HTML page.

To do this, we will create a method `append_data` in our class `Chat`.
First, create a constant variable:
- `html_page`: get element by his id of you `div`, his id should be is `messages'.

Second, in your method `append_data`:
- Create a variable `add_element` that should create an element `div`.
- Display the message gave as parameter in this new div.
- Append the `div` to your variable `html_page`.

Finally, call this method in the `emit_data`.

If you send a message, you should see it in your HTML page !!!
Congratulation !

#### Resources
- [Release a socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)
- [Request HTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
- [Socket Client](https://socket.io/docs/v4/client-socket-instance/)

## Step 08 - Set username

We will now retrieve the name of each user when they connect.

we will:
* Create a `my_name` variable that retrieves a user's name through a prompt that says `What is your name?`.
* Just bellow, print `New user + name` with username, when a user connects to the page.

#### Resources :
[Set Name Variable](https://www.dummies.com/web-design-development/javascript/how-to-prompt-the-user-for-input-in-javascript/)

## Step 09 - Set Username

We are going to emit a socket triggered when a user connects with his name as parameter.<br>
This event will be sent to our server which will send back a socket to our frontend to display a connection message.

In `chat.ts`, we will:
- Create an event `new_user` with `my_name` as parameter.
- Create a listening socket named `user_connect` with a `string` as a parameter.
- Inside the socket, call `emit_data` with the string `Connect + name` where `name` is the parameter.

In the `index.ts` we will:
- Create a listening socket named `new_user` with a `string` as a parameter.
- Inside it, display in your terminal `New user + name` where `name` is the parameter.
- emit socket to all users with an `user-connect` event and `name` as parameters.

In `chat.ts`, add the name of your client before the message.
You must change the value of the print when you add a div.

When you log in, you should see `New User + your_name`.

## Step 10 - Manage Message

The final touch is to add the name of each user before the message is sent.

In `chat.ts`, add the name of the client before the message.
- Change the value of the display when you add the content of the input into your div.

:bulb: **Example**: `name: message`.

If you send messages on your HTML page you should see the username before the message.

Congratulation you have an online chat !

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

## Authors
- [Albert VALENTIN](https://github.com/OnsagerHe)

Made with :heart: by PoC.

## Organization

- [📒 Linkedin](https://www.linkedin.com/company/pocinnovation/mycompany/)
- [📷 Instagram](https://www.instagram.com/pocinnovation/)
- [🖱️ Website](https://www.poc-innovation.fr/)
- [🌐 Discord](https://discord.gg/Yqq2ADGDS7)

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
