// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "forge-std/Test.sol";
import "../src/proxies/ProxyV1.sol";
import "../src/proxies/ProxyV2.sol";
import "../src/proxies/ProxyOwnableUpgradable.sol";
import "../src/implementations/CounterV1.sol";
import "../src/implementations/CounterV2.sol";

contract ProxyTest is Test {
    CounterV1 public counter;
    CounterV2 public counter_v2;
    ProxyOwnableUpgradable public proxy_ownable_upgradable;
    address public nonOwner;

    function setUp() public {
        counter = new CounterV1();
        counter_v2 = new CounterV2();
        proxy_ownable_upgradable = new ProxyOwnableUpgradable(address(counter));
        nonOwner = address(0x1234);
    }

    function testProxyUpgrade() public {
        CounterV1(address(proxy_ownable_upgradable)).add();
        assertEq(CounterV1(address(proxy_ownable_upgradable)).total(), 1, "should be 1");
        proxy_ownable_upgradable.upgradeTo(address(counter_v2));
        assertEq(proxy_ownable_upgradable.getImplementation(), address(counter_v2), "implementation should be CounterV2");
        assertEq(CounterV2(address(proxy_ownable_upgradable)).total(), 1, "total should be 1");
        CounterV2(address(proxy_ownable_upgradable)).add(3);
        assertEq(CounterV2(address(proxy_ownable_upgradable)).total(), 4, "total should be 4");
    }

    function testUpgradeToAsNonOwner() public {
        // Attempt to upgrade implementation with a non-owner account
        vm.prank(nonOwner);
        vm.expectRevert("Caller is not the owner");
        proxy_ownable_upgradable.upgradeTo(address(counter_v2));
        assertEq(proxy_ownable_upgradable.getImplementation(), address(counter), "Implementation should not change for non-owner");
    }

    function testTransferProxyOwnership() public {
        // Transfer ownership to nonOwner
        proxy_ownable_upgradable.transferProxyOwnership(nonOwner);
        assertEq(proxy_ownable_upgradable.getOwner(), nonOwner, "Owner should be nonOwner");
    }
}