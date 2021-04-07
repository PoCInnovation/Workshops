# Workshop 9 - Event Calendar with Svelte

✔ Learn Svelte basics functionalities

✔ Understand Svelte advantages

✔ Start a simple Svelte project

✔ Deploy a Svelte project

## Step 0 - Initialization

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md)

> :bulb: May you should take a look at [Svelte tutorial](https://svelte.dev/tutorial/basics) during this workshop.

## Step 1 - Time for Event

To begin with, we will learn how create a simple component and display it in our page.

Create a directory `components` which will contain a file named `Event.svelte`.

This component must be a simple `div` which contains the following props :
  - an `id`
  - a `title`
  - a `description`
  - a `starting date`
  - an `end Date`

> :bulb: You can export these variables as type with a [script module](https://stackoverflow.com/questions/64064506/export-typescript-type-in-svelte-file) to define your properties.

Display your component's props with a cool [style](https://developer.mozilla.org/en-US/docs/Web/CSS).

> :bulb: Maybe you can create an array with all months and use it to display month properly, you can also do it for days.

Create two events in your `App.svelte` and display it well.

##### :bulb: Resources

- [Import component in Svelte](https://svelte.dev/tutorial/nested-components)
- [Properties with Svelte](https://svelte.dev/tutorial/declaring-props)
- [Svelte' style](https://svelte.dev/tutorial/styling)
- [For loop in Svelte](https://medium.com/@willjohnson.io/how-to-loop-through-a-list-of-data-in-svelte-baaaaf397ec4)

## Step 2 - Beach umbrella

You got events, that's cool but isn't sad ? Your application has no top bar !

Create a new component named `TopBar` that has a `title`.

Your topBar must be `fixed` at the top of your page and display the title of your application well formatted.

> :bulb: Fixed property can help you to fix your bar 

> Don't forget to stylized your component.

## Step 3 - Pop forms

It's time to add more events !

Create a component `Button` which open a `Form` component in the center of your page.

Your `Button` must store a boolean to store the state of your form (open or close). You must also add two functions to control the state of the `Form` component.

You must display another `Button` to close the page when she's open.

> :bulb: Take a look about the [on:submit property](https://svelte.dev/repl/8eb540552faa4651a398b182fa5cdd48?version=3.24.1)

## Step 4 - Send forms

Add fields to your `Form` component to add new events.

You must add the following fields :
  - event name
  - description
  - start date
  - end date

> :bulb: [input](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input) tag will be useful.

A `button` must appear to cancel the form and another one to submit it. It should add an event to your page.

> :bulb: You should use a [store](https://svelte.dev/tutorial/writable-stores) to synchronize your components.

##### Resources

- [Store API](https://svelte.dev/docs#svelte_store)


## Step 5 - Deploy your app

Congratulation ! You made your first Svelte application.

It's time to easily deploy it !

Create a simple [Dockerfile](https://docs.docker.com/engine/reference/builder/) to deploy your app with a simple image.

It should be possible to deploy you app with those commands :

```
docker build -t workshop-poc/svelte:v1 .
docker run -p 5000:5000 workshop-poc/svelte:v1
```

> :bulb: [Install](https://github.com/PoCInnovation/Workshops/blob/master/software/4.Docker/SETUP.md) docker.

## Bonus

Check these bonuses to go further

##### UI Libraries

Upgrade the style of your project with an [ui library](https://madewithsvelte.com/ui-library).

Play with pre-made components.

##### User management

Add a login pages to handle multiple users in your application.

#### Dark theme

Create a dark theme for your application.

## Go further

- [Cool Svelte projects](https://madewithsvelte.com/)
- [6 reasons to use Svelte](https://betterprogramming.pub/6-reasons-why-you-should-consider-svelte-for-your-next-project-45b32c92e229)
- [Svelte vs React](https://www.twilio.com/blog/react-svelte-comparing-basics)
- [Switch from React to Svelte](https://blog.logrocket.com/should-you-switch-from-react-to-svelte/)
- [Svelte API](https://svelte.dev/docs#Before_we_begin)

## Authors

- [Tom Chauveau](https://github.com/TomChv).