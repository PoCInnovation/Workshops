# Setup - Foundry

- Open your terminal and type

```bash
curl -L https://foundry.paradigm.xyz | bash
```

This will download foundryup.

- Then, you can download foundry by running `foundryup`
- If everything went fine you should be able to use `forge`, `anvil`, `chisel` and `cast`.
- If you are on macos you will need to install `libusb` with

```bash
brew install libusb
```

After the installation, run the following command to ensure it has been properly installed on your computer:

```bash
forge --version
```

It should print your current version.

If you have some troubles during the installation, you can refer to the [official documentation](https://book.getfoundry.sh/getting-started/installation).

## Initialize your project

Now we will initialize the project:

```shell
forge init workshop
```

## Back to the workshop

[Jump !](./README.md)
