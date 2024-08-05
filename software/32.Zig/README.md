# Workshop 13 - Introduction to Zig

Welcome to this introductory workshop on Zig! Zig is a modern programming language that emphasizes robustness, performance and clarity. Today, you'll learn how to install Zig, create your first project, and discover the language's key concepts by creating a palindrome detection program.

## Prerequisites

- Basic programming skills (C, C++, or any other language)
- A computer with Internet access

## Workshop objectives

- Install Zig on your machine
- Initialize a Zig project
- Understand the basics of the Zig language
- Create a palindrome detection program

## Step 0 - SETUP

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).

> 💡 We recommend you to follow the [Getting started](https://ziglang.org/learn/getting-started/) for this workshop.

### Step 1 - Hello World! in Zig

> ❗ We strongly advise you to use the resources given for this exercise.

For the first exercise, we simply ask you to write `Hello world!` in your terminal when you run your program.

To do this, create a file `main.zig` in a folder called `src`.


> 💡 Zig file has `zig` extension.

> 💡 Now, that you have created a file `main.zig`, you can use other files. To use them in your `main.zig` you have to integrate the module ([read more](https://stackoverflow.com/questions/71186556/how-do-i-include-one-zig-file-from-another-zig-file))

#### Resources

 - [Build System](https://ziglang.org/learn/build-system/)
 - [Doc.Zig](https://ziglang.org/documentation/master/)

### Step 2 - Palindrome?

> ❗ We strongly advise you to use the resources given for this exercise.

For the second exercise, you have to create a function that takes as parameter a string `word`.

Create a file `palindrome.zig` for this new function.

This function must return true if the word given in parameter is a palindrome and false in the opposite case.

#### Resources
 - [What is a palindrome ?](https://www.wikiwand.com/en/Palindrome)
 - [New function](https://ziglang.org/documentation/master/#Functions)
 - [The types in Zig](https://ziglang.org/documentation/master/#Primitive-Types)
 - [Control_Structures](https://zig.guide/language-basics/while-loops)

### Step 3 - Fibonacci sequence

> ❗ We strongly advise you to use the resources given for this exercise.

Create a file `fibonacci.zig` for this new function.

For the third exercise, create a function that takes one parameter:
- A number `max` with type `i32` that represent the number of element to compute.

You must now display the sequence of Fibonacci from the number of starts to the maximum value.

Here is a small example of the beginning of the Fibonacci sequence:

```shell
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
```

#### Resources
 - [Fibonacci number](https://www.wikiwand.com/en/Fibonacci_number)
 - [Match](https://ziglang.org/documentation/master/#Standard-Library-Math-Functions)
 - [Vector](https://ziglang.org/documentation/master/#Vectors)


### Step 4 - A simple and useful `Calculator`!

> ❗ We strongly advise you to use the resources given for this exercise.

Let's go further now!

The objective of this fifth exercise is to create a simplifying calculator.

Create a file `calculator.zig` for this new function.

To do this, you have to make a calculator that can do:
- `Addition`
- `Multiplication`
- `Division`
- `Subtraction`

between two values that must be retrieved one after the other from the user's input.

> 💡 Pay attention to your error handling !

Display the result of the calculation in your terminal.

#### Resources
 - [Errors](https://ziglang.org/documentation/master/#Errors)
 - [Memory](https://zig.guide/standard-library/allocators)
 - [ArrayList](https://zig.guide/standard-library/arraylist)

### Step 5 - Simple Todo List in Zig

#### Objective

Create a command-line todo list application where you can:

    - Add a new todo
    - Delete a todo by ID
    - View all todos

Each todo has:

    - id (auto-incremented)
    - name
    - description

### Step 5 - Use your C code

Zig provides the command zig translate-c for automatic translation from C source code

#### Resources
 - [Translate-C](https://zig.guide/working-with-c/translate-c)
 - [cImport](https://zig.guide/working-with-c/c-import)
 - [LinkLibC](https://zig.guide/working-with-c/linking-libc)
 
