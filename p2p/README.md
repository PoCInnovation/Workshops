# Workshop - Foundry

In this workshop you will learn how to use foundry's tools to: 


:heavy_check_mark: create a solidity developement environnement.

:heavy_check_mark: tests your smart-contracts.

:heavy_check_mark: deploy and interract with your contracts on a local or test network.

## Step 0: Initialization

${SETUP}
`forge init workshop --no-commit`

## Step 1: 

First of all:
- Add a constructor to set a default value of `number`.
- Modify the increment function to make it increase tha value of `number` by the value passed as an argument.

Now test your function by modifying the `test/Counter.t.sol` file, the file must test the increment function and the setNumber one.

now test with `forge test` at the root of your repo.

## Step 2:

For the step we'll use the `anvil` command to start a local test blockchain.

Now you will:

- Deploy your contract on the local blockchain.
> add doc

- Call the contract to query the value of `number`
> add doc

- Call the contract to set the value of `number` to 4242
> add doc

## Step 3:

${EXPLICATION ABI (`forge inspect Counte abi`) + JSON-RPC}

Now create a `Contract.sol` file and add the following contract to it.
```Solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Random {
    uint256 private rand;

    constructor() {
        rand = uint256(blockhash(block.number-1));
    }

    function guess(uint256 _number) public view returns(bool) {
        require(_number == rand, "It is not the right number, try again. :)");
        return true;
    }
}
```

Now deploy and interract with the storage of the `random` contract to determine the value of `rand`.

When you think it's done you can try it by calling the `guess()` function with your number as an arg, if it is the good one this will return `true`.

## Step 4:

For this step we will interract with a testnets.

So you will need to create a wallet.
> add doc
And claim some goerli's faucets.
> add doc

Using `infura` you can host a node and connect to it by the given RPC url.
> add doc

Now deploy your contracts on the goerli testnets and interract with it !

## Authors

| [<img src="https://github.com/Doozers.png?size=85" width=85><br><sub>Ismaël FALL</sub>](https://github.com/Doozers) |
|:-------------------------------------------------------------------------------------------------------------------:|
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

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
