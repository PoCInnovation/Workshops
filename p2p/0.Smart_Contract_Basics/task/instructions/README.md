# Task 1: Complete Smart Contract Development Cycle

In this task, you'll learn the complete workflow of smart contract development, from setup to deployment. By the end, you'll have created, tested, and optionally deployed your first smart contract.

## Overview

**Estimated Time**: 45-60 minutes (+ 15 minutes for bonus)

**What You'll Learn**:
- Professional smart contract development setup
- Creating and structuring Solidity contracts
- Writing comprehensive tests with Foundry
- Local blockchain deployment and interaction
- **Bonus**: Deploying on Sepolia testnet

**What You'll Build**:
- A `SimpleStorage` smart contract with advanced features
- Comprehensive test suite
- Working development environment

---

## Step 1: Install Foundry

**Foundry** is a modern, fast, and powerful toolkit for Ethereum development written in Rust.

### For macOS and Linux:
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### For Windows:
1. Install [Git Bash](https://gitforwindows.org/) if you haven't already
2. Run the same command in Git Bash:
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### Verify Installation:
```bash
forge --version
cast --version
anvil --version
```

You should see version numbers for each tool.

> **Troubleshooting**: If commands are not found, restart your terminal and try again.

---

## Step 2: Initialize Foundry Project

### Create Your Project:
```bash
forge init smart-contract-basics
cd smart-contract-basics
```

This creates a new directory with the following structure:
```
smart-contract-basics/
├── foundry.toml          # Foundry configuration
├── src/                  # Smart contracts
│   └── Counter.sol
├── test/                 # Test files
│   └── Counter.t.sol
├── script/               # Deployment scripts
│   └── Counter.s.sol
└── lib/                  # Dependencies
```

### Test the Setup:
```bash
forge build
```

This should compile the default `Counter` contract successfully.

---

## Step 3: Clean Up Unnecessary Files

We'll remove the default files and create our own:

```bash
# Remove default files
rm src/Counter.sol
rm test/Counter.t.sol
rm script/Counter.s.sol
```

Verify the cleanup:
```bash
ls src/     # Should be empty
ls test/    # Should be empty
ls script/  # Should be empty
```

---

## Step 4: Create Your Smart Contract

### Create the SimpleStorage Contract:

Create `src/SimpleStorage.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract poc {
    // Mapping to track if users have called the function
    mapping(address => bool) private hasCalledFunction;
    
    /**
     * @dev Sets the caller's status to true in the mapping
     */
    function callFunction() public {
        hasCalledFunction[msg.sender] = true;
    }
    
    /**
     * @dev Checks if a user has called the function
     * @param _user The user address to check
     * @return true if the user has called callFunction(), false otherwise
     */
    function hasUserCalled(address _user) public view returns (bool) {
        return hasCalledFunction[_user];
    }
}
```

### Compile Your Contract:
```bash
forge build
```

You should see a successful compilation message.

---

## Step 5: Create Comprehensive Tests

Create `test/SimpleStorage.t.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/SimpleStorage.sol";

contract SimpleStorageTest is Test {
    poc private simpleStorage;
    address private user1;
    address private user2;
    
    // Setup function runs before each test
    function setUp() public {
        user1 = address(0x1);
        user2 = address(0x2);
        
        simpleStorage = new poc();
    }
    
    // Test that initially no user has called the function
    function testInitialState() public {
        assertEq(simpleStorage.hasUserCalled(address(this)), false);
        assertEq(simpleStorage.hasUserCalled(user1), false);
        assertEq(simpleStorage.hasUserCalled(user2), false);
    }
    
    // Test calling the function sets user status to true
    function testCallFunction() public {
        // Initially false
        assertEq(simpleStorage.hasUserCalled(address(this)), false);
        
        // Call the function
        simpleStorage.callFunction();
        
        // Should now be true
        assertEq(simpleStorage.hasUserCalled(address(this)), true);
    }
    
    
    // Test different users can call the function independently
    function testMultipleUsersCalling() public {
        // Initially all false
        assertEq(simpleStorage.hasUserCalled(address(this)), false);
        assertEq(simpleStorage.hasUserCalled(user1), false);
        assertEq(simpleStorage.hasUserCalled(user2), false);
        
        // User 1 calls function
        vm.prank(user1);
        simpleStorage.callFunction();
        
        // Only user1 should be true
        assertEq(simpleStorage.hasUserCalled(address(this)), false);
        assertEq(simpleStorage.hasUserCalled(user1), true);
        assertEq(simpleStorage.hasUserCalled(user2), false);
        
        // Test contract calls function
        simpleStorage.callFunction();
        
        // Now test contract and user1 should be true
        assertEq(simpleStorage.hasUserCalled(address(this)), true);
        assertEq(simpleStorage.hasUserCalled(user1), true);
        assertEq(simpleStorage.hasUserCalled(user2), false);
        
        // User 2 calls function
        vm.prank(user2);
        simpleStorage.callFunction();
        
        // Now all should be true
        assertEq(simpleStorage.hasUserCalled(address(this)), true);
        assertEq(simpleStorage.hasUserCalled(user1), true);
        assertEq(simpleStorage.hasUserCalled(user2), true);
    }
    
    // Test calling function multiple times doesn't change result
    function testMultipleCalls() public {
        // Call once
        simpleStorage.callFunction();
        assertEq(simpleStorage.hasUserCalled(address(this)), true);
        
        // Call again
        simpleStorage.callFunction();
        assertEq(simpleStorage.hasUserCalled(address(this)), true);
        
        // Still true after multiple calls
        simpleStorage.callFunction();
        assertEq(simpleStorage.hasUserCalled(address(this)), true);
    }
    
    // Test mapping behavior with random addresses
    function testRandomAddresses() public {
        address randomAddr = address(0x999);
        
        // Random address hasn't called function
        assertEq(simpleStorage.hasUserCalled(randomAddr), false);
        
        // After random address calls function
        vm.prank(randomAddr);
        simpleStorage.callFunction();
        
        // Should be true for random address, false for others
        assertEq(simpleStorage.hasUserCalled(randomAddr), true);
        assertEq(simpleStorage.hasUserCalled(address(this)), false);
    }
}
```

---

## Step 6: Run Tests

### Run All Tests:
```bash
forge test
```

### Run Tests with Verbose Output:
```bash
forge test -vvv
```

### Run Specific Test:
```bash
forge test --match-test testCallFunction
```

### Expected Output:
You should see something like:
```
Running 5 tests for test/SimpleStorage.t.sol:SimpleStorageTest
[PASS] testCallFunction() (gas: 29834)
[PASS] testInitialState() (gas: 8543)
[PASS] testMultipleCalls() (gas: 51234)
[PASS] testMultipleUsersCalling() (gas: 89651)
[PASS] testRandomAddresses() (gas: 32456)
Test result: ok. 5 passed; 0 failed; finished in 7.21ms
```

If all tests pass, congratulations! Your smart contract is working correctly.

---

## Step 7: Test on Local Blockchain

### Start Local Blockchain:
```bash
anvil
```

This starts a local Ethereum node. You should see:
- 10 test accounts with private keys
- RPC endpoint (usually `http://127.0.0.1:8545`)

**Keep this terminal open!**

### Deploy Contract (in a new terminal):
```bash
cd smart-contract-basics

# Copy one of the private keys from anvil output
export PRIVATE_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"

# Deploy the contract
forge create --private-key $PRIVATE_KEY src/SimpleStorage.sol:poc
```

### Copy the Contract Address:
From the output, copy the "Deployed to:" address. For example:
```
Deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Interact with Your Contract:
```bash
# Set the contract address
export CONTRACT_ADDRESS="0x5FbDB2315678afecb367f032d93F642f64180aa3"

# Check if you have called the function initially (should be false/0x0)
cast call $CONTRACT_ADDRESS "hasUserCalled(address)" "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

# Call the function to set your status to true
cast send --private-key $PRIVATE_KEY $CONTRACT_ADDRESS "callFunction()"

# Check if you have called the function now (should be true/0x1)
cast call $CONTRACT_ADDRESS "hasUserCalled(address)" "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

# Check someone else's status (should still be false/0x0)
cast call $CONTRACT_ADDRESS "hasUserCalled(address)" "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
```

---

## ✅ Validation Checklist

Before moving to the bonus, make sure you have:

- [ ] Successfully installed Foundry
- [ ] Created a new Forge project
- [ ] Cleaned up default files
- [ ] Created the `SimpleStorage.sol` contract
- [ ] Created comprehensive tests in `SimpleStorage.t.sol`
- [ ] All tests pass when running `forge test`
- [ ] Successfully deployed to local blockchain
- [ ] Successfully interacted with the deployed contract

---

## 🎉 BONUS: Deploy on Sepolia Testnet

**Prerequisites**: Ask the workshop organizer for test ETH on Sepolia!

### 1. Set Up MetaMask
1. Install [MetaMask](https://metamask.io/) browser extension
2. Create a new wallet or import existing one
3. **Save your seed phrase securely!**
4. Add Sepolia network to MetaMask:
   - Network Name: `Sepolia Testnet`
   - RPC URL: `https://sepolia.infura.io/v3/YOUR_KEY` (we'll use Alchemy)
   - Chain ID: `11155111`
   - Currency Symbol: `ETH`

### 2. Get Alchemy API Key
1. Sign up at [Alchemy](https://dashboard.alchemy.com/)
2. Create new app:
   - Name: `Smart Contract Workshop`
   - Chain: `Ethereum`
   - Network: `Ethereum Sepolia`
3. Copy your API key and RPC URL

### 3. Get Test ETH
**Ask the workshop organizer** for Sepolia test ETH in your MetaMask address.

### 4. Deploy to Sepolia

Create a `.env` file:
```bash
# Your MetaMask private key (export from MetaMask)
PRIVATE_KEY=your_private_key_here

# Your Alchemy RPC URL
RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY
```

**⚠️ Never commit private keys to git! Add `.env` to `.gitignore`**

Deploy:
```bash
# Load environment variables
source .env

# Deploy to Sepolia
forge create --private-key $PRIVATE_KEY --rpc-url $RPC_URL src/SimpleStorage.sol:poc --legacy
```

### 5. Verify on Etherscan
1. Copy your contract address
2. Go to [Sepolia Etherscan](https://sepolia.etherscan.io/)
3. Search for your contract address
4. See your contract on the public blockchain!

### 6. Interact with Sepolia Contract
```bash
# Call the function on Sepolia
cast send --private-key $PRIVATE_KEY --rpc-url $RPC_URL $CONTRACT_ADDRESS "callFunction()"

# Check if you called the function (should return true/0x1)
cast call --rpc-url $RPC_URL $CONTRACT_ADDRESS "hasUserCalled(address)" "YOUR_WALLET_ADDRESS"
```

---

## 🎊 Congratulations!

You've successfully completed the entire smart contract development cycle:

✅ **Environment Setup**: Professional development tools  
✅ **Smart Contract Creation**: Simple but powerful Solidity contract  
✅ **Comprehensive Testing**: 5 test cases covering all functionality  
✅ **Local Deployment**: Tested on local blockchain  
✅ **Bonus - Mainnet-like Deployment**: Live on Sepolia testnet  

### What You've Learned:
- **Foundry toolchain**: Modern Ethereum development
- **Solidity fundamentals**: Mappings, functions, events, and state variables
- **Data structures**: Boolean mappings for tracking user interactions
- **Testing best practices**: Comprehensive test coverage with edge cases
- **Deployment workflow**: Local and testnet deployment
- **Blockchain interaction**: Reading and writing to smart contracts

### Next Steps:
- **Explore DeFi**: Learn about tokens (ERC-20), AMMs, lending protocols
- **Try NFTs**: Create ERC-721 contracts for unique digital assets  
- **Build a dApp**: Create a frontend to interact with your contracts
- **Learn security**: Understand common vulnerabilities and best practices
- **Join the community**: Participate in hackathons and open-source projects

**Welcome to the world of blockchain development! 🌟**

---

## Troubleshooting

### Common Issues:

**Foundry installation fails:**
- Try using a different terminal
- Check your internet connection
- For Windows, make sure you're using Git Bash

**Tests fail:**
- Check for typos in contract and test files
- Make sure you're in the correct directory
- Run `forge build` first to check for compilation errors

**Local deployment fails:**
- Make sure `anvil` is running in another terminal
- Check that you copied the private key correctly
- Verify the contract compiled successfully

**Sepolia deployment fails:**
- Ensure you have test ETH in your wallet
- Double-check your private key and RPC URL
- Try adding `--legacy` flag to the deploy command

**Need Help?**
- Ask the workshop organizer
- Check Foundry documentation: [book.getfoundry.sh](https://book.getfoundry.sh/)
- Review error messages carefully - they usually contain helpful information