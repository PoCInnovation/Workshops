# Setup - Foundry

[Foundry](https://book.getfoundry.sh/) is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust. We will need it throughout the workshop.

## Download foundry

- Open your terminal and type
```bash
curl -L https://foundry.paradigm.xyz | bash
```
. This will download `foundryup`.
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

If you have some troubles during the installation, you can refer to the [official documentation](https://github.com/foundry-rs/foundry#installation).

## Create a foundry project

Once everything is done, you can create a new project using
```bash
forge init new_project
cd new_project
```
This should create a new directory with a brand new foundry project

If you already have a repository, you might need to add
```bash
--no-commit
```

The first thing you wants to do is set the solidity version of this project in the `foundry.toml` file wich is the configuration file of foundry.

You can do this by adding in the "[profile.default]" section:
```toml
solc_version = "0.8.20"
```

## VSCode Integration

I recommend you to install [solidity vscode extension](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity), it is an extension that simplifies development in Solidity.

To be able to use it natively with foundry, you are going to do a few steps:

- Generate the remappings.txt using this command
```bash
forge remappings > remappings.txt
```
- Create a `.vscode/settings.json` file with this content
```json
{
  "editor.formatOnSave": true,
  "solidity.packageDefaultDependenciesContractsDirectory": "src",
  "solidity.packageDefaultDependenciesDirectory": "lib",
  "solidity.compileUsingRemoteVersion": "v0.8.20",
  "[solidity]": {
    "editor.defaultFormatter": "JuanBlanco.solidity"
  },
  "solidity.formatter": "forge",
}
```

## Back to the workshop

[Jump !](./README.md)
