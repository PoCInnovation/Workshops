# Workshop 1 - Todo List in React

## Step 0: initialization

All the installation steps required to do the exercises are detailed in the [SETUP.md](./SETUP.md)

### Todo List

`components` are the core of React. They represent a single element in a web page, like a `text` box, a `button`, a `div` etc. All combined together, they create a fully working web page. These components are re-usable, they prevent you from code duplication.

You will learn how to create one right now in the first step!

> In this workshop, you are not allowed to use JavaScript classes, you must use `Functional Components`. [Here](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108) is a little explanation of the differences.

## Step 1: `Task` component

In `src/App.js`, create a component that will display the task description, which is just a string.

This component represents one single task in your todolist. The `description` must be received as parameter from the [props](https://fr.reactjs.org/docs/components-and-props.html). It will look something like this, you just have to complete what the component returns.

```jsx
function Task(props) {
    return (...)
}
```

To display your `Task` component, paste this line in your `App` component:

```jsx
<Task description="finish step 1" />
```

## Step 2: `List` component

### Display the tasks

Create a component that will display a list of `Task` components. To do so, you will have an Array of objects:

```js
function List(props) {
    const [taskList, setTaskList] = React.useState(["finish step 2", "finish step 3"]);
    return (...)
}
```
Some precisions:

- `taskList` is a const variable that can only be changed by the function `setTaskList` associated with it
- `taskList` is an array of objects with currently only 2 index in the example
- Each index of the array represents the variable that will be sent to the `Task` component
- Adding or removing an index to `taskList` is equivalent to add or remove a `Task`

> The [map](https://reactjs.org/docs/lists-and-keys.html) function will be very useful to iterate over our array

### Adding features

Your `List` component must also:

- Display a `input` and a `button` allowing you to add a new Task (add an index to `taskList` variable)
  - You will need another variable with `React.useState`to store it in your component
  - You will probably have to create a function that updates `taskList` when the button is clicked
- Display a `button` next to your `Task` component to delete it (remove an index to `taskList` variable)
  - Same as before, you will probably have to create a function that updates `taskList` when the button is clicked

> Find out more about the `hooks` in React
> To edit you array, the `splice` and `concat` methods will be very useful



## Step 3: Adding the API

### Get hands on the API

We will now connect our todolist to a public API that stores tasks for us! It is very clear and simple to use. All the available routes can be found **[here](https://documenter.getpostman.com/view/8858534/SW7dX7JG?version=latest#627465c4-0b9f-4306-8897-038268188093)**. First, let's create an account via curl in your terminal:

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
   "token":"eyJhbGgiOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ayJfaWQiOiI2ZjYxZmI4MDVpYzBhNTAwMTdiZPg4NjciLCJpYXQiOjE2MDAyNTY4OTZ9.2skAVYPi4vS2bDd0dQN9Melu9aqNY-13APzyqyQ9Q-4"
}
```

The `token` field contains the string that you will use to be identified. By adding it in your requests, the API will know who you are and which task you have!

If you want to add a new note, just do:

```sh
curl --location --request POST 'https://api-nodejs-todolist.herokuapp.com/task' \
--header 'Authorization: Bearer REPLACE_YOUR_TOKEN_HERE' \
--header 'Content-Type: application/json' \
--data-raw '{
	"description": "finish workshop"
}'
```

You should receive a JSON object saying `succes: true` with the note you just added.

Finally, if you want to see all your notes, just do:

```sh
curl --location --request GET 'https://api-nodejs-todolist.herokuapp.com/task' \
--header 'Authorization: Bearer REPLACE_YOUR_TOKEN_HERE' \
--header 'Content-Type: application/json'
```

Of course, there is a request to delete a note, but find it by yourself on the documentation, it should not be very hard!

### Use the API in React

You've probably saw it in the documentation, but examples in other languages are available. The one we want is JavaScript Fetch because we will use it directly in our react code. What you will have to do now is to call theses functions to send the result in your `Task` component. First, create a `request.js` file in the `src` folder containing this code:

<Details><Summary><strong>request.js</strong></Summary>

```js
/* eslint-disable */
const fetch = require('node-fetch');

const TOKEN = 'REPLACE_YOUR_TOKEN_HERE';

// based on this public API
// https://documenter.getpostman.com/view/8858534/SW7dX7JG?version=latest#intro

export async function addTask(token, description) {
  const raw = JSON.stringify({ description });
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: raw,
    redirect: 'follow',
  };

  const tasks = await fetch('https://api-nodejs-todolist.herokuapp.com/task', requestOptions);
  const list = await tasks.json();
  return list;
}

export async function delTask(token, id) {
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
  };

  const tasks = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, requestOptions);
  const list = await tasks.json();
  return list;
}

export async function getAllTask(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
  };

  const tasks = await fetch('https://api-nodejs-todolist.herokuapp.com/task', requestOptions);
  const list = await tasks.json();
  return list;
}

// Example of how to use the functions
async function main() {
  const newTask = await addTask(TOKEN, 'new Task');
  console.log(newTask);
  const tasks = await getAllTask(TOKEN);
  console.log(tasks);
  const deletedTask = await delTask(TOKEN, newTask.data._id);
  console.log(deletedTask);
}
```

</Details>

You now have to use these functions to create, delete and list your tasks. There is an example of how to call them at the end of the file, but to do so you will have to import them in your `App.js` file:

```js
import { addTask, delTask, getAllTask } from './request';
```

The easiest thing to do to have your todolist working smoothly is to keep the functions you've created to edit the array, and add an extra step that updates the online tasks with the API functions. So when you add a new task, you add it in your `taskList` array and then you call `addTask`

- In the objects you will receive in response, there are multiple fields, the one we are interested in is `data`, it contains the task information

- It's pretty easy to know when you will call `addTask` and  `delTask`, remember the buttons you previously used
- `delTask` needs an id to find the task to delete, it means you'll probably have to store more data than just the description in `taskList`
- `getAllTask` is a bit more complex because you want to call it at the beginning of the component to get all the tasks already existing in the server loaded in `taskList`. You will need to use the [useEffect](https://reactjs.org/docs/hooks-effect.html) function

> Don't forget that these functions are async, you'll need the await keyword to have the final JSON result


## Bonus

If you've finished all the steps, then well done, you've reached the end of the workshop! :clap:

If you want to upgrade your online todolist, you can add more features, like:

- Bad token detection: show an error when the token used is invalid and make the request fail

- discover the joys of [css](https://malcoded.com/posts/react-component-style/), here is an nice tutorial to master [flex-box](https://flexboxfroggy.com/#fr).
- Use [Bootstrap](https://getbootstrap.com/) to have simple style on your components
- Install external packages with pre-built and styled components like
  - [Material UI](https://material-ui.com/)
  - [Material Design](https://material.io/design/)
  - [Ant Design](https://ant.design/)


## Authors
- [Paul Monnery](https://github.com/PaulMonnery/)
- [Théo Ardouin](https://github.com/Qwexta)
