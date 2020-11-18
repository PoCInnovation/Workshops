# Workshop 1 - Ethereum Smart Contract with Solidity

During this workshop, we will create a smart contract that can run onto the Ethereum Virutal Machine.
We'll achieve this in 3 steps : write, compile and finally test & deploy it on a local network.
You'll test the deployment so this is why it is done in one step only.

A smart contract is an application that can run on a blockchain.
The most popular blockchain that supports smart contract is Ethereum, that's the reason we are using this one.

### Step 0 : Initialization

First, clone the repository from <TEMPLATE_PROJECT_LINK>.
It contains all necessary files, but for the moment they're empty :wink:

The project structure should be the following :

```
.
├── compile.js
├── contracts
│   └── Inbox.sol
├── deploy.js
├── interact.js
├── out
│   ├── abi.json
│   └── bytecode.json
├── package.json
└── test
    └── inbox.test.js

```

Then, run `npm install` at the root of the cloned repository.

### Step 1 : Solidity & the contract

As said before, the programming langage you'll use to write the smart contract is Solidity.
It has a similar syntax as JavaScript, but it is strongly-typed.
You can learn more about it [here](https://docs.soliditylang.org/en/v0.7.4/).

The goal of this contract, as it's name suggests, is to create a placeholder for a message just like an inbox.
So your `Inbox` contract must respect the following rules :

- The initial message must be set to "PoC".

- Everyone must be able to access the message stored in the contract.

- Everyone must be able to update the message stored in the contract.

- There must be a private counter of the number of times the message has been updated.

### Step 2 : Compiling the contract

No that you've wrote the contract, you need to compile it !
The compiler used is `solc`, and has already been included to your `package.json` dependencies file.

You need to do the following steps to get a bytecode & an ABI (Application Binary Interface) of the contract :

- Retrieve the file content.

- Give the content to the compiler. Note that the `compile.js` file already contains a variable, but the `sources['Inbox.sol']` field is empty.

- Compile and extract the bytecode & ABI from the result.

- Write the bytecode & ABI to the corresponding file in the `out` folder.

As you've probably guessed, the bytecode contains a compiled version of your contract that will be executed by the EVM.
The ABI will be usefull later by Web3 on to interact with the contract.

### Step 3 : Tests using mocha & chai

Time to test !
The tests are very important while writing a smart contract, because once they're deployed on a real blockchain, you can not update or delete it.
So make sure that everything is working as expected before deploying a contract.

You'll use mocha as a testing framework and chai as an assertion library.

Two more things before you start :

- If you've looked at the packages in the dependencies, you probably saw `ganache`.
    Ganache will launch a virtual Ethereum network on your local environment.
    There is also a gui version available [here](https://www.trufflesuite.com/ganache).

- The ABI is an interface between you (the developper) and the EVM.
    If you take a look at its content, and it's highly recommended, you'll see your contract functions name & variables.
    Web3, an API developped by the Ethereum fundation, is responsible for connecting your javascript code with the contract bytecode actually running on an Ethereum node.
    Web3 requires a provider to work properly. We'll use the ganache provider for this workshop, but in the real world it could be the [Metamask](https://metamask.io/) one.

Okay, time to test !

- The first thing you want to test is that the contract deployment works correctly.
    For this part, you must know that deploying a contract is just a method from the `Contract` subclass of the `Web3` class.
    A contract must be deployed by an account. Hopefully, Ganache creates a list of 10 accounts whenever it is loaded.

- Then, test all of your functions.
    Note that when you declare a `public` variable in Solidity, it automatically creates an accessor for this variable (a `call`).
    But whenever you call a function that modifies the contract state (i.e. stored variables), you must send a transaction to the targetted function from an account.

### Bonus

Please consider using the online Remix Editor available [here](https://remix.ethereum.org/) to make the first bonus.

- Do you remember the private counter you've created before ?
    Make your contract inherit from the [OpenZeppelin](https://openzeppelin.com/) Owner contract you can find in the `bonus` folder.

### Authors
