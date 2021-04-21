# Workshop 7 - Mobile app with Expo

In this workshop, we will create a simple mobile in written in React Native with TypeScript. When working with mobile apps, you often need to build your app, have `xcode` or `android studio` launched, your device plugged, your ram almost full, struggling with permissions and compilations errors because of unsupported model or update etc.

Expo is here to simplify all this laborious work. No wire, no android studio, no version errors, just a QR code to scan and the app is locally built and sent to the expo client on your phone. Way easier!

## Step 0: Initialization

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).

## Step 0.5: Informations

As written in the name, react native is based on React, a very popular front-end framework to create websites. `components` are the core of React. They represent a single element in a web page, like a `text` box, a `button`, a `div`, etc. All combined, they create a fully working web page. These components are reusable, they prevent you from code duplication. This also works in React Native, component won't be web elements but will create native mobile components.

> In this workshop, you are not allowed to use TypeScript classes, you must use `Functional Components`. [Here](https://www.twilio.com/blog/react-choose-functional-components) is a little explanation of the differences.

Now that it's clear, time to work! The template repo is quite large, so let's discover it. There are files that we won't use but also useful stuff. Please find:

- Where is the higher component of the app (the one that calls all the others)
- What is the background color of the dark theme used by expo

- Which `function` opens the web browser on the `Tab One` screen
- What is the main navigator and what is the navigator describing the bottom bar



## Step 1: Basic todolist

Now that you understand a bit more the architecture of the project, let's create something! First off, wipe everything inside the `tabOneScreen.tsx` file: we will create a simple todolist component.

The goal of the workshop of not to learn how to code in React but rather learn how to use React Native, so we won't waste time on creating basic components. Here is a `Task` component, copy everything inside your empty file:

```tsx
import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';

function Task(props: {title: string, completed: boolean}) {
  return (
    <View style={{ width: "90%", flexDirection: "row" }}>
        <Text style={{ fontSize: 16, marginRight: 10, color: props.completed ? "green" : "red" }}>
          {props.completed ? "DONE" : "TODO"}
        </Text>
        <Text style={{ fontSize: 16 }}>
          {props.title}
        </Text>
    </View>
  );
}

export default function TabOneScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Task title="Start workshop" completed={false} />
    </ScrollView>
  );
}
```

Your goal in this task will be to edit this code to display a new `List` component. To do so, you will have an Array of objects:

```jsx
function List() {
    const [taskList, setTaskList] = React.useState(["finish step 2", "finish step 3"]);
    return (...)
}
```

Some precisions:

- React Native uses different components of React, here is the [documentation](https://reactnative.dev/docs/components-and-apis)

- By default, all task `completed` props will be `false`

- `taskList` is a const variable that can only be changed by the function `setTaskList` associated with it

- `taskList` is an array of objects with currently only 2 indexes in the example

- Each index of the array represents the variable that will be sent to the `Task` component

> The [map](https://reactjs.org/docs/lists-and-keys.html) function will be very useful to iterate over our array



## Step 2: Online loading

Now that we dynamically display our tasks in a single component that loops over data, let's fetch this data online rather than just writing some!

Add this block of code after your imports:

```tsx
import axios from 'axios'

interface TodoDto {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

async function getTasks(): Promise<TodoDto[]> {
  const ret = await axios.get("https://jsonplaceholder.typicode.com/todos")
  console.log(ret.data)
  return ret.data
}
```

and call `getTasks` on your list component (before the return), this should print in the terminal a JSON object representing a list of tasks. The goal of this step is to replace the hard-coded values in your `taskList` array with these fetched values.

- Don't forget to use the `completed` variable
- The data fetching is asynchronous, you won't have data while it's loading, so `taskList` will be called with `React.useState<TodoDto[] | null>(null);`
- You'll need the [useEffect](https://modern-javascript.fr/comment-utiliser-une-async-function-dans-un-hook-useeffect-avec-react/) to execute actions when the component is created (here, the action will be to load data)



## Step 3: QR code scanning

Now that we've seen the basic features that react and React Native can offer, let's do something totally different, time to create a screen that will display a camera and have the ability to scan QR code. The URL encoded in the code will be opened in a web browser on success.

First off, you'll have to install new packages:

```bash
# Stop your server and run
expo install expo-camera expo-barcode-scanner expo-media-library

# Then restart your server
npm start
```

> Here is the [Camera documentation](https://docs.expo.io/versions/latest/sdk/camera/), there are useful examples, search for code scanning

- `handleBarCodeScanned` arguments type are `{ type: string; data: string }`
- Your IDE might show you errors because of types but don't waste time fixing them if it doesn't block the compilation
- If the QR code struggles, do not hesitate to reload the app (shake your device to trigger the option panel)

You can use this QR code as an example:

<p align="center">
    <img src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fgithub.com%2FPoCInnovation&chs=200x200&choe=UTF-8&chld=L|2' alt='' width="25%">
</p>


## Step 4: Take a picture and flip

Our camera works great, but we cannot even do basic stuff such as taking pictures or using the front camera... That's why your last task will be to add those features to your screen, add:

- A **flip** button that changes the camera type from front to back and vice versa
- A **trigger** button that will take a picture and save it to the camera roll

> You'll need to use React refs to take a picture

## Bonus

Here is a list of possible features you could add to your project

**Easy**

- Add styles to your todolist ! Use some CSS
- Add a [pull to refresh](https://reactnative.dev/docs/scrollview#refreshcontrol) option to your `ScrollView`s
- Use a [Flatlist](https://reactnative.dev/docs/scrollview#refreshcontrol) instead of a `ScrollView` to have the ability to load data when the end is reached (and also have the ability to pull to refresh)

**Medium**

- Add new pages to the bottom tab navigation
- Create a button that [navigates to another screen](https://reactnavigation.org/docs/use-navigation) when pressed: `navigation.navigate("SCREEN_NAME")`
- Try changing the bottom tab navigation icons

**Hard**

- Create an Authentication process with a context:
  - Create another **navigator** with a single screen: the app landing screen
  - Set this navigator as default when the app is opened (just put it before `Root` navigator)
  - On the landing screen, add a button that will fake our login, when press, we will consider that we are logged in
  - Setup a context to save if the user is logged in. Everything is explained [here](https://reactnavigation.org/docs/auth-flow)
  - Set the `userToken` state of the context to *poc* when the button is pressed, this should switch to another screen
