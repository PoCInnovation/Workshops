# Workshop 12: Epytodo with Svelte

✔ Learn to use Svelte components

✔ Learn how to Route a front application with Svelte

✔ Learn to send requests and use responses with axios

✔ Understand how front-end and back-end interact with each other
<br/><br/>
## Step 0 - Initialization
All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).


At any time, if you feel lost with Svelte, you can man https://svelte.dev/tutorial
<br/>
<br/>


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



Of course, you could create all from scratch, but we are here to use library components. Time for a little bit of shopping!<br>
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



> If you want to go further, you could apply some [jwt good practices](https://blog.logrocket.com/jwt-authentication-best-practices/), this way to store the token is actually not really safe...

Credits: Amoz Pay & Baptiste Barbotin

