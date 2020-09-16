# Workshop 1 - Todo List in React

## Step 0: initialization

All the installation steps required to do the exercises are detailed in the [SETUP.md](./SETUP.md)

## Todo List

`components` are the core of React. They represent a single element in a web page, like a `text` box, a `button`, a `div` etc. All combined together, they create a fully working web page. Those components are re-usable,  they avoid pasting the same line of code multiple times.  

You will learn how to create one right now in the first step!

> In this workshop, you are not allowed to use JavaScript classes, you must use `Functional Components`.

### Step 1: `Task` component

In `src/App.tsx`, create a component that will display:

- The task description

This component represents one single task in your todolist. The `description`  must be received as parameters from the [props](https://fr.reactjs.org/docs/components-and-props.html).  It will look like something like this, you just have to complete what the component returns.

```jsx
function task(props) {
    return (...)
}
```

To display your `Task` component, paste this line in your `App` component:

```jsx
<Task description="finish step 1" />
```

### Step 2: `List` component

#### Display the tasks

Create a component that will display a list of `Task` components. To do so, you will have an Array of object:

```js
function List(props) {
	const [taskList, setTaskList] = React.useState(["finish step 2", "finish step 3"]);
    return (...)
}
```
Some precisions:

- `taskList` is a const variable that can only be changed by the function  `setTaskList` associated with it
- `taskList` is an array of object with currently only one index
- Each index of the array represents the variables that will be sent to the `Task` component
- Adding or removing an index to `taskList` is equivalent to add or remove a `Task`

#### Adding features

Your `List` component must also:

- Display a `input` and a `button` allowing you to add a new Task (add an index to `taskList` variable)
  - You will need another variable with `React.useState`to store it in your component
  - You will probably have to create a function that updates `taskList` when the button is clicked
- Display a `button` next to your `Task` component to delete it (remove an index to `taskList` variable)
  - Same as before, you will probably have to create a function that updates `taskList` when the button is clicked

> Find out more about the `hooks` in React  
> To edit you array, the `splice` and `concat` methods will be very useful



### Step 3: Adding the API

We will now connect our todolist to a public API that stores tasks for us! It is very clear and simple to use. All the available routes can be found [here](https://documenter.getpostman.com/view/8858534/SW7dX7JG?version=latest#627465c4-0b9f-4306-8897-038268188093). First, let's create an account via curl in your terminal:

```sh
curl --location --request POST 'https://api-nodejs-todolist.herokuapp.com/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "YOUR_FAKE_NAME",
	"email": "YOUR_FAKE_EMAIL",
	"password": "YOUR_LONG_PASSWORD",
	"age": YOUR_FAKE_AGE
}'
```

This will return you something like:

```json
{
   "user":{
      "age":YOUR_FAKE_AGE,
      "_id":"5f61fb805ac0a50017bd8867",
      "name":"YOUR_FAKE_NAME",
      "email":"YOUR_FAKE_EMAIL",
      "createdAt":"2020-09-16T11:48:16.439Z",
      "updatedAt":"2020-09-16T11:48:16.789Z",
      "__v":1
   },
   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYxZmI4MDVhYzBhNTAwMTdiZDg4NjciLCJpYXQiOjE2MDAyNTY4OTZ9.8skAVYPi4vS2bDd0dQN6Melu9aqNY-13EPzyqyQ9Q-4"
}
```

The `token` field is what you will need to be identified, by adding it in your requests, the API will know who you are and which task you have!





## Bonus - Styling

Si vous êtes arrivé jusqu'à la fin, bien joué !
Vous pouvez si vous le souhaitez ajouter du style à vos components, pour cela, vous avez plusieures options :

- Découvrir les joies du [css](https://malcoded.com/posts/react-component-style/), voici un bon tutotiel pour apprendre à manier les [flex-box](https://flexboxfroggy.com/#fr).
- Passer par [Bootstrap](https://getbootstrap.com/)
- Installer des packages avec des components pré-faits ey stylisés comme
  - [Material UI](https://material-ui.com/)
  - [Material Design](https://material.io/design/)
  - [Ant Design](https://ant.design/)


## Auteurs
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Théo Ardouin](https://github.com/Qwexta)
