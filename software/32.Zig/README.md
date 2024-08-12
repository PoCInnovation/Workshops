# Workshop 32 - Introduction to Zig

Welcome to this introductory workshop on Zig! Zig is a modern programming language that emphasizes robustness, performance and clarity. Today, you'll learn :
✔️ How to install Zig
✔️ Create your first project
✔️ Discover the language's key concepts by creating a few projects

## Introduction

Zig is a general-purpose programming language focused on robustness, performance, and simplicity. It offers manual memory management, safety features, built-in cross-compilation, and seamless C interoperability, making it ideal for system programming and high-performance applications.

## Step 0 - SETUP

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).

> 💡 We recommend you to follow the [Getting started](https://ziglang.org/learn/getting-started/) for this workshop.

## Step 1 - Hello World! in Zig

> ❗ We strongly advise you to use the documentation provided for this exercise.

📑 Description:

For the first exercise, we simply ask you to write `Hello world!` in your terminal when you run your program.

📌 Tasks:

Create a file `main.zig` in a folder called `src` with your logic to print the "hello world"

src
└── main.zig

📚 Documentation:

> 💡 Now, that you have created a file `main.zig`, you can use other zig files. To use them in your `main.zig` you have to integrate the module ([read more](https://stackoverflow.com/questions/71186556/how-do-i-include-one-zig-file-from-another-zig-file))

- [Build System](https://ziglang.org/learn/build-system/)
- [Doc.Zig](https://ziglang.org/documentation/master/)

✔️ Validation:

    you should see the following :

    ```sh
    Hello, World!
    ```

## Step 2 - Palindrome?

📑 Description:

For the second exercise, you have to create a function that takes as parameter a string `word`.

📌 Tasks:

Create a file `palindrome.zig` for this new function.

This function must return true if the word given in parameter is a palindrome and false in the opposite case.

📚 Documentation:

 -[What is a palindrome ?](https://www.wikiwand.com/en/Palindrome)
 -[New function](https://ziglang.org/documentation/master/#Functions)
 -[The types in Zig](https://ziglang.org/documentation/master/#Primitive-Types)
 -[Control_Structures](https://zig.guide/language-basics/while-loops)

 ✔️ Validation:

    Here's a main example :

    pub fn main() void {
    const stdout = std.io.getStdOut().writer();

    const test_word1 = "madam";
    const test_word2 = "hello";

    const result1 = is_palindrome(test_word1);
    const result2 = is_palindrome(test_word2);

    stdout.print("{} is palindrome: {}\n", .{test_word1, result1}) catch {};
    stdout.print("{} is palindrome: {}\n", .{test_word2, result2}) catch {};
}

 When you compile and run palindrome.zig, the output should be:

    ```sh
    madam is palindrome: true
    ```
    or

    ```sh
    hello is palindrome: false
    ```

## Step 3 - Fibonacci sequence

📑 Description:

For the third exercise, you need to create a function that generates and displays the Fibonacci sequence up to a specified number of elements.

📌 Tasks:

- Create a file `fibonacci.zig` for this new function.

For the third exercise, create a function that takes one parameter:

- A number `max` with type `i32` that represent the number of element to compute.

- You must now display the sequence of Fibonacci from the number of starts to the `max` value.

Here is a small example of the beginning of the Fibonacci sequence:

    ```shell
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
    ```

📚 Documentation:

 -[Fibonacci number](https://www.wikiwand.com/en/Fibonacci_number)
 -[Match](https://ziglang.org/documentation/master/#Standard-Library-Math-Functions)
 -[Vector](https://ziglang.org/documentation/master/#Vectors)

  ✔️ Validation:

    Given the Fibonacci sequence (see previous example), if max is 5, the function should output:

    ```sh
    0, 1, 1, 2, 3
    ```

## Step 4 - A simple and useful `Calculator`

📑 Description:

Let's go further now!

The objective of this fifth exercise is to create a simplifying calculator.

📌 Tasks:

- Create a file `calculator.zig` for this new function.

To do this, you have to make a calculator that can do:

- `Addition`
- `Multiplication`
- `Division`
- `Subtraction`

- between two values that must be retrieved one after the other from the user's input.

> 💡 Pay attention to your error handling !

- Display the result of the calculation in your terminal.

📚 Documentation:
 -[Errors](https://ziglang.org/documentation/master/#Errors)
 -[Memory](https://zig.guide/standard-library/allocators)
 -[ArrayList](https://zig.guide/standard-library/arraylist)

  ✔️ Validation:

    You should get something like this :

    ```sh
    First number: 5
    Operation: +
    Second number: 3
    8
    ```

    Here's a typical error handeling example :

    ```sh
    First number: abc
    Operation: +
    Second number: 3
    Expected Output: Error message indicating invalid input.
    ```

## Bonuses - TO DO List and C Code translation

### TO DO List

📑 Description:

Now that you're used to the basics, you will do a little project to apply what you've learnt so far.

📌 Tasks:

Create a command-line todo list application where you can:

    - Add a new todo
    - Delete a todo by ID
    - View all todos

Each todo should have at least three fields:

    - id (auto-incremented)
    - name
    - description

> 💡 To easily test your functions during this workshop remember to check the testing tools mentioned above

📚 Documentation:

- [New function](https://ziglang.org/documentation/master/#Functions)
- [The types in Zig](https://ziglang.org/documentation/master/#Primitive-Types)

✔️ Validation:

    ```sh
    ./zig-out/bin/main

    Choose an action:
    1. Add Todo
    2. Delete Todo
    3. View Todos
    4. Exit
    > 1
    Enter name: Buy groceries
    Enter description: Milk, eggs, and bread
    Todo added successfully.
    ```

    ```sh
    Choose an action:
    5. Add Todo
    6. Delete Todo
    7. View Todos
    8. Exit
    > 3
    ID: 1, Name: Buy groceries, Description: Milk, eggs, and bread
    Choose an action:
    9. Add Todo
    10. Delete Todo
    11. View Todos
    12. Exit
    > 4
    ```

    > 💡 Pay attention to your error handling !

### Use The C Translation tool

📑 Description:

Zig provides the command zig translate-c for automatic translation from C source code. You can try to read the documentation and have fun with the tool.

📚 Documentation:

 -[Translate-C](https://zig.guide/working-with-c/translate-c)
 -[cImport](https://zig.guide/working-with-c/c-import)
 -[LinkLibC](https://zig.guide/working-with-c/linking-libc)

## Conclusion

Well done ! You've accomplished a lot with the Zig Workshop, and there is so much more to discover. Refer to the official documentation to deep-dive into it.

Hope you enjoyed the workshop!

## Authors

- Elie STROUN
- Pierre LISSOPE

> 🚀 Follow us on our different social networks, and put a star 🌟 on `PoC's` repositories.