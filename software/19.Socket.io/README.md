# Workshop 19 - Chat with Socket.IO

✔ Understand the sockets

## Step 0 : Setup

Any information about the setting of this workshop are available in [SETUP.md](./SETUP.md).

Be careful to finish every step before moving one to the next thing.

A cheatsheet based on Typescript is available [here](https://github.com/PoCInnovation/Workshops/blob/master/software/8.Typescript/HELP.md).

[What's a socket ?](https://socket.io/docs/v4/index.html)

## Step 01 :  First step, Hello World !

If the installation has been managed correctly, you can run your server with
```bash
 npm run dev
```

If you go on your browser at http://localhost:8080/
you should see this on the screen :

```
Hello World !
```
The server launch and don't need to be launch again with nodemon.
The script in your package.json allow to take account of modifications
of your code to launch the server by itself.

## Step 02 :

Your server work with express, you can find it in
src/index.ts.
You need to change this file to allow express and socket.io to use it at the same time.
That will allow you to issue and receive data on your server.

Once the server is set, we will determine the path of our html page on our route '/' that you can find in router/router.ts.

To every connection or disconnection of a user, we will send a message to our shell with the help of console.log().

#### Ressources :
- [Server Socket.IO](https://socket.io/get-started/chat)
- [Introduction Socket.IO](https://socket.io/docs/v4/index.html)
- [Socket.IO](https://socket.io/)
- [Link HTML](https://www.techiediaries.com/express-sendfile-serve-static-files/)

## Step 03 :

Creat a class in the file Front/chat.ts that will allow us to receive and send messages in the form of socket to your server.
Star with the famous 'Hello World' that you will display in your shell.

#### Ressources :
- [Class](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Base Affichage](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)

## Step 04 :

It is time to get information on your input.

For that you need to create a function that achieve a query on the id of your "input" once this one is submit. 

Once you get the message, you need to get the message of your server to print it on your shell.

#### Ressources :
- [Socket listener](https://socket.io/docs/v4/index.html)

## Step 05 :

Having our message on your shell is great but receive your message in your browser console is better.

Our message from input are, for now, send to our server; We need to aks it to retransmit it with the aim of print it in the browser console.

Creat a function who get back the message nearby the server to print it in the browser console.
#### Ressources :
- [Socket Client](https://socket.io/docs/v4/client-socket-instance/)

## Step 06 :

With this step, you will send a message to all the user on the page HTML each time there is a connection or disconnection.

For this end, we will creat a function that add contents with the help of a query on our HTML page.
You have to take in consideration the message that your server display to sent it to your front.

To test your code, we will open two pages of your browser with the url : http://localhost:8080/

Throughout the connection, you have to print "Connection" and "Disconnexion" when you leave the page.

#### Ressources :

- [Emettre une socket](https://socket.io/docs/v3/emit-cheatsheet/index.html)
- [Requête HTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)

## Step 07 :

Creat a function that sent the content of our input on our HTML page.


For this, we will create a function that achieve a query on our HTML page to add it the message of the input.

#### Ressources :

- [Release a socket] (https://socket.io/docs/v3/emit-cheatsheet/index.html)
- [Request HTML] (https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
- [Socket Client](https://socket.io/docs/v4/client-socket-instance/)
## Step 08 :

It is time to identify the message more clearly. 
Creat an id for every user to allow in order to receive messages of users with their name or a determinant.

Exemple:

You: "message_sent"
Tony: "message_receive"

## Step 09 :

For this last step we need tro add the date and the hour of when the message was sent.

## Bonus

* Creat rooms that allow you to send a message to every user that are in the same room as you.
* Amelioration of your Front with React.
* Authentification of the user with socket.
* Add a data base to stock the message et refresh when there is a connexion.

#### Ressources:
- [React](https://reactjs.org/)
- [Room Socket](https://socket.io/docs/v3/rooms/index.html)
- [Authentifaciton Socket](https://socket.io/docs/v3/middlewares/)