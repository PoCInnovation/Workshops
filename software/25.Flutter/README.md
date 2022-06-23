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

This code create a `component` `ToDoList` that take a list of string in parameters. To use the paremeters you have to call it like this:

```dart
widget.arr
```

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

:warning: If the list can't be display to the entire screen (it will happen), you might wrap your list with [SingleChildScrollView](https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html), to make your screen scrollable.
