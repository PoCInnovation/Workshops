# Workshop 3 - Foundry, a toolkit for Ethereum application development

✔ How to use foundry to test your contracts.

✔ How to use Foundry to deploy your contracts on a local blockchain.

✔ How to use Foundry to access contract's level data.

✔ ️How to use Foundry to deploy your contracts on an Ethereum testnet.

## Introduction

Ethereum has introduced a major revolution in the blockchain world: smart-contracts.
Smart-contracts rely on blockchain technology to guarantee their integrity and inviolability.
They are irrevocable computer programs, most often deployed on a blockchain,
which execute a set of pre-defined instructions. Developing smart-contracts is way more different 
from developing a regular application.

## Step 0 - Setup

Please refer to the [SETUP.md](./SETUP.md) file.

## Step 1 - Forge is useful for testing

### :bookmark_tabs: **Description**:

In this step you will learn how to use foundry to test your contracts.
Before starting take a look at the generated files, specially in the `src/` & `test/` folders.
In the `src/` folder you will find the `Counter.sol` file, this is the contract you will be working on.



### :pushpin: **Tasks**:

- Add a constructor to the contract, it will be used to initialize the number value. 
    - The constructor must take a `uint256` as an argument.


- Modify the `increment` function to make it increase the value of `number` by the value passed as an argument.
    - The function must also take a `uint256` as an argument.

  
- Now test your function by modifying the `test/Counter.t.sol` file, the file must test the `increment` function and the `setNumber` one.
    - You can use the `forge test` command at the root of your project to test your contract.

> :warning: Take care about the visibility of your functions !

### :books: **Documentation**:

