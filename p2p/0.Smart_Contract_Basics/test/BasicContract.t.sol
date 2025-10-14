// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {BasicContract} from "../src/basicContract.sol";
import {BaseTest} from "./utils/BaseTest.t.sol";

/**
 * @title BasicContractTest
 * @dev Comprehensive test suite for BasicContract
 * @notice Tests all functionality including ownership, whitelist management, and access control
 */
contract BasicContractTest is BaseTest {
    BasicContract public basicContract;

    // Events to test
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    function setUp() public override {
        super.setUp();
        // Deploy contract as DEPLOYER
        basicContract = new BasicContract();
    }

    // ============================
    // Constructor Tests
    // ============================

    function testConstructorSetsOwner() public view {
        assertEq(
            basicContract.owner(),
            DEPLOYER,
            "Owner should be set to deployer"
        );
    }

    function testConstructorWhitelistsOwner() public view {
        assertTrue(
            basicContract.isWhitelisted(DEPLOYER),
            "Deployer should be automatically whitelisted"
        );
        assertTrue(
            basicContract.whitelist(DEPLOYER),
            "Deployer should be in whitelist mapping"
        );
    }

    // ============================
    // Ownership Tests
    // ============================

    function testSetOwnerChangesOwner() public {
        // Only owner can call setOwner
        basicContract.setOwner(BOB);

        assertEq(basicContract.owner(), BOB, "Owner should be changed to BOB");
    }

    function testSetOwnerCanOnlyBeCalledByOwner() public {
        // Test that non-owner cannot change ownership
        switchUser(ALICE);

        expectRevertWithMessage("Only owner can call this function");
        basicContract.setOwner(ALICE);
    }

    function testSetOwnerWithZeroAddress() public {
        basicContract.setOwner(address(0));

        assertEq(
            basicContract.owner(),
            address(0),
            "Owner can be set to zero address"
        );
    }

    // ============================
    // Whitelist Management Tests
    // ============================

    function testAddToWhitelistByOwner() public {
        basicContract.addToWhitelist(ALICE);

        assertTrue(
            basicContract.isWhitelisted(ALICE),
            "ALICE should be whitelisted"
        );
        assertTrue(
            basicContract.whitelist(ALICE),
            "ALICE should be in whitelist mapping"
        );
    }

    function testAddToWhitelistByNonOwner() public {
        switchUser(ALICE);

        expectRevertWithMessage("Only owner can call this function");
        basicContract.addToWhitelist(BOB);
    }

    function testRemoveFromWhitelistByOwner() public {
        // First add ALICE to whitelist
        basicContract.addToWhitelist(ALICE);
        assertTrue(
            basicContract.isWhitelisted(ALICE),
            "ALICE should be whitelisted initially"
        );

        // Then remove her
        basicContract.removeFromWhitelist(ALICE);
        assertFalse(
            basicContract.isWhitelisted(ALICE),
            "ALICE should be removed from whitelist"
        );
        assertFalse(
            basicContract.whitelist(ALICE),
            "ALICE should not be in whitelist mapping"
        );
    }

    function testRemoveFromWhitelistByNonOwner() public {
        // First add ALICE to whitelist as owner
        basicContract.addToWhitelist(ALICE);

        // Try to remove as non-owner
        switchUser(BOB);
        expectRevertWithMessage("Only owner can call this function");
        basicContract.removeFromWhitelist(ALICE);
    }

    function testRemoveOwnerFromWhitelist() public {
        // Owner can remove themselves from whitelist
        basicContract.removeFromWhitelist(DEPLOYER);
        assertFalse(
            basicContract.isWhitelisted(DEPLOYER),
            "Owner should be able to remove themselves"
        );
    }

    // ============================
    // Whitelist Query Tests
    // ============================

    function testIsWhitelistedForNonWhitelistedAddress() public view {
        assertFalse(
            basicContract.isWhitelisted(ALICE),
            "ALICE should not be whitelisted initially"
        );
        assertFalse(
            basicContract.whitelist(ALICE),
            "ALICE should not be in whitelist mapping initially"
        );
    }

    function testIsWhitelistedView() public view {
        // Test that isWhitelisted is a view function (doesn't change state)
        uint256 gasStart = gasleft();
        basicContract.isWhitelisted(ALICE);
        uint256 gasEnd = gasleft();

        // View functions should use minimal gas when called externally
        assertLt(
            gasStart - gasEnd,
            10000,
            "View function should use minimal gas"
        );
    }

    // ============================
    // Access Control Tests
    // ============================

    function testOnlyOwnerModifier() public {
        switchUser(ALICE);

        // Test addToWhitelist
        expectRevertWithMessage("Only owner can call this function");
        basicContract.addToWhitelist(BOB);

        // Test removeFromWhitelist
        expectRevertWithMessage("Only owner can call this function");
        basicContract.removeFromWhitelist(DEPLOYER);
    }

    function testOwnerCanCallRestrictedFunctions() public {
        // Owner should be able to call onlyOwner functions
        basicContract.addToWhitelist(ALICE);
        basicContract.removeFromWhitelist(ALICE);

        // No reverts expected
        assertTrue(true, "Owner should be able to call restricted functions");
    }

    // ============================
    // Edge Cases and Security Tests
    // ============================

    function testAddSameAddressMultipleTimes() public {
        // Adding same address multiple times should work
        basicContract.addToWhitelist(ALICE);
        basicContract.addToWhitelist(ALICE);
        basicContract.addToWhitelist(ALICE);

        assertTrue(
            basicContract.isWhitelisted(ALICE),
            "ALICE should remain whitelisted"
        );
    }

    function testRemoveNonWhitelistedAddress() public {
        // Removing non-whitelisted address should work (sets false to false)
        assertFalse(
            basicContract.isWhitelisted(ALICE),
            "ALICE should not be whitelisted initially"
        );

        basicContract.removeFromWhitelist(ALICE);
        assertFalse(
            basicContract.isWhitelisted(ALICE),
            "ALICE should still not be whitelisted"
        );
    }

    function testWhitelistZeroAddress() public {
        // Test adding zero address to whitelist
        basicContract.addToWhitelist(address(0));
        assertTrue(
            basicContract.isWhitelisted(address(0)),
            "Zero address should be whitelistable"
        );
    }

    // ============================
    // Ownership Transfer Attack Simulation
    // ============================

    function testOwnershipTransfer() public {
        // Test legitimate ownership transfer
        assertEq(
            basicContract.owner(),
            DEPLOYER,
            "Initially DEPLOYER should be owner"
        );

        // Owner transfers to CHARLIE
        basicContract.setOwner(CHARLIE);
        assertEq(basicContract.owner(), CHARLIE, "CHARLIE should be new owner");

        // Now CHARLIE can control the whitelist
        switchUser(CHARLIE);
        basicContract.addToWhitelist(address(0x999));
        assertTrue(
            basicContract.isWhitelisted(address(0x999)),
            "CHARLIE should be able to add to whitelist"
        );

        // Original owner can't control anything anymore
        switchUser(DEPLOYER);
        expectRevertWithMessage("Only owner can call this function");
        basicContract.addToWhitelist(ALICE);
    }

    // ============================
    // Gas Usage Tests
    // ============================

    function testGasUsageAddToWhitelist() public {
        uint256 gasBefore = gasleft();
        basicContract.addToWhitelist(ALICE);
        uint256 gasUsed = gasBefore - gasleft();

        assertLt(gasUsed, 50000, "addToWhitelist should use less than 50k gas");
    }

    function testGasUsageRemoveFromWhitelist() public {
        basicContract.addToWhitelist(ALICE);

        uint256 gasBefore = gasleft();
        basicContract.removeFromWhitelist(ALICE);
        uint256 gasUsed = gasBefore - gasleft();

        assertLt(
            gasUsed,
            30000,
            "removeFromWhitelist should use less than 30k gas"
        );
    }

    // ============================
    // Fuzz Tests
    // ============================

    function testFuzzAddToWhitelist(address randomAddress) public {
        // Skip zero address and precompiled contracts
        vm.assume(randomAddress != address(0));
        vm.assume(uint160(randomAddress) > 10);

        basicContract.addToWhitelist(randomAddress);
        assertTrue(
            basicContract.isWhitelisted(randomAddress),
            "Random address should be whitelisted"
        );
    }

    function testFuzzSetOwner(address randomOwner) public {
        basicContract.setOwner(randomOwner);
        assertEq(
            basicContract.owner(),
            randomOwner,
            "Owner should be set to random address"
        );
    }

    function testFuzzRemoveFromWhitelist(address randomAddress) public {
        vm.assume(randomAddress != address(0));
        vm.assume(uint160(randomAddress) > 10);

        // First add to whitelist
        basicContract.addToWhitelist(randomAddress);
        assertTrue(basicContract.isWhitelisted(randomAddress));

        // Then remove
        basicContract.removeFromWhitelist(randomAddress);
        assertFalse(
            basicContract.isWhitelisted(randomAddress),
            "Random address should be removed from whitelist"
        );
    }

    // ============================
    // Integration Tests
    // ============================

    function testCompleteWorkflow() public {
        // Complete workflow test

        // 1. Initial state
        assertTrue(
            basicContract.isWhitelisted(DEPLOYER),
            "Deployer should be whitelisted initially"
        );
        assertEq(
            basicContract.owner(),
            DEPLOYER,
            "Deployer should be owner initially"
        );

        // 2. Add users to whitelist
        basicContract.addToWhitelist(ALICE);
        basicContract.addToWhitelist(BOB);

        assertTrue(
            basicContract.isWhitelisted(ALICE),
            "ALICE should be whitelisted"
        );
        assertTrue(
            basicContract.isWhitelisted(BOB),
            "BOB should be whitelisted"
        );

        // 3. Remove one user
        basicContract.removeFromWhitelist(ALICE);
        assertFalse(
            basicContract.isWhitelisted(ALICE),
            "ALICE should be removed"
        );
        assertTrue(
            basicContract.isWhitelisted(BOB),
            "BOB should still be whitelisted"
        );

        // 4. Transfer ownership (vulnerability)
        basicContract.setOwner(BOB);
        assertEq(basicContract.owner(), BOB, "BOB should be new owner");

        // 5. New owner can control whitelist
        switchUser(BOB);
        basicContract.addToWhitelist(CHARLIE);
        assertTrue(
            basicContract.isWhitelisted(CHARLIE),
            "BOB should be able to add CHARLIE"
        );

        // 6. Old owner can't control anything
        switchUser(DEPLOYER);
        expectRevertWithMessage("Only owner can call this function");
        basicContract.addToWhitelist(ALICE);
    }
}
