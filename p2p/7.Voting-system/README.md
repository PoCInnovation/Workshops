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
>💡 The structure should have 2 variables, `name` and `voteCount`. I let you guess their types.

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

- In the `dApp` folder, create a `.env` file at the root (if it doesn't exist) and add the following line: `VITE_ADDRESS=<your_contract_address>`
> 💡 The contract address appears after deployment. Make sure to include the `0x` prefix when copying the address.

### ✔️ **Validation**:

Once you have done this, you should now be able to see the parameters you entered when deploying the contract in the dApp.

### 📚 **Documentation**:

-  [Anvil](https://book.getfoundry.sh/anvil/)
-  [Deploy a Smart Contract local on Anvil with Foundry in 2 min](https://youtu.be/e5QmJaamdPE)

## Step 3: Code the contract

### 📑 **Description**:

Now that your contract is deployed and visible in the dApp, it's time to add the voting logic! In this step, you'll implement:
- A system to track who has already voted
- A function to vote for a proposal
- A function to determine which proposal has the most votes

Feel free to redeploy your contract with `forge` after each modification to test your changes in the dApp!

### 📌 **Tasks**:

#### 1. Create the `Voter` structure and mapping

To prevent the same address from voting multiple times, we need to track each voter's state.

- Create a `Voter` structure containing:
  - A boolean `hasVoted` (indicates if this person has already voted)
  - A `uint` `votedProposalId` (the identifier of the proposal this person voted for)
- Create a mapping to associate each address with its voter state
> 💡 A mapping allows you to store data associated with a key (here, the voter's address). Use `msg.sender` to get the address of the person calling the function.

#### 2. Configure authentication for the dApp

Before coding the `vote` function, you need to configure a private key so the dApp can send transactions.

- In the `dApp` folder, add the following line to your `.env` file: `VITE_PRIVATE_KEY_ACCOUNT=<an_anvil_private_key>`
> 💡 When you launch Anvil, several accounts with their private keys are displayed. Copy one of these private keys **with the `0x` prefix** and paste it into your `.env` file. The `viem` library requires the `0x` prefix. Restart the dApp after this modification.

#### 3. Implement the `vote` function

This function allows a user to vote for a proposal.

- Create a `vote` function that takes a `uint` as parameter (the proposal id)
- Check that the voter hasn't already voted:
  - If `voters[msg.sender].hasVoted` is `true`, use `revert("Already Voted.")` to throw an error
  > 💡 In Solidity, use `revert()` to signal errors. The error message will be caught by the frontend.
- Check that the proposal id is valid:
  - The id must be greater than or equal to 0
  - The id must be less than the length of the `proposals` array
  > 💡 You can use `require()` to check these conditions
- If everything is valid:
  - Mark the voter as having voted: `voters[msg.sender].hasVoted = true`
  - Record the chosen proposal id: `voters[msg.sender].votedProposalId = <proposal_id>`
  - Increment the vote counter: `proposals[<proposal_id>].voteCount++`

#### 4. Implement the `winningProposal` function

This function determines which proposal received the most votes.

- Create a `winningProposal` function that returns a `uint` (the winning proposal id)
- Loop through all proposals in the `proposals` array
- For each proposal, compare its `voteCount` with the current maximum
- Return the id of the proposal with the highest `voteCount`
> 💡 In case of a tie, you can return the first proposal with the maximum votes. Use a `for` loop to iterate through the array.

### ✔️ **Validation**:

To verify that everything works correctly:

1. **Check the display**: In the dApp, you should see all the proposals you created during deployment
2. **Test voting**: Click on a proposal and vote for it. The vote counter should increment
3. **Test double-vote protection**: Try voting a second time with the same account. You should see the message "You have already voted."
4. **Check the winner**: After voting for several proposals, the proposal with the most votes should be highlighted in green

If all these steps work, congratulations, you've created your first smart contract! 🎉

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
