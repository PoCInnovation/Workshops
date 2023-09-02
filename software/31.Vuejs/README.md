# Workshop Vue.js - Game Shop App

✔️ Create an app from scratch with [Vue](https://vuejs.org/)

✔️ Learn the basics of Vue 3 with [TypeScript](https://www.typescriptlang.org/)

✔️ Use the [Element Plus](https://element.eleme.io/#/en-US) library to make a pleasant UI


## Introduction

In this workshop, you will create a game shop website from scratch using [Vue 3](https://vuejs.org/).

Vue.js is a popular JavaScript framework for building user interfaces and [single-page applications](https://developer.mozilla.org/en-US/docs/Glossary/SPA).

In this workshop, we are going to use [TypeScript](https://www.typescriptlang.org/) instead of JavaScript. TypeScript is basically a [superset of JavaScript](https://geekflare.com/typescript-vs-javascript/) that adds static typing, which helps catching errors and making the code more reliable.


## Step 0 - Setup

Please refer to the [SETUP.md](./SETUP.md) file.

## Step 1 - Write your first component ✍️

### 📑 **Description**:

Vue follows a component-based architecture. [Components](https://vuejs.org/guide/essentials/component-basics.html) are like building blocks for your app. They represent small and reusable parts of a web page (e.g. a form, a button etc). 

Components in Vue are called [Single File Components](https://vuejs.org/guide/introduction.html#single-file-components). A SFC file contains the component's script (JavaScript), template (HTML) and style (CSS).

```tsx
<script setup lang="ts">
...
</script>

<template>
...
</template>

<style>
...
</style>
```

An SFC file has a `.vue` extension.

Let's create your first component 🚀

### 📌 **Tasks**:

For your game shop app, we would like to have a component that displays the video game we are selling.

We are going to work in the `src/` folder. Create a SFC file called `ProductCard.vue` in the `src/components` folder.

> Delete all the files in `src/` except `App.vue` and `main.ts`. You can also remove all the content from `App.vue` to start from scratch.
> 
> Also, download the images of the `assets/` folder of this workshop's repository, and move them in `src/assets/`. You'll need it for later.

For the moment, let's just write the title of a video game in the `ProductCard` component. Then, import your component and call it in `App.vue`.

> The `App` is the main component of your app. It is the entrypoint of a Vue application.
>
> Here, `App` is the parent component to the child component `ProductCard`.

### ✔️ **Validation**:

If you've done this correctly, you should have a result similar to this one:

<details>
  <summary>✔️ Result preview</summary>
  <img src="https://github.com/PoCInnovation/Workshops/assets/44733132/9df8564a-652b-41e0-ab19-e108373205f3"/>
</details>

## Step 2 - Make your component dynamic 💥

### 📑 **Description**:

Imagine now that we have a counter that we want to increment each time we click on a button.

To achieve this, we have the following code:

```tsx
<script setup lang="ts">

const count = 0;
</script>

<template>
  <p>You selected {{ count }} items</p>
  <button @click="count += 1">
    Add to cart
  </button>
</template>
```

Try this code! (you can copy/paste it in `App.vue`)

When running your app, you should see something like this:

<img src="https://github.com/PoCInnovation/Workshops/assets/44733132/53996b8f-e2ea-4785-b46d-b7562e136b9b"/>

If you click on the button, you will see that the counter... doesn't increment. 😶 

Why is that?\
It's because `count` is not reactive. That means we can't update its value.

This is where the [`ref()`](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#ref) and [`reactive()`](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive) make their entrance. These are functions that allows you to declare reactive variables.

This way, Vue can update your user interface (HTML) according to your data (TypeScript). 

In other words, Vue makes your application reactive, dynamic 💥

### 📌 **Tasks**:

Make `count` reactive, so that you can increment it every time you click the button.

### ✔️ **Validation**:

<details>
  <summary>Result preview</summary>
  <img src="https://github.com/PoCInnovation/Workshops/assets/44733132/139f2192-4864-4dfd-88cb-2dfec77cd52e"/>
</details>

## Step 3 - Add style to your component with Element Plus ✨

### 📑 **Description**:

Let's go back to the `ProductCard` component, and add style to it with the [Element Plus](https://element-plus.org/en-US/) library. This library provides a collection of ready-to-use UI elements (such as buttons, forms etc.) for your Vue projects.

### 📌 **Tasks**:

The `ProductCard` component should display the video game we want to sell, including:
- A cover
- A price
- A score

We also should have a button that would allow the customer to add the game to the cart.

In order to do this, take a look at the [`Card`](https://element-plus.org/en-US/component/card.html) , [`Container`](https://element-plus.org/en-US/component/container.html#container) and [`Button`](https://element-plus.org/en-US/component/button.html) components.

When displaying the game's cover, you will want to do it dynamically, such as if you change the cover, it automatically updates on the app.

To achieve this kind of behavior, you can bind your data to a HTML element's attributes (for example `href` for the `<a>` HTML element), with the [`v-bind`](https://vuejs.org/api/built-in-directives.html#v-bind) directive.

> A directive in Vue is like a special instruction, that you can add to HTML elements.

### ✔️ **Validation**:

<details>
  <summary>Result preview</summary>
  <img src="https://github.com/PoCInnovation/Workshops/assets/44733132/80cd7399-4962-4eec-bd03-7a4c6533f923)"/>
</details>

## Step 4 - Display multiple games 🎮

### 📑 **Description**:

At this moment, your app only displays one game on its store front. However, a real shop would have more than one game to offer. 🤔

What if you like to render a list of games, like this:
```tsx
const gamesList = reactive([
  { id: 270, name: 'Animal Crossing: New Horizons', price: 45, score: 4.1, image: './src/assets/animal-crossing.jpg' },
  { id: 271, name: 'The Legend of Zelda: Breath of the wild', price: 50, score: 4.1, image: './src/assets/botw.jpg' },
  { id: 272, name: 'Mario Kart 8 Deluxe', price: 45, score: 4.1, image: './src/assets/mario-kart.jpg' },
  { id: 273, name: 'Final Fantasy 7 Remake', price: 50, score: 4.1, image: './src/assets/ff7.jpg' },
  { id: 274, name: 'Spiderman PS4', price: 40, score: 4.1, image: './src/assets/spiderman.jpg' }
])
```

You would copy-paste your `ProductCard` component five times, only to change the displayed data.

### 📌 **Tasks**:

It's time for you to make your component generic, so that it can display any game. 🎮

To do so, pass the data that you want to your child component by using [Props](https://vuejs.org/guide/components/props.html).

Then, take a look at the [`v-for`](https://vuejs.org/guide/essentials/list.html) directive, to know how to render a list of items.

> Don't forget the [key attribute](https://vuejs.org/api/built-in-special-attributes.html#key) when using this directive. ⚠️
>
> You can also check out the [`Space`](https://element-plus.org/en-US/component/space.html#basic-usage) component. It's a secret tool that will help us ~~later~~. 👍

### ✔️ **Validation**:

<details>
  <summary>Result preview</summary>
  <img src="https://github.com/PoCInnovation/Workshops/assets/44733132/70819432-342f-4130-a036-26781b58493a"/>
</details>

## Step 5 - Add games to your cart 🛒

### 📑 **Description**:

You did a great job so far ✨

There's only one thing missing in your app now... You aren't able to add yet games to your cart. 

### 📌 **Tasks**:

Like for any shopping website, you want to add a game to the cart by clicking on the *'Add to the cart'* button.
In this case, the app would be *listening* to the *click* event, so that it adds the game to the cart, when it detects the button click.

To listen to a specific event, we will use the [`v-on`](https://vuejs.org/guide/essentials/event-handling.html) directive.

We could use the `v-on` directive to listen to the click event on the *Add to the cart* button, right?
That would work, if the whole application was written in `App.vue`. 

However, we have the parent component `App` which calls the child component `ProductCard`.

This time, instead of passing data to the child component, we would like to communicate to the parent component `App` to tell it when the user clicks on the *'Add to the cart'* button. SO that we add the selected game in the cart.

You can make this happen by [emitting events](https://vuejs.org/guide/components/events.html#emitting-and-listening-to-events).

Create a `cart` variable in `src/App.vue`, that will contain the games you will want to buy.

By emitting a specific event in `ProductCard` and listening to it in `App`, make sure to add to the `cart` the game you chose to buy.

### ✔️ **Validation**:

<details>
  <summary>Result preview</summary>
  <img src="https://github.com/PoCInnovation/Workshops/assets/44733132/35420baa-18be-4d8c-8e79-730ef2c6ebec"/>
  <p>In this example, we added Animal Crossing, Breath of the Wild and Mario Kart to the cart.</p>
</details>

## Bonus

Congratulations, you have now a nice shopping app where you can buy all your favorite games 🎮

Here are some ideas to go further:

- Add a comment section, for each game 💬 (say hello to [forms](https://vuejs.org/guide/essentials/forms.html#form-input-bindings))
- Add routes to your app with [Vue Router](https://router.vuejs.org/)
- Use a database to store the games (like [MongoDB](https://www.mongodb.com/), [PostgreSQL](https://www.postgresql.org/)...)
- Make use of [Nuxt](https://nuxt.com/) to access other Vue tools and features
- Have persistent data between components with a [Pinia](https://pinia.vuejs.org/) store 🍍

## Authors

| [<img src="https://avatars.githubusercontent.com/u/44733132?s=400&u=9ed71bff2fd468858fd8332dcff8b07992310329&v=4" width=85><br><sub>Sephorah</sub>](https://github.com/sephorah) | 
|:------------------------------------------------------------------------------------------------------------:|
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

> 🚀 Follow us on our different social networks, and put a star 🌟 on `PoC's` repositories.
