# Workshop 25 - Flutter

In this workshop you will learn how to create a Todo list with the [Dart](https://dart.dev/) framework, [Flutter](https://flutter.dev/) 🚀

✔ The fundamentals of Flutter.

✔ Display and manipulation of lists.

✔ Navigation between pages.

## Step 0 - Setup

⚠️ ***Complete this setup before the workshop***, you will have to download big packages.

Before starting you need to install Flutter with the [SETUP.md](./SETUP.md)

Flutter is a framework based on the Dart language.

***"We strongly advise you to check the [documentation of Dart language](https://dart.dev/samples) if you don't know it***

## Step 1 - Get started

Replace the code in `lib/main.dart` with the following code:
```dart
import 'package:flutter/material.dart';
import 'package:step1/pages/home.dart'; // replace "step1" by your project name.

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}
```

Create a folder `lib/pages` and put a `home.dart` file with it with this code:
```dart
import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: SafeArea(
        child: Center(
          child: Text("Step 1"),
        ),
      ),
    );
  }
}
```

Here we are using [StatelessWidget](https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html) to run the application in a [MaterialApp](https://api.flutter.dev/flutter/material/MaterialApp-class.html) and we set the home of the app to `MyHomePage`, the class defined in `home.dart`.

The homePage class extends [StatefulWidget](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html) to have a home page with state that can be refreshed with the [setState](https://api.flutter.dev/flutter/widgets/State/setState.html) method.

As you can see in all the classes that extends `StatefulWidget` of `StatelessWidget`, we override the [build method](https://api.flutter.dev/flutter/widgets/State/build.html), you will code in it to code the graphical part.

If everything has worked and you launch the project, you should have the text `Step 1` in the middle of the application, which means you are ready to continue 🔥

> ⚠️ In this code you have some `const` that you'll have to remove because of non-const constructor of widget you will use later.

## Step 2 - Lists

The most important thing to build a todo list is to have a list of `Widget` that will represent your todos.

A `Widget` is the thing that you will use to create the user interface, here is the [Widget catalog](https://docs.flutter.dev/development/ui/widgets), you will find every widget that you can use in Flutter.

For this step you have to create a folder `lib/components` and put a `todo_list.dart` file in it. You can now paste this code in the file:

```dart
import 'package:flutter/material.dart';

class ToDoList extends StatefulWidget {
  const ToDoList({Key? key, required this.arr}) : super(key: key);

  final List<String> arr;
  @override
  State<ToDoList> createState() => _ToDoListState();
}

class _ToDoListState extends State<ToDoList> {
  @override
  Widget build(BuildContext context) {
    return Center( // Step 2: implement list instead of the Center and it text child.
      child: Text("To do list"), 
    );
  }
}
```

This code creates a `component` `ToDoList` that takes a list of string as parameters.

Here is how to call your `ToDoList component` it in the `home.dart`:
```dart
import 'package:flutter/material.dart';
import 'package:step2/components/todo_list.dart'; // change "step2" by your project name.

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<String> _arr = ["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SizedBox(
          width: MediaQuery.of(context).size.width,
          child: ToDoList(
            arr: _arr,
          ),
        ),
      ),
    );
  }
}
```

You will have nothing more to do in the `home.dart` for this step.

To access the parameters of a `StateFullWidget` in its State, you need to add the keyword `widget.` before the name of the parameter.

Let's take a look of how to do a list with Flutter. You have multiple choices, here are a few ones:

- [List.generate](https://api.flutter.dev/flutter/dart-core/List/List.generate.html)


    As there is no example with `widget` in the doc, here is one:

    ```dart
    Column(
        children: List.generate(
            10,
            (index) {
                return Text(index.toString());
            }
        ),
    )
    ```
- [ListView.builder](https://docs.flutter.dev/cookbook/lists/long-lists)

- [For loop](https://stackoverflow.com/questions/56947046/flutter-for-loop-to-generate-list-of-widgets)

> ⚠️ If the list can't be display in the entire screen (it will happen), you have to wrap your list with [SingleChildScrollView](https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html) to make your screen scrollable.

## Step 3 - Models

For this step you have to create a folder `lib/models` and a `todo.dart`.

The goal of this step is to create a class that will define the attributes of a todo and implement it.

Your todo class needs to contain the following attributes:
  
- A required string `title`
- An optional string `description`

Then you have to replace the list of string `_arr` that you pass as parameters of your `ToDoList` component by:

```dart
final List<Todo> _todos = [Todo(title: "Todo 1"), Todo(title: "Todo 2", description: "description of todo 2"), Todo(title: "Todo 3"), Todo(title: "Todo 4"), Todo(title: "Todo 5", description: "description of todo 5")];
```

Here is the syntax for a class, to help you a little bit:
```dart
class MyClass {
  String toto;
  int tata;

  MyClass({
    required this.toto,
    this.tata = 0,
  });
}
```

Your `ToDoList` component has now to display the title of all todos 😉

## Step 4 - Card and ListTile

In order to make the work easier, you will use a [list tile](https://api.flutter.dev/flutter/material/ListTile-class.html). It will help you to organized your todo.

So you can set the title of your todo as the title of your `tile` and the `description` of the todo as the subtitle (but you are free to do whatever you want).

That seems a little bit better but we can do more 🚀<br>
Make your list more eye-catching by wrapping each element of your list with a [card](https://api.flutter.dev/flutter/material/Card-class.html) 😄

As now you have a list tile, you can already add the delete [icon button](https://api.flutter.dev/flutter/material/IconButton-class.html) in the trailing of your tile.

> ⚠️ In flutter you have to [refresh the state of the page](https://api.flutter.dev/flutter/widgets/State/setState.html) after modifying a displayed variable to see it.

## Step 5 - Create a todo

At this time, you have display and deletion features of your todos, the only thing that is missing is the todo creation page 😃

In order to make the creation page you have to create a `lib/pages/create_todo.dart` file with the following code in it:
```dart
class CreateTodoPage extends StatelessWidget {
  const CreateTodoPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: SafeArea(
        child: Center( // Step 5: replace this center and its text child by your code
          child: Text("Create todo page"),
        ),
      ),
    );
  }
}
```

To do so you need to add a button in your home page that redirects to the creation page, I recommend you to use the `floatingActionButton` of your `Scaffold` from your home page.

Then the button needs to use the [navigator class](https://docs.flutter.dev/cookbook/navigation/navigation-basics) to change the screen to the creation page.

Now that you can navigate between your home page and your todo creation page, you can create the page. This page must contain the following widgets:

  - `TextField` for the title of todo.
  - `TextField` for the description of todo.
  - A create `Button` to [pop](https://docs.flutter.dev/cookbook/navigation/returning-data) the todo to the page pusher.
  - A cancel `Button` to close the page.

## Bonus

Congratulations for completing this workshop 🔥

To go further, here's what you can add to your app:

- Labels in todo, as example: `urgent`, `important`, `less important`.
- Deadline for the todo.
- Add the possibility to move the todo up and down.

You can also take a look at our workshop on [React Native with Expo](https://github.com/PoCInnovation/Workshops/tree/master/software/07.Expo), an alternative to Flutter to build mobile apps 👀

## Authors

| [<img src="https://github.com/AlexandreCollin.png?size=85" width=85><br><sub>Alexandre Collin</sub>](https://github.com/AlexandreCollin) | [<img src="https://github.com/lucas-louis.png?size=85" width=85><br><sub>Lucas Louis</sub>](https://github.com/lucas-louis)
| :---: | :---: |
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
