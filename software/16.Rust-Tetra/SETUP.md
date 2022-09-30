# Workshop 16 - SETUP - Introduction to Tetra with Rust

## 1. Installation

Please make sure you have the following programs installed:
 - [Rust](https://www.rust-lang.org/fr/): A language that gives everyone the power to build reliable and efficient software.
 - [Tetra](https://github.com/17cupsofcoffee/tetra): A simple 2D game framework written in Rust.

### Install Rust:
 - Under all systems: 
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### To install Tetra:
```shell
sudo yum install SDL2-devel
sudo yum install alsa-lib-devel

git clone git@github.com:17cupsofcoffee/tetra.git
cd tetra
cargo run --example hello_world
```

To ensure that the installation works properly after these commands, a blue page should open.

## 2. Project

Create a working folder and get the resources provided with the workshop.

### Init your project:

```shell
cargo init
cargo add tetra
```
> If you get an error when running `cargo add tetra`, then run `cargo install cargo-edit` and re-run `cargo add tetra`

## 3. Start workshop

> 💡 We recommend you to follow the [Tour of Rust](https://tourofrust.com/index.html) for this workshop.

[Go back to the exercise](./README.md)
