// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";

/**
 * @title BaseTest
 * @dev Base test contract providing common test utilities and user addresses
 */
contract BaseTest is Test {
    // Test user addresses
    address internal constant DEPLOYER = address(0x1);
    address internal constant ALICE = address(0x2);
    address internal constant BOB = address(0x3);
    address internal constant CHARLIE = address(0x4);

    function setUp() public virtual {
        // Set up test environment
        vm.startPrank(DEPLOYER);
    }

    function switchUser(address user) internal {
        vm.stopPrank();
        vm.startPrank(user);
    }

    function expectRevertWithMessage(string memory message) internal {
        vm.expectRevert(abi.encodeWithSignature("Error(string)", message));
    }
}
