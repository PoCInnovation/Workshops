# Workshop - Discover Blockchain Development and Tools

✔ 📖 **Discover Foundry**  
✔ 🛠️ **Deploy a Smart-Contract on a Local Blockchain**  
✔ 🚀 **Call this Smart-Contract**

## Introduction

This workshop introduces blockchain development and the tools you'll need to deploy and interact with smart contracts. We’ll guide you through deploying your first smart contract using Foundry on a local blockchain, and calling it to see how it works.

### What is a Smart Contract?
A smart contract is a self-executing contract with the terms directly written into code. Once deployed on a blockchain, it can be interacted with like any other piece of software, but it's decentralized, meaning no one can alter it once it's live.

## Prerequisites

This workshop requires **no prior knowledge**. All you need is a computer and an internet connection.

## Step 1 - Install VSCode

VSCode is a text editor that developers use to write code. Think of it like a digital notebook where you'll be writing your smart contract.

1. Go to the [official website](https://code.visualstudio.com/download) and download the version of VSCode for your operating system.
2. Follow the installation instructions on the site, and once installed, open it up. You'll use it to write your smart contract later.

## Step 2 - Install Foundry

Foundry is a set of tools that helps you develop and test smart contracts quickly.

1. Follow the instructions given [here](https://book.getfoundry.sh/getting-started/installation) to install Foundry. The guide walks you through installing it on your system.
2. After installation, run the following command in your terminal to make sure it's installed correctly:
   To open a terminal in vscode, click on the **Terminal** tab in the top menu and then click on **New Terminal**
   ```shell
   forge --version
   ```
   If everything went well, you should see the current version of Foundry printed out.


## Step 3 - Initialize Your Project

### What is Initialization?
Initialization sets up the basic structure of your project.

1. In your terminal, navigate to the folder where you want to create your project. Then, run the following command to initialize the project:

   ```shell
   forge init workshop
   ```

   This will create a new project folder called `workshop` with some starter files.

### Delete Unnecessary Files
Some of the files that come with the starter project aren’t needed for this workshop.

1. Delete the following folders and file:
   - `test` folder
   - `script` folder
   - `Counter.sol` file in the `src` folder

2. Now, add the file `HelloWorld.sol` in the `src` folder. This is the smart contract you'll be deploying.
   - The smart contract have only one function `hello()` that returns the message `Hello world`.

## Step 4 - Start the Local Blockchain

### What is a Local Blockchain?
A local blockchain is like a blockchain simulator running on your computer. It allows you to test your smart contracts without using real money or interacting with a public blockchain.

1. To start your local blockchain, run the following command in the terminal:

   ```shell
   anvil
   ```

   Anvil will start up a local blockchain and give you a list of pre-created wallets. Each wallet has some fake cryptocurrency in it so that you can deploy smart contracts without needing real money.

2. **Copy one of the private keys** from the list. You will use this key to deploy your smart contract in the next step.

## Step 5 - Deploy the Smart Contract

### What Does Deploying Mean?
When you deploy a smart contract, you're publishing it on a blockchain so it can be used. Once deployed, it's live and ready for interaction.

1. To deploy your smart contract, run the following command:

   ```shell
   forge create --private-key PRIVATE_KEY src/HelloWorld.sol:HelloWorld
   ```

   Replace `PRIVATE_KEY` with the private key you copied earlier from the local blockchain. 

2. After running the command, you'll see some information about the deployment. Look for the part that says `deployed to`, followed by an address. **Copy this address**, as it is where your smart contract is located on the blockchain, and you'll need it in the next step.

## Step 6 - Call the Smart Contract

### What Does Calling a Smart Contract Mean?
Calling a smart contract means interacting with it by executing one of its functions. For this workshop, you’ll call the `hello()` function of the smart contract, which will return a message.

1. Run the following command to call the `hello()` function:

   ```shell
   cast call CONTRACT_ADDRESS "hello()" | tr -d '\n' | cast to-ascii
   ```

   Replace `CONTRACT_ADDRESS` with the address of the smart contract that you copied earlier.

2. You should see the output `Hello world`. 

   Here's what each part of the command does:
   - `cast call` is used to call a function in the smart contract.
   - The first argument is the address of the smart contract.
   - The second argument is the function to call (`hello()` in this case).
   - `tr -d '\n'` removes the newline character at the end of the output.
   - `cast to-ascii` converts the output from hexadecimal to readable text (ASCII).

## Conclusion

Congratulations! You've just deployed and called a smart contract on a local blockchain. You've taken your first steps into blockchain development, and I hope this workshop has given you a taste of how powerful this technology can be.

Feel free to explore more, modify the smart contract, and dive deeper into Foundry and blockchain!


## Authors 👋

| [<img src="https://github.com/Intermarch3.png" width=120><br><sub>Lucas LECLERC</sub>](https://github.com/Intermarch3) |
| :--------------------------------------------------------------------------------------------------------------------: |

<h2 align="center">Organization</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align="center">
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different platforms, and give a star 🌟 to PoC's repositories.
