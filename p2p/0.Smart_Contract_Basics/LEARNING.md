# Smart Contract Basics - Learning Guide

This learning guide covers all the fundamental concepts you need to understand before building your first smart contract. Each section includes external links for deeper learning.

## Table of Contents

1. [What is a Smart Contract?](#what-is-a-smart-contract)
2. [Address System](#address-system)
3. [Mapping System](#mapping-system)
4. [Functions in Smart Contracts](#functions-in-smart-contracts)
5. [Ownership Pattern](#ownership-pattern)
6. [Local Blockchain Deployment](#local-blockchain-deployment)
7. [Sepolia Testnet Deployment](#sepolia-testnet-deployment)

---

## What is a Smart Contract?

### Definition
A **smart contract** is a self-executing contract with the terms of the agreement directly written into code. Once deployed on a blockchain, it runs automatically when predetermined conditions are met, without the need for intermediaries.

### Why Use Smart Contracts?
- **Trust**: No need to trust a third party - the code is the law
- **Transparency**: All transactions are visible on the blockchain
- **Immutability**: Once deployed, the contract cannot be changed
- **Cost-effective**: Eliminates intermediaries and reduces costs
- **Global access**: Available 24/7 from anywhere in the world

### Real-world Examples
- **DeFi (Decentralized Finance)**: Lending, borrowing, trading without banks
- **NFTs**: Unique digital ownership certificates
- **Supply Chain**: Track products from manufacturing to delivery
- **Insurance**: Automatic payouts based on conditions (flight delays, etc.)

### 📚 **Learn More**:
- [Ethereum.org - Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/)
- [What are Smart Contracts? - Coinbase](https://www.coinbase.com/learn/crypto-basics/what-is-a-smart-contract)

---

## Address System

### Understanding Addresses
In blockchain, **addresses** are unique identifiers that represent accounts. There are two main types:

#### User Addresses (Externally Owned Accounts - EOAs)
- **Controlled by humans** with private keys
- Can **initiate transactions**
- Example: `0x742d35Cc6673C30f4C3B2b3b5D3e36F4b80E5F2b`
- **Length**: Always 40 hexadecimal characters (20 bytes)

#### Smart Contract Addresses
- **Controlled by code**, not humans
- **Cannot initiate transactions** by themselves
- Generated when a contract is deployed
- Example: `0xA0b86a33E6d8a5b8C5D2E8F3A4B7C9D8E5F2A1B0`

### How Addresses Work
- Addresses are derived from public keys using cryptographic hash functions
- Each address has a corresponding **balance** (amount of cryptocurrency)
- Transactions move value between addresses
- Smart contracts can **hold funds** and **interact with other contracts**

### 📚 **Learn More**:
- [Ethereum Addresses Explained](https://ethereum.org/en/developers/docs/accounts/)
- [Understanding Ethereum Accounts](https://docs.alchemy.com/docs/understanding-ethereum-accounts)

---

## Mapping System

### What are Mappings?
**Mappings** are like dictionaries or hash tables in smart contracts. They store **key-value pairs** and provide efficient data retrieval.

```solidity
mapping(address => uint256) public balances;
// This creates a mapping where:
// - Key: Ethereum address
// - Value: number (balance)
```

### Common Use Cases
- **Token balances**: `mapping(address => uint256) balances`
- **User permissions**: `mapping(address => bool) isAdmin`
- **Ownership records**: `mapping(uint256 => address) tokenOwner`
- **Nested mappings**: `mapping(address => mapping(address => uint256)) allowances`

### Key Properties
- **Default values**: Non-existent keys return the default value (0 for numbers, false for booleans)
- **Gas efficient**: Very cheap to read and write
- **Cannot be iterated**: You cannot loop through all keys
- **Always public or private**: Cannot be external or internal

### Example in Practice
```solidity
contract SimpleBank {
    mapping(address => uint256) private balances;
    
    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }
    
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}
```

### 📚 **Learn More**:
- [Solidity Mappings Documentation](https://docs.soliditylang.org/en/v0.8.21/types.html#mapping-types)
- [Understanding Mappings in Solidity](https://ethereum.org/en/developers/tutorials/mappings-in-solidity/)

---

## Functions in Smart Contracts

### Function Visibility
Functions in Solidity have different **visibility levels** that control who can call them:

#### Public
- Can be called by **anyone** (externally or internally)
- Automatically creates a **getter function** for state variables
```solidity
function publicFunction() public returns (uint256) {
    return someValue;
}
```

#### External
- Can **only be called from outside** the contract
- More **gas efficient** than public for external calls
```solidity
function externalFunction() external returns (uint256) {
    return someValue;
}
```

#### Internal
- Can only be called **within the contract** or **inherited contracts**
```solidity
function internalFunction() internal returns (uint256) {
    return someValue;
}
```

#### Private
- Can only be called **within the same contract**
```solidity
function privateFunction() private returns (uint256) {
    return someValue;
}
```

### State Mutability
Functions can have different **state mutability** modifiers:

#### View
- **Reads** blockchain state but **doesn't modify** it
- **No gas cost** when called externally
```solidity
function getBalance() public view returns (uint256) {
    return balances[msg.sender];
}
```

#### Pure
- **Neither reads nor modifies** state
- Performs calculations only with input parameters
```solidity
function add(uint256 a, uint256 b) public pure returns (uint256) {
    return a + b;
}
```

#### Payable
- Can **receive Ether** along with the function call
```solidity
function deposit() public payable {
    balances[msg.sender] += msg.value;
}
```

### Function Modifiers
**Modifiers** add conditions or behaviors to functions:
```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Only owner can call");
    _;
}

function withdraw() public onlyOwner {
    // Only owner can execute this
}
```

### 📚 **Learn More**:
- [Solidity Functions Documentation](https://docs.soliditylang.org/en/v0.8.21/contracts.html#functions)
- [Function Visibility and State Mutability](https://ethereum.org/en/developers/docs/smart-contracts/anatomy/#functions)

---

## Ownership Pattern

### What is Ownership?
The **ownership pattern** is a common design where certain functions can only be executed by a designated **owner** address. This provides **administrative control** over the contract.

### Why Use Ownership?
- **Security**: Restrict critical functions to trusted addresses
- **Upgrades**: Allow owner to update contract parameters
- **Emergency controls**: Pause or modify contract in emergencies
- **Access control**: Different permission levels for different users

### Basic Implementation
```solidity
contract Ownable {
    address private _owner;
    
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    
    constructor() {
        _owner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender);
    }
    
    modifier onlyOwner() {
        require(_owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }
    
    function owner() public view returns (address) {
        return _owner;
    }
    
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}
```

### Common Patterns
- **Single Owner**: One address controls the contract
- **Multi-sig**: Multiple addresses must approve actions
- **Role-based**: Different roles with different permissions
- **DAO governance**: Token holders vote on decisions

### Security Considerations
- **Owner key security**: If private key is lost/stolen, contract control is lost
- **Centralization risk**: Single point of failure
- **Transparency**: Users must trust the owner won't abuse power

### 📚 **Learn More**:
- [OpenZeppelin Ownable Contract](https://docs.openzeppelin.com/contracts/4.x/access-control)
- [Access Control Patterns](https://ethereum.org/en/developers/docs/smart-contracts/security/#access-control)

---

## Local Blockchain Deployment

### What is a Local Blockchain?
A **local blockchain** is a blockchain network running entirely on your computer. It simulates the real blockchain environment but **doesn't require real money** and runs **much faster**.

### Benefits of Local Development
- **Fast testing**: Instant transactions, no waiting
- **Free**: No gas fees required
- **Debugging**: Better error messages and debugging tools
- **Iteration**: Quickly test changes without cost
- **Privacy**: Your transactions aren't public

### Tools for Local Development

#### Foundry (Recommended)
**Foundry** is a modern toolkit for Ethereum development written in Rust.

**Installation:**
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

**Key Commands:**
- `forge init`: Create new project
- `forge build`: Compile contracts
- `forge test`: Run tests
- `anvil`: Start local blockchain
- `forge create`: Deploy contracts

#### Ganache
**Ganache** provides a personal blockchain for development.
- Graphic interface available
- Built-in block explorer
- Account management

#### Hardhat
**Hardhat** is a development environment for Ethereum software.
- Built-in local network
- Excellent debugging tools
- Large ecosystem of plugins

### Local Deployment Process
1. **Start local blockchain**: `anvil`
2. **Get test accounts**: Copy private keys from output
3. **Compile contract**: `forge build`
4. **Deploy**: `forge create --private-key <PRIVATE_KEY> src/Contract.sol:Contract`
5. **Interact**: Use `cast` commands or write scripts

### 📚 **Learn More**:
- [Foundry Book](https://book.getfoundry.sh/)
- [Anvil Local Node](https://book.getfoundry.sh/anvil/)
- [Local Development Best Practices](https://ethereum.org/en/developers/local-environment/)

---

## Sepolia Testnet Deployment

### What is Sepolia Testnet?
**Sepolia** is an Ethereum test network that simulates the main Ethereum network. It uses **test ETH** (worthless) instead of real ETH, making it perfect for testing before mainnet deployment.

### Why Use Testnets?
- **Realistic environment**: Behaves exactly like mainnet
- **Free testing**: Test ETH has no value
- **Public testing**: Others can interact with your contracts
- **Final validation**: Last step before mainnet deployment

### Testnet vs Mainnet
| Aspect | Testnet | Mainnet |
|--------|---------|---------|
| **Cost** | Free (test ETH) | Real money |
| **Speed** | Similar to mainnet | ~12 second blocks |
| **Risk** | No financial risk | Real financial risk |
| **Purpose** | Testing | Production |

### Prerequisites for Sepolia Deployment

#### 1. Wallet Setup (MetaMask)
- Download [MetaMask](https://metamask.io/)
- Create new wallet or import existing
- **Secure your seed phrase** (12-24 words)
- Add Sepolia network to MetaMask

#### 2. RPC Provider (Alchemy)
- Sign up at [Alchemy](https://dashboard.alchemy.com/)
- Create new app for Ethereum Sepolia
- Copy your **API key** and **RPC URL**
- Free tier provides sufficient requests for testing

#### 3. Test ETH from Faucet
- Visit [Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)
- Enter your wallet address
- Receive free test ETH (usually requires social verification)

### Deployment Process
1. **Setup environment variables**:
```bash
# .env file
PRIVATE_KEY="your_private_key_here"
RPC_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"
```

2. **Deploy contract**:
```bash
source .env
forge create src/Contract.sol:Contract \
    --private-key $PRIVATE_KEY \
    --rpc-url $RPC_URL
```

3. **Verify deployment**:
```bash
cast call $CONTRACT_ADDRESS "someFunction()" --rpc-url $RPC_URL
```

4. **Interact with contract**:
```bash
cast send $CONTRACT_ADDRESS "someFunction()" \
    --private-key $PRIVATE_KEY \
    --rpc-url $RPC_URL
```

### Best Practices
- **Never share private keys** or commit them to version control
- **Use environment variables** for sensitive data
- **Test thoroughly locally** before testnet deployment
- **Verify contracts** on Etherscan for transparency
- **Keep small amounts** of test ETH in deployment wallet

### After Deployment
- **Contract verification**: Verify source code on [Sepolia Etherscan](https://sepolia.etherscan.io/)
- **Frontend integration**: Connect your dApp to the deployed contract
- **User testing**: Let others interact with your contract
- **Security audit**: Have code reviewed before mainnet

### 📚 **Learn More**:
- [Sepolia Testnet Guide](https://ethereum.org/en/developers/docs/networks/#sepolia)
- [MetaMask Setup Guide](https://metamask.zendesk.com/hc/en-us/articles/360015489531)
- [Alchemy Documentation](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask)
- [Contract Verification Guide](https://docs.etherscan.io/tutorials/verifying-contracts-programmatically)

---

## Next Steps

Now that you understand these fundamental concepts, you're ready to:

1. **Set up your development environment** with Foundry
2. **Create your first smart contract** using these concepts
3. **Deploy locally** for testing
4. **Deploy on Sepolia** for public testing
5. **Build a frontend** to interact with your contract

Remember: **Start simple** and gradually add complexity as you become more comfortable with these concepts.

---

## Additional Resources

### Documentation
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Ethereum Developer Portal](https://ethereum.org/en/developers/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)

### Learning Platforms
- [CryptoZombies](https://cryptozombies.io/)
- [Alchemy University](https://university.alchemy.com/)
- [Buildspace](https://buildspace.so/)

### Tools
- [Remix IDE](https://remix.ethereum.org/) - Browser-based development
- [Foundry](https://book.getfoundry.sh/) - Command-line toolkit
- [Hardhat](https://hardhat.org/) - JavaScript-based development

### Community
- [Ethereum Stack Exchange](https://ethereum.stackexchange.com/)
- [r/ethdev](https://reddit.com/r/ethdev)
- [Ethereum Discord](https://discord.gg/ethereum-org)