// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "forge-std/Test.sol";
import "../src/proxies/ProxyV2.sol";
import "../src/implementations/CounterV1.sol";
import "../src/implementations/CounterV2.sol";

contract ProxyTest is Test {
    ProxyV2 public proxy_v2;
    CounterV1 public counter;
    CounterV2 public counter_v2;

    function setUp() public {
        counter = new CounterV1();
        counter_v2 = new CounterV2();
        proxy_v2 = new ProxyV2(address(counter));
    }

    function testProxy_v2() public {
        uint256 total = CounterV1(address(proxy_v2)).total();
        assertEq(total, 0, "total should be 0");
        CounterV1(address(proxy_v2)).add();
        total = CounterV1(address(proxy_v2)).total();
        assertEq(total, 1, "total should be 1");
        // change implementation
        proxy_v2.setImplementation(address(counter_v2));
        CounterV2(address(proxy_v2)).add(2);
        total = CounterV2(address(proxy_v2)).total();
        assertEq(total, 3, "total should be 3");
    }
}