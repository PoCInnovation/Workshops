// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "forge-std/Test.sol";
import "../src/proxys/proxy_v1.sol";
import "../src/proxys/proxy_v2.sol";
import "../src/proxys/proxy_ownable_upgradable.sol";
import "../src/implementations/Counter_v1.sol";
import "../src/implementations/Counter_v2.sol";

contract ProxyTest is Test {
    PROXY_V1 public proxy_v1;
    PROXY_V2 public proxy_v2;
    COUNTER_V1 public counter;
    COUNTER_V2 public counter_v2;
    PROXY_OWNABLE_UPGRADABLE public proxy_ownable_upgradable;
    address public nonOwner;

    function setUp() public {
        counter = new COUNTER_V1();
        counter_v2 = new COUNTER_V2();
        proxy_v1 = new PROXY_V1(address(counter));
        proxy_v2 = new PROXY_V2(address(counter));
        proxy_ownable_upgradable = new PROXY_OWNABLE_UPGRADABLE("v1", address(counter));
        nonOwner = address(0x1234);
    }

    function testCounter() public {
        assertEq(counter.total(), 0, "Counter should be 0");
        counter.add();
        assertEq(counter.total(), 1, "Counter should be 1");
    }

    function testProxy_v1() public {
        uint256 total = COUNTER_V1(address(proxy_v1)).total();
        assertEq(total, 0, "total should be 0");
        COUNTER_V1(address(proxy_v1)).add();
        total = COUNTER_V1(address(proxy_v1)).total();
        assertEq(total, 1, "total should be 1");
    }

    function testProxy_v2() public {
        uint256 total = COUNTER_V1(address(proxy_v2)).total();
        assertEq(total, 0, "total should be 0");
        COUNTER_V1(address(proxy_v2)).add();
        total = COUNTER_V1(address(proxy_v2)).total();
        assertEq(total, 1, "total should be 1");
        // change implementation
        proxy_v2.setImplementation(address(counter_v2));
        COUNTER_V2(address(proxy_v2)).add(2);
        total = COUNTER_V2(address(proxy_v2)).total();
        assertEq(total, 3, "total should be 3");
    }

    function testProxyUpgrade() public {
        assertEq(fixNullBytes(proxy_ownable_upgradable.getVersion()), "v1", "version should be v1");
        COUNTER_V1(address(proxy_ownable_upgradable)).add();
        assertEq(COUNTER_V1(address(proxy_ownable_upgradable)).total(), 1, "should be 1");
        proxy_ownable_upgradable.upgradeTo("v2", address(counter_v2));
        assertEq(fixNullBytes(proxy_ownable_upgradable.getVersion()), "v2", "version should be v2");
        assertEq(COUNTER_V2(address(proxy_ownable_upgradable)).total(), 1, "total should be 1");
        COUNTER_V2(address(proxy_ownable_upgradable)).add(3);
        assertEq(COUNTER_V2(address(proxy_ownable_upgradable)).total(), 4, "total should be 4");
    }

    function testUpgradeToAsNonOwner() public {
        // Attempt to upgrade implementation with a non-owner account
        vm.prank(nonOwner);
        vm.expectRevert("Caller is not the owner");
        proxy_ownable_upgradable.upgradeTo("v2", address(counter_v2));
        assertEq(proxy_ownable_upgradable.implementation(), address(counter), "Implementation should not change for non-owner");
    }

    // remove null bytes from string
    function fixNullBytes(string memory str) internal pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        uint256 trimIndex = 0;

        // Find the position of the first null byte
        while (trimIndex < strBytes.length && strBytes[trimIndex] != 0) {
            trimIndex++;
        }

        // Create a new string with the trimmed length
        bytes memory trimmedBytes = new bytes(trimIndex);
        for (uint256 i = 0; i < trimIndex; i++) {
            trimmedBytes[i] = strBytes[i];
        }

        return string(trimmedBytes);
    }
}