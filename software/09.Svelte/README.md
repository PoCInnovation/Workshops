# Workshop 9 - Event Calendar with Svelte

✔ Learn Svelte's basic functionalities

✔ Understand Svelte's advantages

✔ Start a simple Svelte project

✔ Deploy a Svelte project

## Step 0 - Initialization

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).

> :bulb: You may want to take a look at the [Svelte tutorial](https://svelte.dev/tutorial/basics) for this workshop.

## Step 1 - Time for Event

To begin with, we will learn how to create a simple component and display it in our page.

Create a `components` directory in `src/` which will contain a file named `Event.svelte`.

This component must be a simple `div` which contains the following props:
  - `id` as a `number`
  - `title` as a `string`
  - `description` as a `string`
  - `startingDate` as a `Date`
  - `endDate` as a `Date`

> :bulb: You can export these variables as types with a [script module](https://stackoverflow.com/questions/64064506/export-typescript-type-in-svelte-file) to define your properties.

Display your component's props with a cool [style](https://developer.mozilla.org/en-US/docs/Web/CSS).

> :bulb: You may want to create an array with every month of the year displayed properly. The same applies for the days of the week.

Create two events in your `App.svelte` and display them.

##### Resources

- [Import components in Svelte](https://svelte.dev/tutorial/nested-components)
- [Properties with Svelte](https://svelte.dev/tutorial/declaring-props)
- [Svelte's style](https://svelte.dev/tutorial/styling)
- [For loop in Svelte](https://medium.com/@willjohnson.io/how-to-loop-through-a-list-of-data-in-svelte-baaaaf397ec4)

## Step 2 - Beach umbrella

You've got events, that's cool! But your application has no top bar, isn't it sad? 😢

Create a new component named `TopBar` that has a `title`.

Your topBar must be `fixed` at the top of your page and display the title of your application.

> :bulb: The `fixed` property can help you achieve that.

> Don't forget to apply styles to your components.

## Step 3 - Pop forms

It's time to add more events !

Create a `Button` component which opens a `Form` component in the center of your page.

Your `Button` must store the state of your form (open or closed) as a boolean. You must also add two functions to control the state of the `Form` component.

You must display another `Button` to close the page when it's open.

> :bulb: Take a look at the [on:submit property](https://svelte.dev/repl/8eb540552faa4651a398b182fa5cdd48?version=3.24.1).

## Step 4 - Send forms

Add fields to your `Form` component to add new events.

You must add the following fields:
  - `event name`
  - `description`
  - `start date`
  - `end date`

> :bulb: The [input](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input) tag will be useful.

A `button` must appear to cancel the form and another one to submit it. It should add an event to your page.

> :bulb: You should use a [store](https://svelte.dev/tutorial/writable-stores) to synchronize your components.

##### Resources

- [Store API](https://svelte.dev/docs#svelte_store)

## Step 5 - Deploy your app

Congratulations! You made your first Svelte application.

It's time to deploy it easily!

Create a simple [Dockerfile](https://docs.docker.com/engine/reference/builder/) to deploy your app with a simple image.

It should be possible to deploy your app using those commands:

```
docker build -t workshop-poc/svelte:v1 .
docker run -p 5000:5000 workshop-poc/svelte:v1
```

> :bulb: [Install](https://github.com/PoCInnovation/Workshops/blob/master/software/4.Docker/SETUP.md) docker.

## Bonus

To go further, consider implementing the following bonuses:

- Improve styling with an [ui library](https://madewithsvelte.com/ui-library).
- Add a login page to handle multiple users.
- Implement Dark Theme support.

## Further reading

- [Cool Svelte projects](https://madewithsvelte.com/)
- [6 reasons to use Svelte](https://betterprogramming.pub/6-reasons-why-you-should-consider-svelte-for-your-next-project-45b32c92e229)
- [Svelte vs React](https://www.twilio.com/blog/react-svelte-comparing-basics)
- [Switch from React to Svelte](https://blog.logrocket.com/should-you-switch-from-react-to-svelte/)
- [Svelte API](https://svelte.dev/docs#Before_we_begin)

## Authors

- [Tom Chauveau](https://github.com/TomChv)

## Organization

- [📒 Linkedin](https://www.linkedin.com/company/pocinnovation/mycompany/)
- [📷 Instagram](https://www.instagram.com/pocinnovation/)
- [🖱️ Website](https://www.poc-innovation.fr/)
- [🌐 Discord](https://discord.gg/Yqq2ADGDS7)

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
