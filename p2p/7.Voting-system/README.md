  # Workshop 6 - Voting System

✔️ Write a decentralized voting system

✔️ Deploy your smart contract on a local testnet using [Anvil](https://book.getfoundry.sh/anvil/) shipped with [Foundry](https://book.getfoundry.sh/)

✔️ Display your smart contract on a dApp

## Introduction

A smart contract is a self-executing program that runs on a blockchain, automatically enforcing the terms of an agreement when predefined conditions are met. With smart contracts, it's possible to build decentralized systems, such as a transparent and secure voting system, where the rules are coded into the contract, and the results are immutable and verifiable by everyone.

In this workshop we'll learn the basics of solidity with a classic use case: a voting system. At once, we'll use Foundry coupled with Anvil to deploy our contract on a local testnet and gradually integrate it on a front-end template.

## Step 0: Initialization

All the required information to install the workshop's dependencies are given in the [setup.md](./setup.md). To launch the dApp :

- Clone the "dApp" folder, afterward:

```bash
cd dApp
npm install
npm run dev
```

If everything went well, you should read "No proposals yet.", now let's code !

## Step 1 : Create the contract

### 📑 **Description**:

First, we need to create the core smart contract that will power our decentralized voting system. For now, you're just going to focus on the base of the smart contract: the constructor.

### 📌 **Tasks**:

Remove the files from `script/`, `src/` and `test` directories. Create `VotingSystem.sol` in the `src/` folder.

- Setup the file by adding this header
  ```solidity
  // SPDX-License-Identifier: UNLICENSED
  pragma solidity ^0.8.26;
  ```

- Create a contract named `VotingSystem`
- Declare a structure named `Proposal`
>💡 The structure should have 2 variables, `name` and `voSteCount`. I let you guess their types.

- On deployment, the contract should take an array of strings as parameters and store them in a `public` array of `Proposals`.
>💡 A constructor is an optional function that is executed upon contract deployment, you must create one to complete the previous task.

### ✔️ **Validation**:

After implementing this correctly, paste the `VotingSystem.t.sol` file from the `util/` folder from the repository and write:

```bash
forge test
```

if the two tests are good, you can move on the second step !

### 📚 **Documentation**:

- [Header](https://docs.soliditylang.org/en/latest/layout-of-source-files.html)
- [Constructors](https://docs.soliditylang.org/en/v0.8.27/contracts.html#constructors)

## Step 2: Deploy and integrate it

### 📑 **Description**:

In this step you'll focus on the deployment and the integration part of your smart contract. For quick and easy deployment, you'll use [Anvil](https://book.getfoundry.sh/anvil/) to create a local testnet.

### 📌 **Tasks**:

- Using Anvil and forge, deploy your smart contract on a local testnet.
>💡 On a successful deployment, contract address appear next to the `deployed to` field.

- Paste the address of your deployed contract into the environment file at the root of the dApp folder named `VITE_ADDRESS`.

### ✔️ **Validation**:

Once you have done this, you should now be able to see the parameters you entered when deploying the contract in the dApp.

### 📚 **Documentation**:

-  [Anvil](https://book.getfoundry.sh/anvil/)
-  [Deploy a Smart Contract local on Anvil with Foundry in 2 min](https://youtu.be/e5QmJaamdPE)

## Step 3: Code the contract

### 📑 **Description**:

Crucial step! I'll leave you to code the rest of the contract yourself, so you can see the results bit by bit. Feel free to redeploy your contract whenever you like with forge!

### 📌 **Tasks**:

- Create a structure `Voter` containing a boolean named `voted` and an uint `id`.
- Code the `vote` function. It should take the id of the proposal in parameter.
    - Check if the voter had already voted and if the id is correct.
      > 💡 If the voter had already voted, return the string 'Already Voted.'
    - Add a `voteCount` for the proposal.

> 💡 These functions require a wallet address. If you've did the previous step correctly, you have account available to use. Put one of the private keys in the `.env` file.

- Code the `winningProposal` function, returning the proposal id with the most `voteCount`.

### ✔️ **Validation**:

If you can see all the proposals, vote for one and the winner is highlighted in green, congratulations, you have just made your first smart contract !

## To go further

You've just created a simple voting system smart contract ! If you want to go further you can add some feature to your contract and styling the dApp !

## Authors

| [<img src="https://github.com/Sacharbon.png?size=85" width=85><br><sub>Sacha Dujardin</sub>](https://github.com/Sacharbon) |
| :------------------------------------------------------------------------------------------------------------------------: |
<h2 align=center>
Organization
</h2>

<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
