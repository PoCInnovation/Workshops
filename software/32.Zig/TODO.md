# Step 3 - Simple Todo List in Zig

## Objective

Create a command-line todo list application where you can:

    - Add a new todo
    - Delete a todo by ID
    - View all todos

Each todo has:

    - id (auto-incremented)
    - name
    - description

## Examples

### User Interaction

    ./zig-out/bin/main

    Choose an action:
    1. Add Todo
    2. Delete Todo
    3. View Todos
    4. Exit
    > 1
    Enter name: Buy groceries
    Enter description: Milk, eggs, and bread

### Output

    Todo added successfully.
    Choose an action:
    1. Add Todo
    2. Delete Todo
    3. View Todos
    4. Exit
    > 3
    ID: 1, Name: Buy groceries, Description: Milk, eggs, and bread
    Choose an action:
    1. Add Todo
    2. Delete Todo
    3. View Todos
    4. Exit
    > 4

    > 💡 Pay attention to your error handling !

## Resources

> 💡 To easily test your functions during this workshop remember to check the tools mentioned above

- [New function](https://ziglang.org/documentation/master/#Functions)
- [The types in Zig](https://ziglang.org/documentation/master/#Primitive-Types)
