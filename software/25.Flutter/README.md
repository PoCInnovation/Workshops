# Workshop 25 - Flutter

In this workshop you will learn how to do a `To do list` with the [Dart](https://dart.dev/) framework's, [Flutter](https://flutter.dev/).

## Step 0 - Setup

Befor everyting you need to `install Flutter` with the [SETUP.md](./SETUP.md)

Flutter is a framework based on the dart language.

***Do not start without knowing anything about it, here is an [introduction](https://dart.dev/samples) to this language.***

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

Create a folder `lib/pages` and put a `home.dart` file with this code in it:
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

If everything has worked and you launche the project, you migth have the text `Step 1` in the middle of the application.

:warning: In this code you have some const that you will have to remove because of non const contructor of widget you will use.

## Step 2 - Lists

The most important thing in a `to do list` is to have a list of `Widget` that will represent your todos.

For this step you have to create a folder `lib/components` and put a `todo_list.dart` file in it. You can now past this code in the file:

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
    // implement list instead of the code below.
    return Center(
      child: Text("To do list"), 
    );
  }
}
```

This code create a `component` `ToDoList` that take a list of string in parameters.

Here is to know [how to access of parameters](https://stackoverflow.com/questions/50287995/passing-data-to-statefulwidget-and-accessing-it-in-its-state-in-flutter).

Lets take a look of how to do list with Flutter. For it you have muliple choices, here are few of them:

- [List.generate](https://api.flutter.dev/flutter/dart-core/List/List.generate.html)


    As there is no exemple with `widget` in the doc, here is one: 
    
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

You have to make sure you component is workink by calling your component with this list in parameters:

```dart
final List<String> _arr = ["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5"];
```

:warning: If the list can't be display to the entire screen (it will happen), you might wrap your list with [SingleChildScrollView](https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html), to make your screen scrollable.

## Step 3 - Models

For this step you have to create a folder `lib/models` and a `todo.dart`.

The goal of this step is to create a class that will define the atributs of a todo and impelement it.

Your todo class need to contain the following attributs:
  
  - A required string `title`
  - An optional string `description`

Then you have to replace the list of string `_arr` that you passed as parameters of your `ToDoList component` by:

```dart
final List<Todo> _todos = [Todo(title: "Todo 1"), Todo(title: "Todo 2", description: "description of todo 2"), Todo(title: "Todo 3"), Todo(title: "Todo 4"), Todo(title: "Todo 5", description: "description of todo 5")];
```

Then your `ToDoList component` have now to display the title of all todos.

## Step 4 - Card and ListTile

In order to make the work easier, you will use a [list tile](https://api.flutter.dev/flutter/material/ListTile-class.html). It will help you to organise your todo.

So you can set the title of your todo as the title of your `tile` and the `description` of the todo as the subtitle (but you are free to whatever you want).

That seem a little bit better but we can do more. Make your list more eye-catching by wraping each element of your list with a [card](https://api.flutter.dev/flutter/material/Card-class.html).

As now you have a `list tile` you can already make the delete [icon button](https://api.flutter.dev/flutter/material/IconButton-class.html) in the trailing of your tile.

:warning: In flutter you have to [refresh the state of the page](https://api.flutter.dev/flutter/widgets/State/setState.html) after modifing a displayed variable to see it.

## Step 5 - Create a todo

At this time, you might have the display and the delete of your todos, the only thing that miss is the todo creation page.

In order to make the creation page you have to create a `lib/pages/create_todo.dart` file with the following code in it:
```dart
class CreateTodoPage extends StatelessWidget {
  const CreateTodoPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: SafeArea(
        child: Center(
          child: Text("Create todo page"),
        ),
      ),
    );
  }
}
```

For it you need to add a button in your home page that redirect to the creation page, I recommand you to use the `floatingActionButton` of your `Scaffold` from your home page.

Then the button need to use the [navigator class](https://docs.flutter.dev/cookbook/navigation/navigation-basics) to change the screen to the creation page.

Now that you can navigate between your home page and your todo creation page, you can create the page. This page must containe the following widgets:

  - `TextField` for the title of todo.
  - `TextField` for the description of todo.
  - A create `Button` to [pop](https://docs.flutter.dev/cookbook/navigation/returning-data) the todo to the page pusher. 
  - A cancel `Button` to close the page.
