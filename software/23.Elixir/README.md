# Workshop 23 - Build a Chat service using Elixir and Phoenix

In this Workshop, you will learn:
 - The basics of [Elixir](https://elixir-lang.org/)
 - How to create a simple web app using [Phoenix](https://www.phoenixframework.org/)
 - Understand how to build simple [live views](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html)

## Step 0 - Setup

All the required information to start this workshop can be found in [SETUP.md](./SETUP.md)

## Step 1 - Once upon a time...

there was a little developper (let's call him Little Timmy) who wanted to communicate with his friends.
Rather than using Discord, or some social media, or even IRC, this developper wanted to build his chat app himself...
Of course, Little Timmy looked on Ycmbinator what was the hot JS framework these days, but scrolling through HackerNews,
Little Timmy saw an article about a new way of doing distributed web apps, and thought he could maybe give it a try.
Let's help him build the chat app of his dreams ! :)~

### Understanding Client-Side Rendering vs Server-Side Rendering


Server-side rendering (SSR) is **an application's ability to convert HTML files on the server into a fully rendered HTML page for the client**. The web browser submits a request for information from the server, which instantly responds by sending a fully rendered page to the client.

On the other hand, with a client-side rendering solution, you redirect the request to a single HTML file and the server will deliver it without any content (or with a loading screen) until you fetch all the JavaScript and let the browser compile everything before rendering the content.

In short, Server-Side Rendering is faster, and more optimized but you serve **static** content, which means you have no interactions with the user. If your user receives a message, he has to reload the whole page, to see the message.

Thankfully using Elixir's [Live View's](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html), there is a way to have the best of both worlds !

## Step 2 -- Building your app

Once everything is installed, we can build our first application.
To bootstrap your project, you can type the following command: 

```bash
mix archive.install hex phx_new # Type 'Y' twice

mix phx.new irc_chat --module IrcChat --no-ecto --no-gettext --no-mailer --verbose # type 'Y' once
```

You should get the following output:
```bash
...

We are almost there! The following steps are missing:

    $ cd irc_chat

Start your Phoenix app with:

    $ mix phx.server

You can also run your app inside IEx (Interactive Elixir) as:

    $ iex -S mix phx.server

```

Try running the app, and test if everything works. You should have a welcome page on `http://localhost:4000` if everything is ok.

Once we know all is working, we will need models to handle messages, and users, go to the `ird_chat` directory and type the following commands:
```bash
mix phx.gen.channel Room # Type 'Y' once
```

You should have the following output:
```bash
* creating lib/irc_chat_web/channels/room_channel.ex
* creating test/irc_chat_web/channels/room_channel_test.exs

The default socket handler - IrcChatWeb.UserSocket - was not found.

Do you want to create it? [Yn] y
* creating lib/irc_chat_web/channels/user_socket.ex
* creating assets/js/user_socket.js

Add the socket handler to your `lib/irc_chat_web/endpoint.ex`, for example:

    socket "/socket", IrcChatWeb.UserSocket,
      websocket: true,
      longpoll: false

For the front-end integration, you need to import the `user_socket.js`
in your `assets/js/app.js` file:

    import "./user_socket.js"
```

The `room_channel.ex` file handles receiving/sending messages and the `room_channel_test.exs` tests basic interaction with the channel. 
The last two lines prompt us to import `user_socket.js` in our `app.js` file, let's do it:

```diff
// We import the CSS which is extracted to its own file by esbuild.
// Remove this line if you add a your own CSS build pipeline (e.g postcss).
import "../css/app.css"

// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
-// import "./user_socket.js"
+ import "./user_socket.js"
```

We are also prompted to update `endpoint.ex`, to implement our channel. 
The file is stored in `lib/irc_chat_web/endpoint.ex`.

A `socket /live` statemtent should at line 13, you can put your socket justunder this one.

```elixir
defmodule IrcChatWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :irc_chat

  # The session will be stored in the cookie and signed,
  # this means its contents can be read but not tampered with.
  # Set :encryption_salt if you would also like to encrypt it.
  @session_options [
    store: :cookie,
    key: "_irc_chat_key",
    signing_salt: "1jRoL3v2"
  ]

  socket "/live", Phoenix.LiveView.Socket, websocket: [connect_info: [session: @session_options]]
  socket "/socket", IrcChatWeb.UserSocket, websocket: true, longpoll: false

...
```

## Step 3 -- Build the Socket Handler

Next, we will need to create the piece of code to handle our socket. You can create a new file in `/lib/irc_chat_web`. It will define the `UserSocket` module, so I would advise you to name it `user_socket.ex`.

Socket params are passed from the client and can be used to verify and authenticate a user. 
You can find some apt documentation [here](https://hexdocs.pm/phoenix/Phoenix.Socket.html).

> Dont forget to add a `channel` for your chat room ! 
> (Google is your friend if you don't know what that means)

## Step 4 -- Add a chat form to the front-end
Phoenix bundles [Miligram CSS](https://milligram.io/grids.html) by default, so you can use this to build your form ! 
To handle front-end developpement, Phoenix (Elixir's Web Framework) uses a [Templating engine](https://www.educative.io/edpresso/what-are-template-engines). 

Here is what I added to my template file to have a functionnal form:
```html
<ul id="msg-list" style="list-style: none; min-height:200px;">
</ul>

<div class="row">
  <div class="col-xs-3" style="width: 20%; margin-left: 0;">
    <input type="text" id="name" class="form-control" placeholder="Your Name" style="border: 1px black solid; font-size: 1.3em;" autofocus>
  </div>
  <div class="col-xs-9" style="width: 100%; margin-left: 1%; ">
    <input type="text" id="msg" class="form-control" placeholder="Your Message" style="border: 1px black solid; font-size: 1.3em;">
  </div>
</div>
```

This should be added in a file finishing by `.eex`.
To know what it represents, this should be added in a specific flle: `/lib/irc_chat_web/templates/page/index.html.eex`

Try adding your own form to your template file, and make it prettier if you feel like it...
After that, you will need to update your `lib/irc_chat_web/templates/layout/app.html.eex` and update the `<header>` tags to handle the newly added code.
