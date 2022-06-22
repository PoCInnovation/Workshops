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
import 'package:step1/pages/home.dart'; // replace "step1" by your project name

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
