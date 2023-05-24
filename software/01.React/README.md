# Workshop 1 - Kanban App in React

✔️ Learn the basics of [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)

✔️ Use the component library [Material UI](https://mui.com/) to quickly build a great UI

✔️ Have an overview of front end development

<br/>

## Step 0: Initialization

The goal of this workshop is to create a [Kanban-like](https://www.digite.com/kanban/what-is-kanban/) application using the React library in Typescript.

[React](https://github.com/facebook/react) is an open-source library created at Facebook to build User Interfaces. It is widely used because of the high performance it offers with its [Virtual DOM](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom), [reusable components](https://reactjs.org/docs/components-and-props.html) making it easy to build a complex UI step by step and the easier learning curve compared to other frameworks like [Angular](https://angular.io/).

As you go through this workshop you'll come up with a lot of files, and it's important to keep them organized.  
Here we're gonna use [a structure based on file types](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type), do your best to keep your project clean 😉

We're also going to use TypeScript, a superset of JavaScript to add static typing, which has some benefits such as early bug detection or improved IDE suggestions. Here is [an overview of the differences](https://geekflare.com/typescript-vs-javascript/) if you want to learn more about it.  

All the installation steps required to do the exercises are detailed in the [SETUP.md](./SETUP.md)

<br/>

## Step 1: Create your first component

[Components](https://reactjs.org/docs/components-and-props.html) are the core of React. They represent a single element in a web page, like a `text` box, a `button`, a `div` etc. All combined together, they create a fully working web page. These components are re-usable, they prevent you from code duplication.

You will learn how to [create components](https://www.w3schools.com/react/react_components.asp) right now in the first step!

> In this workshop, we recommend you to use `Functional Components`, instead of `Javascript classes`. [Here](https://djoech.medium.com/functional-vs-class-components-in-react-231e3fbd7108) is a little explanation of the differences.

> Delete all the files in `src/` excepted `index.tsx` and `App.tsx`, they won't be useful for this workshop.  
> You can also remove all the content in `App.tsx` to create your component from scratch 🚀

In `src/App.tsx`, create a component that will display the application title, which is just a string.
In Typescript, we must specify the type of the return value of the function: for all TSX React components, you can use `JSX.Element`.

```tsx
function Title(): JSX.Element {
    return (...)
}
```

Then in your app function, you should have this:

```tsx
function App(): JSX.Element {
    return <Title />;
}
```

<details>
  <summary>✔️ Result preview</summary>
  <br>
  <p>The background was added with simple CSS</p>
  <img src="https://user-images.githubusercontent.com/49811529/182241478-40f5e380-8de1-4062-96c3-1acde999ad90.png"/>
</details>

<br/>

## Step 2: Show content with Components from Material UI

Now that you know how to create a component in React, let's get into [Material UI](https://mui.com).
Material UI is a library of pre-built components that you can use in your React app.
Discover [here](https://dev.to/amberjones/5-delightful-things-about-material-ui-5402) the advantages of using a components library such as Material UI.

The goal of this task is to create the `TaskCard` component: this component will represent a task with all its information, including:
- A title
- A description
- A due date

To do so, you must use the [Material UI Components](https://mui.com/components/), such as [Card](https://mui.com/material-ui/react-card/) or [Typography](https://mui.com/material-ui/react-typography/).

> Feel free to choose the MUI components you want to create a great design 🚀

Create a `components` folder in your `src` folder.  
From now on, you will add one file per component inside it, with the name of your component as the filename.  
For instance, the `TaskCard` component should be located in `src/components/TaskCard.tsx`.

> You have to [export](https://medium.com/swlh/javascript-import-export-basics-ed7d94caf4c0) your functions to reuse them in your `src/App.tsx`.

> You can put the task's data directly in your code, we'll cover props in the next step to make your component generic 😜

<details>
  <summary>✔️ Result preview</summary>
  <img src="https://user-images.githubusercontent.com/49811529/182241268-4877fe93-b682-4416-8304-a9a37a2d7c86.png"/>
</details>

<br/>

## Step 3: Show all the tasks from a list with props

At this moment, you know how to create a single component and how to add it to your application.  
But what if you need to show a list of components that you cannot determine in advance? For example a list of tasks 🤔

To do so, create and use a `TaskList` component that will show all the tasks iteratively, with a [Typescript type](https://www.typescriptlang.org/docs/handbook/basic-types.html) to represent the tasks and their information.  

You can [store your tasks in a JSON file](https://bobbyhadz.com/blog/javascript-import-json-file) as an array.  
Then, import it in your `TaskList` component and use the Javascript [map](https://reactjs.org/docs/lists-and-keys.html) method to iterate through your tasks.

Finally, use [React Props](https://reactjs.org/docs/components-and-props.html#rendering-a-component) to pass values of each task from your `TaskList` to the `TaskCard` component.

💡 When you create a component through an iteration, don't forget to pass a unique `key` in component props!

<details>
  <summary>✔️ Result preview</summary>
  <img src="https://user-images.githubusercontent.com/49811529/182241779-c76d5f95-39db-4989-8ee8-dc0de5b6db97.png"/>
</details>

<br>

## Step 4: Create interactive components using useState

From now, you are able to create static components that don't interact with the user.
We will now create dynamic components to allow the user to add a new task to the list, using [React hooks](https://reactjs.org/docs/hooks-intro.html).

To create a task, we need to create forms where the user can enter a title, a description and a due date with a button to validate. Let's create them with [Material UI](https://mui.com/components/)!

Let's then use the [useState](https://www.freecodecamp.org/news/introduction-to-react-hooks/) hook to handle user input and button clicks!

💡 Mix the usage of `useState` with `props`!

> We recommend you to create a small '+' button in one of the corner of your app that will open a small window containing the title and description forms as well as the button to add the task.

💡 You can customize your hooks to avoid unwanted cases, such as an empty field.

<details>
  <summary>✔️ Result preview</summary>
  <img src="https://user-images.githubusercontent.com/49811529/182242490-78432edc-c932-416f-a1f1-2449ac37686c.png"/>
</details>

<br/>

## Step 5: Discover another hook: React contexts

In the previous step, we told you that you could pass your `useState` hooks into your components `props`. This way to do can be a bit annoying as you have to pass the variable into props from all the children from the component you created it.

To solve this problem, we can use `contexts`. [React contexts](https://reactjs.org/docs/context.html) are another type of React hooks, allowing the same things as `useState` does, but using a slightly different syntax and behavior.  
It's a great way to pass data used in whole parts of your application, such as themes (dark/light mode), user language, or in the case of our small app, tasks !  
You can wrap your components in a `Provider` like the sample code below and access the value in any of its sub-component!
```tsx
function Component(): JSX.Element {
    const [variable, setter] = useState<any>());

    return (
        <TaskContext.Provider value={{ variable, setter }}>
            ...
        </TaskContext.Provider>
    );
}
```

<br/>

## Bonus

Congratulations, you now have a functional Kanban style app to keep yourself organized in all your future projects!

You can still enhance it's behavior, here are some examples:

- You can add a [background](https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/) to your application
- You can add a `Delete` button on each task to delete it
- You can add a real due date using [Calendars](https://mui.com/x/react-date-pickers/getting-started/)
- You can link your application to a `backend` and a `database` to properly store your tasks (EPyTodo ?)

💡 We suggest you to take a look at [NextJS](https://nextjs.org) or [Remix](https://remix.run)!

<br/>

## Authors

| [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola) | [<img src="https://github.com/EdenComp.png?size=85" width=85><br><sub>Florian Lauch</sub>](https://github.com/EdenComp) | [<img src="https://github.com/Samoten777.png?size=85" width=85><br><sub>Laure Gagner</sub>](https://github.com/Samoten777) | [<img src="https://github.com/nicolasheude.png?size=85" width=85><br><sub>Nicolas Heude</sub>](https://github.com/nicolasheude)
| :---: | :---: | :---: | :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
