# Workshop 13 - Introduction to Rust

✔ Introduction to the principles of Rust.

✔ Learn the basic features of the language.

✔ Go deeper to prepare for your next workshop in Rust

#

### Step 0 - Initialization

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).

> :bulb: We recommend you to follow the [Tour of Rust](https://tourofrust.com/00_en.html) for this workshop

#

## Introduction to Rust

### Step 1.1 - Hello World! in Rust

> :exclamation: We strongly advise you to use the resources given for this exercise.

To do this, create a file `main.rs` in a folder called `src`.

Your main function should write `Hello World!` to your terminal.

##### Resources

 - [doc.Rust](https://doc.rust-lang.org/rust-by-example/hello.html)
 - [Build Commands](https://doc.rust-lang.org/cargo/commands/build-commands.html)

#

### Step 1.2 - Palindrome ?

> :exclamation: We strongly advise you to use the resources given for this exercise.

The goal of the exercise is to create a function which takes as parameter a string `word` and returns true if it is a palindrome and false in the opposite case.

##### Resources
 - [What is a palindrome ?](https://www.wikiwand.com/en/Palindrome)
 - [New function](https://doc.rust-lang.org/book/ch03-03-how-functions-work.html)
 - [The `bool` in Rust](https://doc.rust-lang.org/std/primitive.bool.html)

> :bulb: To test your functions easier, we advise you to take a look at the [`assert_eq`](https://doc.rust-lang.org/std/macro.assert_eq.html)

#

### Step 1.3 - Fibonacci number

> :exclamation: We strongly advise you to use the resources given for this exercise.

In this exercise we ask you to recreate a function able to take as parameters a number of starts and a maximum vector. From these data you must generate and display the Fibonacci number.

Here is a small example of a part of the Fibonacci number:

```shell
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
```

##### Resources
 - [Fibonacci number](https://www.wikiwand.com/en/Fibonacci_number)
 - [Match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html)

#

### Step 1.4 - A simple and useful `Calculator` !

> :exclamation: We strongly advise you to use the resources given for this exercise.

A little bit harder !

You will have to create a small calculator that will manage :
```
- addition
- subtraction
- multiplication
- division
```

The numbers to manipulate must be recovered as you go along and must be entered by the user (Be careful with your error management).

After your calculation you just have to display the result in your terminal.

##### Resources
 - [Module std::io](https://doc.rust-lang.org/std/io/index.html)
 - [Examples io](https://doc.rust-lang.org/std/io/struct.Stdin.html#method.read_line)
 - [Option & unwrap](https://doc.rust-lang.org/rust-by-example/error/option_unwrap.html)
 - [Match](https://doc.rust-lang.org/rust-by-example/flow_control/match.html)

#

### Step 1.5 - Pig Latin

> :exclamation: We strongly advise you to use the resources given for this exercise.

The serious stuff begins !

The idea is inspired by `Pig Latin` but with a small variation nevertheless it can help you in learning a little more about the [original version](https://www.wikiwand.com/en/Pig_Latin).

From a word you must follow the following rules:
- If it starts with a vowel then it doesn't matter, you just have to add the suffix `-hay` at the end of your word.
- If it starts with a consonant then you must take the first letter of the word and move it to the first position of the suffix instead of the `h`.

> :bulb: We put you some examples to better visualize:

```Rust
"PoC"        -->    "oC-Pay"
"Epitech"    -->    "Epitech-hay"
"Bumblebee"  -->    "umblebee-Bay"
"Although"   -->    "Although-hay"
```

Now that you manage words, why not tackle sentences? Apply the previous principle but on a whole sentence!

> :bulb: Here are some examples too:

```Rust
"Live as if you were to die tomorrow. Learn as if you were to live forever."
-->
"ive-Lay as-hay if-hay you-hay ere-way o-tay ie-day omorrow-tay. earn-Lay as-hay if-hay you-hay ere-way o-tay ive-lay orever-fay."
```
```Rust
"A problem without a solution is a poorly stated problem"
-->
"A-hay roblem-pay ithout-way a-hay olution-say is-hay a-hay oorly-pay tated-say roblem-pay."
```

##### Resources
 - [Chars](https://doc.rust-lang.org/std/str/struct.Chars.html)
 - [Iterator](https://doc.rust-lang.org/std/iter/trait.Iterator.html)

#

## Bonus
 - ...
 - ...
 - ...

#

## Further reading
 - ...
 - ...
 - ...

#

## Authors
- [Yoel EDERY](https://www.linkedin.com/in/yoel-edery-957117210/)
- [Nicolas HEUDE](https://www.linkedin.com/in/nicolas-heude-525567197)

#

## Organization

- [📒 PoC's Linkedin](https://www.linkedin.com/company/pocinnovation/mycompany/)
- [📷 PoC's Instagram](https://www.instagram.com/pocinnovation/)
- [🖱️ PoC's Website](https://www.poc-innovation.fr/)
- [:computer: PoC's Github](https://github.com/orgs/PoCInnovation/)
- [🌐 PoC's Discord](https://discord.gg/G4Aygn6p)

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.