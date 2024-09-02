// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract CounterV1 {
    uint256 public count;

    constructor() {
        count = 0;
    }

    function add() public {
        count += 1;
    }

    function total() public view returns (uint256) {
        return count;
    }
}