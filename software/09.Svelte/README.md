# Workshop 9 - Event Calendar with Svelte

✔ Learn Svelte's basic functionalities

✔ Understand Svelte's advantages

✔ Start a simple Svelte project

✔ Deploy a Svelte project

## Step 0 - Initialization

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).

> :bulb: You may want to take a look at the Svelte [tutorial](https://svelte.dev/tutorial/basics) and [documentation](https://svelte.dev/docs) for this workshop.

## Step 1 - Your first component

To begin with, we will learn how to create a simple component and display it in our page.

Create a `components` directory in `src/` which will contain a file named `TopBar.svelte`.

Inside it, you'll create a basic top bar that will be `fixed` at the top of your page and display the title of your application.

> Display your component with a cool style :rocket:  
> For this, you can use CSS or a UI library like [Svelte Materialify](https://svelte-materialify.vercel.app/)

Then, you can call it inside your `App.svelte` to display it :star_struck:

### :book: Resources
- [Import components in Svelte](https://svelte.dev/tutorial/nested-components)
- [Svelte's style](https://svelte.dev/tutorial/styling)

## Step 2 - Time for Events

You've created your first Svelte components, that's cool! But your application is a bit empty, isn't it sad? 😢

Create file named `Event.svelte` in `src/components`, it will contain a component to display an event with the following props:
  - `id` as a `number`
  - `title` as a `string`
  - `description` as a `string`
  - `startingDate` as a `Date`
  - `endDate` as a `Date`

> :bulb: You can export these variables as types with a [script module](https://stackoverflow.com/questions/64064506/export-typescript-type-in-svelte-file) to define your properties.

> :bulb: You may want to create an array with every month of the year displayed properly. The same applies for the days of the week.

Then, create two events in your `App.svelte` and display them.

> Don't forget to apply styles to your components 😉

### :book: Resources
- [Properties with Svelte](https://svelte.dev/tutorial/declaring-props)


## Step 3 - Interaction

It's time to add more events :rocket:

Create a `Button` component which opens a `Form` component in the center of your page.

Your `Button` must store the state of your form (open or closed) as a boolean. You must also add two functions to control the state of the `Form` component.

You have to display another `Button` to close the page when it's open.

## Step 4 - Send your form

Add fields to your `Form` component to add new events.

You must add the following fields:
  - `event name`
  - `description`
  - `start date`
  - `end date`

> :bulb: The [input](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input) tag will be useful.

> :bulb: Take a look at the [on:submit property](https://svelte.dev/repl/8eb540552faa4651a398b182fa5cdd48?version=3.49.0).

A `button` must appear to cancel the form and another one to submit it. It should add an event to your page.

> :bulb: You should use a [store](https://svelte.dev/tutorial/writable-stores) to synchronize your components.

##### Resources

- [Store API](https://svelte.dev/docs#svelte_store)
- [For loop in Svelte](https://medium.com/@willjohnson.io/how-to-loop-through-a-list-of-data-in-svelte-baaaaf397ec4)

## Bonus

Congratulations! You made your first Svelte application.
To go further, consider implementing the following bonuses:

- Add a login form to handle multiple users.
- Create multiple pages using [SvelteKit](https://kit.svelte.dev/)
- Implement Dark Theme support.

## Further reading

- [Cool Svelte projects](https://madewithsvelte.com/)
- [6 reasons to use Svelte](https://betterprogramming.pub/6-reasons-why-you-should-consider-svelte-for-your-next-project-45b32c92e229)
- [Svelte vs React](https://www.twilio.com/blog/react-svelte-comparing-basics)
- [Switch from React to Svelte](https://blog.logrocket.com/should-you-switch-from-react-to-svelte/)
- [Svelte API](https://svelte.dev/docs#Before_we_begin)

## Authors

| [<img src="https://github.com/TomChv.png?size=85" width=85><br><sub>Tom Chauveau</sub>](https://github.com/TomChv)
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

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