- [functions and constructor](https://docs.soliditylang.org/en/v0.8.13/contracts.html)
- [test with forge](https://book.getfoundry.sh/forge/writing-tests)
- [visibility](https://docs.soliditylang.org/en/v0.8.13/contracts.html#function-visibility)

### ✔️ **Validation**:
You should have a result similar to this one:<br>
```shell
Running 2 tests for test/Counter.t.sol:CounterTest
[PASS] testIncrement() (gas: 28312)
[PASS] testSetNumber(uint256) (runs: 256, μ: 26676, ~: 28387)
Test result: ok. 2 passed; 0 failed; finished in 12.26ms
```

## Step 2 - ...but not only

### :bookmark_tabs: **Description**:

In this step we'll use the `anvil` command to start a local test blockchain. We will
use it to deploy our contract and interact with it.

### :pushpin: **Tasks**:

- Start the local blockchain with `anvil`
    - This will start a local blockchain on your computer, and give you some key pairs to interact with it.

> :warning: You must not close the terminal where you started the blockchain, you can use it for the whole workshop. 
 
- Deploy your contract on the local blockchain.
    - You can use `forge` to deploy your contract.

> You will use the retrieved address to interact with your contract in the following parts.


- Call the contract to query the value of `number`.
    - You can use `cast` to query read-only function of your contract.

> In Solidity when you declare a variable as `public` it will automatically generate a getter function for you.
> So you can access the value of `number` by calling `number()`.


- Call the contract to set the value of `number` to 4242
  - You can also use `cast` to call a function of your contract.


### :books: **Documentation**:

- [anvil specifications](https://book.getfoundry.sh/reference/anvil/)
- [use forge to deploy](https://book.getfoundry.sh/forge/deploying)
- [use cast to interact with contracts](https://book.getfoundry.sh/cast/)

### ✔️ **Validation**:

After sending the transaction to modify the value of number you should see a similar output:

```shell
blockHash               0x4f9d29ee882ad03ff9f160628a32ed6cd965198e458d00d350240bdea8a7f121
blockNumber             4
cumulativeGasUsed       26394
effectiveGasPrice       3588267222
gasUsed                 26394
logs                    []
status                  1
transactionHash         0x509fd1fde780cfae293155a32dfa24c16bff2d4fb48a360050dbe7f965532985
transactionIndex        0
```
> :bulb: You can also test by querying again the value of `number` and see if it has been modified.


## Step 3 - private != private ?

### :bookmark_tabs: **Description**:

The Contract Application Binary Interface (ABI) is the standard way to 
interact with contracts in the Ethereum ecosystem,
both from outside the blockchain and for contract-to-contract interaction.
Data is encoded according to its type, as described in this specification.
The encoding is not self describing and thus requires a schema in order to decode.

> from the [solidity documentation](https://docs.soliditylang.org/en/v0.8.13/abi-spec.html)

### :pushpin: **Tasks**:

- Now create a `Contract.sol` file and add the following contract to it.
```Solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Random {
    uint256 private rand;

    constructor() {
        rand = uint256(blockhash(block.number));
    }

    function guess(uint256 _number) public view returns(bool) {
        require(_number == rand, "It is not the right number, try again. :)");
        return true;
    }

``` 


- Now deploy and interact with the storage of the `random` contract to determine the value of `rand`.
    - Your contract storage is public, declaring a variable as `private` will not prevent anyone from accessing it.
  Try to query the storage of your contract and see if you can retrieve the value of `rand`.

> Take a look at the notion of [Storage slot](https://mixbytes.io/blog/collisions-solidity-storage-layouts#:~:text=Solidity%20does%20not%20possess%20a,and%20unpacked%20on%20the%20fly.).

### :books: **Documentation**:

- [Contract ABI](https://docs.soliditylang.org/en/v0.8.13/abi-spec.html#contract-abi-specification)
- [Storage slot](https://mixbytes.io/blog/collisions-solidity-storage-layouts#:~:text=Solidity%20does%20not%20possess%20a,and%20unpacked%20on%20the%20fly.)

### ✔️ **Validation**:

To validate this step, call the function `guess` with the value of `rand` as an argument.
If it is the right number you should see the following output:

```shell
0x0000000000000000000000000000000000000000000000000000000000000001
# This mean `true`.
```


## Step 4 - Time to play outside

### :bookmark_tabs: **Description**:

During the first steps you interacted with your local blockchain, but now we will use a public one :rocket: 
Some test networks are available for you to test your contracts, they are called [testnets](https://ethereum.org/en/developers/docs/networks/).
In this step we will interact with the [Goerli](https://goerli.net/) testnet.
We will use [Infura](https://infura.io/)'s nodes to interact with the blockchain. We could also have
run our own node, but it would take too much time.

### :pushpin: **Tasks**:

- Create a [metamask](https://metamask.io/) account and fund it with some Goerli ETH.
  - You can use the [faucet](https://goerlifaucet.com/) to get some Goerli ETH.

- Create an account on [infura](https://infura.io/) and get an API key.
  - You will use this API key to interact with the Goerli testnet.

> You can now broadcast transactions to the Goerli testnet, by the endpoint `https://goerli.infura.io/v3/<YOUR_API_KEY>`.

- Now deploy and interact with your contract, like you did in the previous steps, but this time on the Goerli testnet.
> Don't forget to use your endpoint, shutdown your local blockchain to be sure you are using the Goerli testnet.

  
### :books: **Documentation**:

- [wallet](https://ethereum.org/en/wallets/)

## Conclusion

Well done! You've accomplished a lot with Foundry, and there is so much more to discover.
Refer to the [official documentation](https://book.getfoundry.sh/) to deep-dive into it :fire: 

Hope you enjoyed the workshop!

## Authors

| [<img src="https://github.com/Doozers.png?size=85" width=85><br><sub>Isma</sub>](https://github.com/Doozers) | 
|:------------------------------------------------------------------------------------------------------------:|
<h2 align=center>
Organization
</h2>
<br/>
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

> :rocket: Follow us on our different social networks, and put a star 🌟 on `PoC's` repositories.

