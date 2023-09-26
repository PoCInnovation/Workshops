// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/ERC20.sol";

uint256 constant INITIAL_SUPPLY = 100000;
address constant WALLET = 0x8F5a1Ccf3D0DE62a25bf594c14e0967fF66461DD;
address constant WALLET2 = 0x741f5aF7C827B22D99478a132B4B547a3CAC1C0A;
uint256 constant TOKEN_TRANSFERRED = 100;
uint256 constant TOKEN_APPROVED = 200;

contract CounterTest is Test {
    ERC20 public erc20;

    function setUp() public {
        erc20 = new ERC20(INITIAL_SUPPLY);
    }

    function testTotalSupply() public {
        uint256 totalSupply = erc20.totalSupply();
        assertEq(totalSupply, INITIAL_SUPPLY * 10 ** erc20.decimals());
    }

    function testBalanceOf() public {
        uint256 balanceOf = erc20.balanceOf(address(this));
        assertEq(balanceOf, INITIAL_SUPPLY * 10 ** erc20.decimals());
    }

    function testTransfer() public {
        assertTrue(erc20.transfer(WALLET, TOKEN_TRANSFERRED));

        uint256 balanceOf = erc20.balanceOf(WALLET);
        assertEq(balanceOf, TOKEN_TRANSFERRED);
    }

    function testApproveAndAllowance() public {
        assertTrue(erc20.approve(WALLET2, TOKEN_APPROVED));

        uint256 allowance = erc20.allowance(address(this), WALLET2);
        assertEq(allowance, TOKEN_APPROVED);
    }

    function testTransferFrom() public {
        assertTrue(erc20.approve(WALLET2, TOKEN_APPROVED));
        uint256 allowance = erc20.allowance(address(this), WALLET2);
        assertEq(allowance, TOKEN_APPROVED);

        vm.startPrank(WALLET2);

        assertTrue(erc20.transferFrom(address(this), WALLET2, TOKEN_APPROVED));
        uint256 balanceOf = erc20.balanceOf(WALLET2);
        assertEq(balanceOf, TOKEN_APPROVED);

        vm.stopPrank();
    }
}
