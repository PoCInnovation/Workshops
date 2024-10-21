// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "forge-std/Test.sol";
import "../src/proxies/ProxyV1.sol";
import "../src/implementations/CounterV1.sol";

contract ProxyTest is Test {
    ProxyV1 public proxy_v1;
    CounterV1 public counter;

    function setUp() public {
        counter = new CounterV1();
        proxy_v1 = new ProxyV1(address(counter));
    }

    function testCounter() public {
        assertEq(counter.total(), 0, "Counter should be 0");
        counter.add();
        assertEq(counter.total(), 1, "Counter should be 1");
    }

    function testProxy_v1() public {
        uint256 total = CounterV1(address(proxy_v1)).total();
        assertEq(total, 0, "total should be 0");
        CounterV1(address(proxy_v1)).add();
        total = CounterV1(address(proxy_v1)).total();
        assertEq(total, 1, "total should be 1");
    }
}