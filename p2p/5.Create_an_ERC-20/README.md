# Workshop - Create an ERC-20

✔ What is an ERC-20

✔ Make your own implementation of an ERC-20

✔ Deploy an ERC-20 on an Polygon testnet

## Introduction in a few lines

### What is an ERC-20?

**ERC-20**, which stands for "Ethereum Request for Comments 20," is a **technical standard** used to **create** and **manage** tokens based on the **Ethereum blockchain**. ERC-20 tokens are **digital assets** that can represent **various forms** of value, such as financial assets, loyalty points, digital goods, and more.

### Why it is useful?

The **primary advantage** of ERC-20 lies in its ease of **adoption** and **interoperability**. This standard **defines a set of rules** and functions that allow developers to **create tokens compatible with the Ethereum network** and existing Ethereum wallets. This means that users can store, transfer, and exchange different types of ERC-20 tokens **using the same wallets and interfaces**.

### What technology is used to do this?

**Solidity** is a **programming language** specifically **designed for developing smart contracts on the Ethereum blockchain**. It enables developers to **create self-executing, autonomous, and verifiable contracts** that define rules and interactions within a **decentralized environment**. Solidity is based on **JavaScript-like syntax** and offers features such as state management, control structures, events, and calls to other contracts, enabling the **creation of complex and secure solutions** on the Ethereum blockchain. If you've never done Solidity before, take a look at the [Solidity Essentials](./Solidity.md) to understand the basics. You can also look at the [official documentation](https://docs.soliditylang.org/en/v0.8.21/).

## Step 0 - Setup

Please refer to the [SETUP.md](./SETUP.md) file.

## Step 1 - Let's start creating our token

### 📑 **Description**:

In this step, you will put in place the necessary foundations for the creation of an ERC-20.

### 📌 **Tasks**:

