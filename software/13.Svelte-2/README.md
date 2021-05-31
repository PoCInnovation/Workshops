# Workshop 12: Epytodo with Svelte

✔ Learn to use Svelte components

✔ Learn how to Route a front application with Svelte

✔ Learn to send requests and use responses with axios

✔ Understand how front-end and back-end interact with each other
<br/><br/>
## Step 0 - Initialization
All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).


At any time, if you feel lost with Svelte, you can man https://svelte.dev/tutorial
<br/><br/>


## Step 1- User information

### 1- Creating the component

Create a file in the `src/components` folder, named `register.svelte`

The component should have 1 prop:

- token


It should use text input components to get user inputs for the following fields:
- firstname
- name
- email
- password
- password confirmation

You must also create a register button. Don't worry for it's behavior, we'll take care of it later.



Of course, you could create all from scratch, but we are here to use library components. Time for a little bit of shopping! (Would you like to try a modal component?)<br>
&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;&darr;
<br>
https://madewithsvelte.com/ui-library
<br/>
&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;&uarr;


This will also be helpful
https://svelte.dev/tutorial/text-inputs


## Step 2 - Registration

Now that we have a basic component, let's add some interaction.
The register button should activate a function that will use axios to send a POST request on "localhost:8080/register", with the user information:<br/>

```
{
    "firstname": firstname,
    "name": name,
    "email": email,
    "password": password
}
```

You should get a token as a response. Store in in the `token` variable, you'll be able to use it to authentify.

**/!\ ** axios works in an asynchronous way, so the key words async / await will become very handy

https://github.com/axios/axios



> If you want to go further, you could apply some [jwt good practices](https://blog.logrocket.com/jwt-authentication-best-practices/), this way to store the token is actually not really safe...

While you're there, create a another component `src/components/login.svelte` that will basically have the same behavior as `register`, but it will only need to send 2 fields:
```
{
    "email": email,
    "password": password
}
```

## Step 3 - Routing

Create a component `src/components/connection.svelte` that will serve as the connection page for our website.

It should have 2 buttons: register, and login, that will namely allow us to input registration and login information.<br/>

Also create a empty component named `src/components/todolist.svelte`

Now let's create some routing:
In your `App.svelte`, add the following line:<br/>
```
import { Router, Route } from 'svelte-routing';
```
Create a router with 2 routes:<br/>
1st one  with `"/"` as path and will use your `<Connection>` component
2st one  with `"/home"` as path and will us your `<todolist>` component


Now let's modify your Login and Register
Add the following import:
```
import { navigate } from 'svelte-routing';
```
Upon receiving the token, Login and Register should navigate to `/home`

## Step 4 - Todo list

Show us what you can do! Use what you have learned to fetch and send new tasks to and from the api. You can be creative and try to come up with some innovative design ideas.

Use the api documentation <br/>
https://documenter.getpostman.com/view/14600925/TzY1gbb4


If you don't know what you could do, try the following:

- Create a todo element component, with the required fields
- Create a list element, that will update it's size and display all the todo elements
- Create an add button, and a delete button

And so on...




Credits:
- [Amoz Pay](https://github.com/amozpay)
- [Baptiste Barbotin](https://github.com/barbo69)
