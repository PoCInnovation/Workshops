# Workshop - Smart Contract Basics

✔ 🌐 **Understand Blockchain and Addresses**
✔ 🛠️ **Create Your First Smart Contract**
✔ 🚀 **Deploy and Test on Blockchain**

## Introduction

Welcome to the Smart Contract Basics workshop! This workshop is designed for beginner developers who want to learn blockchain development from scratch. You'll understand how blockchain works, create your first smart contract, and deploy it on a real blockchain network.

## Prerequisites

This workshop requires **no prior blockchain knowledge**. All you need is:
- A computer with internet connection
- Basic programming understanding (helpful but not required)
- Willingness to learn new concepts

## Getting Started

1. **Follow the [Setup Guide](./SETUP.md)** to prepare your environment
2. **Read the [Blockchain Fundamentals](./learn/blockchain.md)** first to understand the basics
3. **Learn [Solidity](./learn/solidity.md)** programming language
4. **Understand [Smart Contracts](./learn/smart-contracts.md)** concepts
5. **Complete the [Practical Tasks](#-tasks-to-create-basiccontractsol)** step by step
6. **Ask for help** when you need it - blockchain development has a learning curve!

## What You'll Build

By the end of this workshop, you'll have:
- ✅ Understanding of blockchain and smart contracts
- ✅ Your own smart contract created from scratch
- ✅ A working development environment (Foundry)
- ✅ Experience with testing smart contracts
- ✅ A deployed contract on blockchain

Let's get started! 🚀

## Setup

Before starting the workshop, please follow the setup instructions:

### 📋 [Setup Guide](./SETUP.md)
Complete environment setup including:
- Installing Foundry
- Setting up your development environment
- Verifying installation

## Learning Path

This workshop is organized in a progressive learning path:

### 📖 [Learn Blockchain](./learn/blockchain.md)
Start here to understand the core concepts:
- What is blockchain and how it works
- Understanding addresses (users vs smart contracts)
- Why blockchain is revolutionary

### 📝 [Learn Solidity](./learn/solidity.md)
Learn the programming language for smart contracts:
- Solidity syntax and basics
- Smart contract structure
- Common patterns and best practices

### 🔗 [Learn Smart Contracts](./learn/smart-contracts.md)
Deep dive into smart contract development:
- Smart contract lifecycle
- Testing strategies
- Deployment and interaction

### 🛠️ Practical task

#### 📋 Tasks to create BasicContract.sol

### 📑 **Task 1: Create Contract Structure with SPDX License and Pragma Directive**

**Description:**
Every Solidity contract must start with proper licensing and version declaration. The SPDX license identifier is crucial for legal compliance and the pragma directive ensures compatibility with specific Solidity compiler versions. This task establishes the foundation of your smart contract.

**What you'll learn:** Contract structure, licensing requirements, and version management in Solidity.

### 📌 **Tasks:**

- Create a new Solidity file named `BasicContract.sol`
- Add the SPDX license identifier at the very top of your file
- Declare the Solidity version using pragma directive (use ^0.8.30)
- Create the contract declaration with a descriptive name
- Remember: The license and pragma must be the very first lines of the file

### 📚 **Documentation:**
- [Solidity basics](./learn/solidity.md#contracts)
- [SPDX License Identifiers](https://spdx.org/licenses/)
- [Pragma Directive](https://docs.soliditylang.org/en/latest/layout-of-source-files.html#pragma)

---

### 📑 **Task 2: Declare State Variables for Ownership and Whitelist Management**

**Description:**
State variables are the backbone of smart contracts - they store data permanently on the blockchain. Understanding how to declare and use them is fundamental to smart contract development. In this task, you'll create the core data structures for ownership and whitelist management.

**What you'll learn:** State variables, visibility modifiers (public), address type, and mapping data structures.

### 📌 **Tasks:**

- Declare an `owner` variable of type `address` with public visibility
- Create a `whitelist` mapping that associates addresses with boolean values
- Consider what data you need to store permanently on the blockchain
- Think about who should be able to access these variables
- Remember: Public variables automatically generate getter functions

### 📚 **Documentation:**
- [Data types and mappings](./learn/solidity.md#data-types-and-state-variables)
- [Address system](./learn/smart-contracts.md#address-system)
- [State Variable Visibility](https://docs.soliditylang.org/en/latest/contracts.html#state-variable-visibility)

---

### 📑 **Task 3: Implement Constructor to Initialize Contract State**

**Description:**
The constructor runs only once when the contract is deployed and is essential for setting up initial state. It's where you establish the contract's initial conditions and ownership. This function is crucial for proper contract initialization.

**What you'll learn:** Constructor functions, msg.sender global variable, and contract initialization patterns.

### 📌 **Tasks:**

- Create a constructor function (no function name, just `constructor()`)
- Set the contract owner to the address that deployed the contract
- Initialize the whitelist by adding the owner to it
- Remember: constructors run only once during deployment
- The `msg.sender` contains the address of the account that deployed the contract

### 📚 **Documentation:**
- [Constructor functions](./learn/solidity.md#constructor)
- [msg.sender explained](./learn/blockchain.md#understanding-addresses)
- [Constructor Documentation](https://docs.soliditylang.org/en/latest/contracts.html#constructor)

---

### 📑 **Task 4: Create onlyOwner Modifier for Access Control**

**Description:**
Access control is critical in smart contracts. Modifiers provide a clean, reusable way to implement security checks. The onlyOwner pattern is one of the most common security patterns in smart contracts. This task teaches you how to implement proper access control.

**What you'll learn:** Function modifiers, access control patterns, require statements, and security best practices.

### 📌 **Tasks:**

- Create a modifier named `onlyOwner`
- Use `require()` to check if the caller is the owner
- Include a descriptive error message for better debugging
- Use the `_` placeholder to indicate where the function code will be inserted
- Think about what happens when the requirement fails (transaction reverts)

### 📚 **Documentation:**
- [Modifiers explained](./learn/solidity.md#modifiers)
- [Access control patterns](./learn/smart-contracts.md#ownership-pattern)
- [Modifiers Documentation](https://docs.soliditylang.org/en/latest/contracts.html#modifiers)

---

### 📑 **Task 5: Implement setOwner Function with Intentional Security Vulnerability**

**Description:**
This task demonstrates a common security vulnerability to help you understand the importance of access control. It's an educational example of what NOT to do in production contracts. This vulnerability shows how seemingly simple functions can be dangerous without proper access control.

**What you'll learn:** Security vulnerabilities, the importance of access control, and how seemingly simple functions can be dangerous.

### 📌 **Tasks:**

- Create a public function called `setOwner`
- Accept a new owner address as a parameter
- Update the owner variable
- Notice: This function intentionally lacks access control (this is the vulnerability!)
- Think about who should be able to change the owner
- Consider what could happen if anyone could call this function

> ⚠️ **Important**: This is intentionally vulnerable! In production, you would add the `onlyOwner` modifier to this function.

### 📚 **Documentation:**
- [Security vulnerabilities](./learn/smart-contracts.md#security-best-practices)
- [Function visibility](./learn/solidity.md#visibility-modifiers)
- [Smart Contract Security](https://consensys.github.io/smart-contract-best-practices/)

---

### 📑 **Task 6: Build Whitelist Management Functions (add, remove, check)**

**Description:**
Whitelist functionality is common in smart contracts for managing permissions. You'll learn how to implement CRUD operations (Create, Read, Update, Delete) for on-chain data. This task completes your smart contract with practical functionality.

**What you'll learn:** Function implementation, parameter handling, return values, view functions, and data manipulation.

### 📌 **Tasks:**

- Create `addToWhitelist()` function that adds an address to the whitelist
- Create `removeFromWhitelist()` function that removes an address
- Create `isWhitelisted()` function that checks if an address is whitelisted
- Use the `onlyOwner` modifier for functions that modify state
- Make the check function a `view` function (it doesn't modify state)
- Consider what parameters each function needs
- Remember: View functions don't modify state and are free to call

### 📚 **Documentation:**
- [Function implementation](./learn/solidity.md#functions)
- [Mapping operations](./learn/smart-contracts.md#mapping-system)
- [Function Visibility](https://docs.soliditylang.org/en/latest/contracts.html#function-visibility)

---

## 🧪 Testing Your Contract

### 📋 [Testing Utilities](./utils/)
**Important**: To test your contract properly, you need to copy the complete test file with all its contents.

**Steps to set up testing:**
1. **Copy the entire content** of `./utils/BasicContract.t.sol`
2. **Paste it** to replace your current test file
3. **Make sure** all imports and dependencies are included
4. **Run the tests** using `forge test`

The test file contains all necessary imports, setup functions, and comprehensive test cases to verify your contract works correctly.

---

#### 🎓 Key Concepts You'll Master

**Modifiers (Modifiers)**
Modifiers are reusable code blocks that can change function behavior. They're essential for implementing access control and other cross-cutting concerns in smart contracts.

**Mappings**
Mappings are key-value data structures that are extremely gas-efficient in Solidity. They're perfect for storing relationships between addresses and other data.

**msg.sender**
This global variable contains the address of the account that initiated the current transaction. It's fundamental to authentication and access control in smart contracts.

**Security Vulnerabilities**
Understanding common vulnerabilities helps you write more secure code. The setOwner function demonstrates why access control is crucial in smart contract development.

---

## Authors

| [<img src="https://github.com/L3yserEpitech.png" width=120><br><sub>Jules Lordet</sub>](https://github.com/L3yserEpitech) |
| :----------------------------------------------------------------------------------------------------------------------------: |

> 🚀 Don't hesitate to follow us on our different platforms and give a star 🌟 to PoC's repositories.