- First, delete the `script` folder we will not need it as well as the `Counter.sol` and `Counter.t.sol` files.
- Create a folder `interface` in the `src` folder.
- Copy the `IERC20.sol` file which is in the `utils` folder to the `interface` folder, previously created.
    - This file contains the ERC20 [interface](https://docs.soliditylang.org/en/v0.8.21/contracts.html#interfaces), all the functions we are going to implement.
- Now, create the `ERC20.sol` file in `src`, it is in this file that we will create our ERC-20.
- Finally, create the `ERC20` contract [inheriting](https://docs.soliditylang.org/en/v0.8.21/contracts.html#inheritance) the `IERC20` interface.

> ⚠️ Don't forget the import and the header of the file

### 📚 **Documentation**:

- [Interface](https://docs.soliditylang.org/en/v0.8.21/contracts.html#interfaces)
- [Inheritance](https://docs.soliditylang.org/en/v0.8.21/contracts.html#inheritance)

## Step 2 - Let's go on

### 📑 **Description**:

In this step, you will create the variables, the mappings and the constructor necessary for an ERC-20.

### 📌 **Tasks**:

- Create in the `ERC20` contract the following variables:
    - All variables except `_totalSupply` will be defined on declaration
    - `name` which corresponds to the name of the token
    - `symbol` which corresponds to the abbreviation of the token name
    - `decimals` which corresponds to the number of decimals that the token can have
    - `_totalSupply` which corresponds to the total token created
> ⚠️ Take care about the [visibility](https://docs.soliditylang.org/en/v0.8.21/contracts.html#state-variable-visibility) of your variables! The names of the variables can give you clues 😉

- Create in the `ERC20` contract the following [mappings](https://docs.soliditylang.org/en/v0.8.21/types.html#mapping-types):
    - `_balances` which corresponds to the balance of all wallets
    - `_allowances` which corresponds to the number of tokens whose owner has authorized the spender to use
> ⚠️ Take care about the [visibility](https://docs.soliditylang.org/en/v0.8.21/contracts.html#state-variable-visibility) of your mappings!

- Initialize `_totalSupply` in the [constructor](https://docs.soliditylang.org/en/v0.8.21/contracts.html#constructor) of the contract.
> ⚠️ Don't forget to assign `_totalSupply` to a wallet and to emit an event
> All the events you need to emit are already defined in the [interface](./utils/IERC20.sol). Find the right one.

### 📚 **Documentation**:

- [Variable visibility](https://docs.soliditylang.org/en/v0.8.21/contracts.html#state-variable-visibility)
- [Mapping](https://docs.soliditylang.org/en/v0.8.21/types.html#mapping-types)
- [Constructor](https://docs.soliditylang.org/en/v0.8.21/contracts.html#constructor)

## Step 3 - Let's get into the hard

### 📑 **Description**:

In this step, you will do the most important part: the implementation of the standard functions. Implementing standard functions in your ERC-20 token contract is a crucial element to ensure compatibility, interoperability, and adoption of your token within the Ethereum ecosystem.

### 📌 **Tasks**:

- Implement in the `ERC20` contract all the functions present in the `IERC20` interface.
    - You can copy function prototypes directly into the contract.

> ⚠️ Don't forget to update the visibility of the functions and to add the `override` modifier

### 👨‍🏫 **Advices**:

- Read the doc of the [ERC-20: Token Standard](https://eips.ethereum.org/EIPS/eip-20), it will help you to understand the purpose of the different functions.
- Take care about the [visibility](https://docs.soliditylang.org/en/v0.8.21/contracts.html#state-variable-visibility) of your functions!
- Use if into revert or require, to handle [error cases](https://docs.soliditylang.org/en/v0.8.21/contracts.html#errors-and-the-revert-statement).

### 📚 **Documentation**:

- [ERC-20: Token Standard](https://eips.ethereum.org/EIPS/eip-20)
- [Function visibility](https://docs.soliditylang.org/en/v0.8.21/contracts.html#function-visibility)
- [Error cases](https://docs.soliditylang.org/en/v0.8.21/contracts.html#errors-and-the-revert-statement)

## Step 4 - Let's test it

### 📑 **Description**:

In this step, you will test, with [foundry](https://book.getfoundry.sh/), the functions that you have implemented previously. Any contract published on the blockchain is immutable, it cannot therefore be modified after its deployment. Testing the implementation of an ERC-20 contract is therefore essential to ensure the safety, compliance and reliability.

### 📌 **Tasks**:

- Copy the `ERC20.t.sol` file which is in the `utils` folder to the `test` folder.
    - This file contains the [foundry tests](https://book.getfoundry.sh/forge/fuzz-testing) that allow you to test all the functions of an ERC-20.
- Execute the command `forge test` to run the tests.
    - You can use `forge test -vvvv` to show more information.

### 📚 **Documentation**:

- [Foundry](https://book.getfoundry.sh/)
- [Foundry tests](https://book.getfoundry.sh/forge/fuzz-testing)

### ✔️ **Validation**:

If you have correctly implemented the functions, you should have something like this:
> ⚠️ To validate a test, you must validate the previous one

```bash
Running 5 tests for test/ERC20.t.sol:ERC20Test
[PASS] testApproveAndAllowance() (gas: 31150)
[PASS] testBalanceOf() (gas: 11065)
[PASS] testTotalSupply() (gas: 10862)
[PASS] testTransferFrom() (gas: 49405)
[PASS] testTransfer() (gas: 36491)
Test result: ok. 5 passed; 0 failed; finished in 1.72ms
```

If not, fix the function implementation.

## Step 5 - Let's deploy it

### 📑 **Description**:

In this step, you will deploy your ERC-20 on [Polygon's Mumbai Testnet](https://www.alchemy.com/overviews/mumbai-testnet). Testing our contract on a testnet allows us to deploy and test our application on the Polygon network, a layer two of Ethereum, without having to spend real money. Be careful, this step requires a lot of tools. The first part of the tasks consists of the implementation of these tools and the second one of the deployment of the ERC-20.

### 📌 **Tasks**:

- Download [Metamask](https://metamask.io) and create an account, if you don't already have one.
- Create your API key on [Alchemy](https://dashboard.alchemy.com/apps).
    - Sign in.
    - Click on `Create new app`.
    - Enter a name for your API key.
    - Select `Polygon PoS` chain and `Polygon Mumbai` network.
    - Click on `Create app`.
    - Now, click on `API Key` and you can see your API key as well as your RPC URL in `HTTPS`.
- Add Mumbai Testnet network to Metamask, [here](https://www.alchemy.com/overviews/mumbai-testnet#how-to-get-started-using-the-mumbai-testnet) a doc to explain how to do it.
- Go to [Mumbai faucet](https://mumbaifaucet.com), enter your wallet address and send you MATIC.
- Copy the `.env` file which is in the `utils` folder to your project and complete the variables except the last one.

</br>

The setup is now finished, let's go to the interesting part: deploy our ERC-20.

- Load the environment variables:
```
source .env
```

- Deploy your ERC-20:
```bash
forge create src/ERC20.sol:ERC20 --private-key "$PRIVATE_KEY" --rpc-url $RPC_URL --constructor-args 100000 --legacy
```
> 💡 You can replace `100000` by the total number of tokens you want

- Copy the address of `Deployed to` and paste it into the `.env` file in the `CONTRACT_ADDRESS` variable.

- Load again the environment variables:
```
source .env
```
- Check that the contract has been deployed correctly:
```bash
cast call $CONTRACT_ADDRESS "totalSupply()" --rpc-url $RPC_URL
```
> 💡 This should display `100000` in hexadecimal

Now, you can go in Metamask on Mumbai Testnet, click on `Import tokens` and put the `CONTRACT_ADDRESS`. Congratulation! You have your own token in your metamask wallet. You can now do what you want with your tokens.

</br>

Some examples of possible interactions:

- To transfer tokens to another address:
```bash
cast send $CONTRACT_ADDRESS "transfer(address, uint256)" $WALLET 100 --private-key $PRIVATE_KEY --rpc-url $RPC_URL
```
- To see the balance of an address:
```bash
cast call $CONTRACT_ADDRESS "balanceOf(address)" $WALLET --rpc-url $RPC_URL
```
- Approve an address to transfer tokens:
```bash
cast send $CONTRACT_ADDRESS "approve(address, uint256)" $WALLET 200 --private-key $PRIVATE_KEY --rpc-url $RPC_URL
```

### 📚 **Documentation**:

- [Mumbai Testnet](https://www.alchemy.com/overviews/mumbai-testnet)
- [Metamask](https://metamask.io)
- [Add Mumbai Testnet to Metamask](https://www.alchemy.com/overviews/mumbai-testnet#how-to-get-started-using-the-mumbai-testnet)
- [Mumbai faucet](https://mumbaifaucet.com/)
- [Foundry deploy](https://book.getfoundry.sh/forge/deploying)
- [Cast command](https://book.getfoundry.sh/cast/)

## Conclusion

You just created your own ERC-20, well done! During this workshop, you learned what an ERC-20 was but you also made your own implementation. You can find a famous implementation [here](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol), if you want, you can compare your implementation with and possibly add features on yours.

I hope you enjoyed the workshop!

## To go further

You have discovered what an ERC-20 is but there are still many other concepts to discover, here are some examples:
- Discovering what is an [ERC-721 contracts](https://eips.ethereum.org/EIPS/eip-721) (NFT)
- Deploy your ERC-20 on other blockchain, like [Sepolia](https://www.alchemy.com/overviews/sepolia-testnet)

## Authors

| [<img src="https://github.com/Nfire2103.png" width=120><br><sub>Nathan FLATTIN</sub>](https://github.com/Nfire2103) |
| :-----------------------------------------------------------------------------------------------------------------: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
