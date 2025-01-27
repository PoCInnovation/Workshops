// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol" as Openzeppelin;

contract ERC20 is Openzeppelin.ERC20 {
    constructor(uint256 totalSupply) Openzeppelin.ERC20("PoC Coin", "POC") {
	    _mint(msg.sender, totalSupply * 10 ** decimals());
    }
}
