# Workshop 1 - Kanban App in React

The goal of this workshop is to create a [Kanban-like](https://www.digite.com/kanban/what-is-kanban/) application using the React library in Typescript
<br/><br/>
## Step 0: Initialization

All the installation steps required to do the exercises are detailed in the [SETUP.md](./SETUP.md)
<br/><br/>
## Step 1: Create your first component

[Components](https://reactjs.org/docs/components-and-props.html) are the core of React. They represent a single element in a web page, like a `text` box, a `button`, a `div` etc. All combined together, they create a fully working web page. These components are re-usable, they prevent you from code duplication.

You will learn how to [create components](https://www.w3schools.com/react/react_components.asp) right now in the first step!

> In this workshop, we recommend you to use `Functional Components`, instead of `Javascript classes`. [Here](https://djoech.medium.com/functional-vs-class-components-in-react-231e3fbd7108) is a little explanation of the differences.

In `src/App.ts`, create a component that will display the application title, which is just a string.
In Typescript, we must specify the type of the return value of the function: for all TSX React components, you can use `JSX.Element`.

```tsx
function Title(): JSX.Element {
    return (...)
}
```

Then, in your `app function`, you should have:

```tsx
function App(): JSX.Element {
  return (
    ...
      <Title />
    ...
  );
}
```
<br/><br/>
## Step 2: Show content with Components from Material UI

Now that you know how to create a component in React, let's get into [Material UI](https://mui.com).
Material UI is a library of pre-built components that you can use in your React app.
Discover [here](https://dev.to/amberjones/5-delightful-things-about-material-ui-5402) the advantages of using a components library such as Material UI.

The goal of this task is to create the `TaskCard` component: this component will represent a task with all its information, including:
- A title
- A description
- A due date

To do so, you must use the [Material UI Components](https://mui.com/components/), such as [Box](https://mui.com/material-ui/react-box/) or [Typography](https://mui.com/material-ui/react-typography/).

:bulb: We let you figure out which components you may use from the link below!

> From now, we recommend you to create a `components` folder in your `src` folder, and to create one file per component and naming it with the name of your component. For instance, the `TaskCard` component should be located in `src/components/TaskCard.tsx`.

:bulb: Don't forget to [export](https://medium.com/swlh/javascript-import-export-basics-ed7d94caf4c0) your functions to reuse them in your `src/App.tsx`!
<br/><br/>
## Step 3: Show all the tasks from a list with props

At this moment, you know how to create a single component and how to add it to your application. But what if you need to show a list of components that you cannot determine in advance? For example a list of tasks :thinking:

To do so, you can create a `TaskList` component that will show all the tasks iteratively. 

> You can create a [Typescript type](https://www.typescriptlang.org/docs/handbook/basic-types.html) representing the tasks and their information, and a array to store them.

You can then use [React Props](https://reactjs.org/docs/components-and-props.html#rendering-a-component) to pass variables from your main components to your children components, and iterate your `Tasks` array with the Javascript [map](https://reactjs.org/docs/lists-and-keys.html) function.

:bulb: When you create a component through an iteration, don't forget to pass a unique `key` in component props!
<br/><br/>
## Step 4: Create interactive components using useState

From now, you are able to create static components that don't interact with the user.
We will now create dynamic components to allow the user to add a new task to the list, using [React hooks](https://reactjs.org/docs/hooks-intro.html).

To create a task, we need to create forms where the user can enter a title, a description and a due date with a button to validate. Let's create them with [Material UI](https://mui.com/components/)!

Let's then use the [useState](https://www.freecodecamp.org/news/introduction-to-react-hooks/) hook to handle user input and button clicks!

:bulb: Mix the usage of `useState` with `props`!

> We recommend you to create a small '+' button in one of the corner of your app that will open a small window containing the title and description forms as well as the button to add the task.

:bulb: You can customize your hooks to avoid unwanted cases, such as an empty field.
<br/><br/>
## Step 5: Discover another hook: React contexts

In the previous step, we told you that you could pass your `useState` hooks into your components `props`. This way to do can be a bit annoying as you have to pass the variable into props from all the children from the component you created it.

To solve this problem, we can use `contexts`. [React contexts](https://reactjs.org/docs/context.html) are another type of React hooks, allowing the same things as `useState` does, but using a slightly different syntax and behavior. With `providers`, you won't have to pass your hooks through `Props`, and using the following syntax will allow you to use your hooks everywhere you need it!

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
<br/><br/>
## Bonus

Congratulations, you now have a functionnal Kanban style app to keep yourself organized in all your future projects!

You can still enhance it's behaviour, here are some examples:

- You can add a [background](https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/) to your application
- You can add a `Delete` button on each task to delete it
- You can add a real due date using [Calendars](https://mui.com/x/react-date-pickers/getting-started/)
- You can link your application to a `backend` and a `database` to properly store your tasks (EPyTodo ?)

:bulb: We suggest you to take a look at [NextJS](https://nextjs.org) or [Remix](https://remix.run)!

<br/><br/>
## Authors

| [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola) | [<img src="https://github.com/EdenComp.png?size=85" width=85><br><sub>Florian Lauch</sub>](https://github.com/EdenComp) | [<img src="https://github.com/Samoten777.png?size=85" width=85><br><sub>Laure Gagner</sub>](https://github.com/Samoten777) | [<img src="https://github.com/nicolasheude.png?size=85" width=85><br><sub>Nicolas Heude</sub>](https://github.com/nicolasheude) 
| :---: | :---: | :---: | :---: |
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
