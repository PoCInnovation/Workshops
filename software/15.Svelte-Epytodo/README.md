# Workshop 15 - Epytodo with Svelte

✔ Learn to use Svelte components

✔ Learn how to Route a front application with Svelte

✔ Learn to send requests and use responses with axios

✔ Understand how frontend and backend interact together

## Step 0 - Setup

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).

At any time, if you feel lost with Svelte, you can go to the [tutorial](https://svelte.dev/tutorial) 

## Step 1 - User information

Create a file in the `src/components` folder, named `register.svelte`

The component should have 1 prop named `token`

It should use [text input components](https://svelte.dev/tutorial/text-inputs) to get user inputs for the following fields:
- firstname
- name
- email
- password
- password confirmation

You must also create a register button. Don't worry about its behavior, we'll take care of it later.

Of course, you could create all from scratch, but we are here to use [library components](https://madewithsvelte.com/ui-library). Time for a little bit of shopping! (Would you like to try a modal component?)<br>
&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;
<br>
https://madewithsvelte.com/ui-library
<br/>
&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;

## Step 2 - Registration

Now that we have a basic component, let's add some interaction.
The register button should trigger a function that will use [axios](https://www.npmjs.com/package/axios) to send a `POST` request on `localhost:8080/register`, with the user information:<br/>

```
{
    "firstname": firstname,
    "name": name,
    "email": email,
    "password": password
}
```

You should get a `token` as a response. Store it in the `token` variable, you'll be able to use it to authenticate.

⚠️ axios works in an asynchronous way, so the keyword `async / await` will become very handy


> If you want to go further, you could apply some [jwt good practices](https://blog.logrocket.com/jwt-authentication-best-practices/), this way to store the token is actually not really safe...

While you're there, create another component `src/components/login.svelte` that will basically have the same behavior as `register`, but it will only need to send 2 fields:
```
{
    "email": email,
    "password": password
}
```

## Step 3 - Routing

Create a component `src/components/connection.svelte` that will serve as the connection page for our website.

It should have 2 buttons: register, and login, that will namely allow us to input registration and login information.<br/>

Also create an empty component named `src/components/todolist.svelte`

Now let's create some routing:

In your `App.svelte`, add the following line:<br/>
```
import { Router, Route } from 'svelte-routing';
```
Create a router with 2 routes:<br/>
  -  one  with `/` as path and will use your `<Connection>` component 
  -  one  with `/home` as path and will us your `<todolist>` component


Now let's modify your `Login` and `Register` components.<br>
Add the following import:
```
import { navigate } from 'svelte-routing';
```
Upon receiving the token, `Login` and `Register` should redirect to `/home`

## Step 4 - Todo list

Show us what you can do! Use what you have learned to fetch and send new tasks to and from the API. You can be creative and try to come up with some innovative design ideas.

Use the [api documentation](https://documenter.getpostman.com/view/14600925/TzY1gbb4)

Here's some idea :

- Create a todo element component, with the required fields
- Create a list element, that will update it's size and display all the todo elements
- Create an add button, and a delete button

## To go further

- [Amazing things made in Svelte](https://madewithsvelte.com/)
- [Sapper, the server-side rendering framework](https://sapper.svelte.dev/)
- [Svelte official website](https://svelte.dev/)
- [Svelte performance comparison](https://blog.logrocket.com/should-you-use-svelte-in-production/)

## Authors

| [<img src="https://github.com/amozpay.png?size=85" width=85><br><sub>Amoz Pay</sub>](https://github.com/amozpay) | [<img src="https://github.com/barbo69.png?size=85" width=85><br><sub>Baptiste Barbotin</sub>](https://github.com/barbo69) 
| :---: | :---: |
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

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.

