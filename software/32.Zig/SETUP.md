# Installing Zig

### For Fedora

Since most students use Fedora, installing Zig is very simple. Just open a terminal and run the following command:

```sh
sudo dnf install zig
```

### For other operating systems

- Visit the official Zig website: ziglang.org.

### to check installation

```sh
    zig version
```

## Initializing a Zig Project

### Step 1: Create a new project

To create a new Zig project, open a terminal and navigate to the directory where you wish to create your project. Then run the following command:

```sh
zig init
```

This command will create a basic project structure with the necessary files.

### Step 2: Explore the project structure

Once the project has been created, you'll see the following structure:

```css
.
├── build.zig
├── build.zig.zon
└── src
    ├── main.zig
    └── root.zig
```

- build.zig: This file is a build script for your Zig project.
- src/main.zig: This is the entry point for your Zig program.
- src/root.zig: This is a sub-file of example (don't worry if you don't have it).

### Step 3: Compile and run the project

To compile your project, run the following command in your project directory:

```sh
zig build
```

After compilation, a binary will be generated in the zig-out/bin folder (it may be called something different depending on the name of your folder). To run this binary, use the following command:

```sh
./zig-out/bin/main
```

You should see the messages:
    "All your codebase are belong to us.
    Run `zig build test` to run the tests." are displayed, indicating that your project has been correctly configured and compiled.

### Next step

Now that your basic project is ready, let's explore the basic concepts of the Zig language and develop a palindrome detection program.
