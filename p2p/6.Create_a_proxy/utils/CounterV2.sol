// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract CounterV2 {
    uint256 public _count;

    constructor() {
        _count = 0;
    }

    function add(uint8 nb) public {
        _count += nb;
    }

    function total() public view returns (uint256) {
        return _count;
    }
}