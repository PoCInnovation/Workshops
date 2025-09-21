# Deploy Your Smart Contract

This guide will help you deploy your `BasicContract` to both local blockchain (for testing) and Sepolia testnet (for public testing).

## Prerequisites

- ✅ Foundry installed and configured
- ✅ BasicContract.sol created and compiled
- ✅ Understanding of blockchain basics

---

## 🏠 Local Deployment with Anvil

### What is Anvil?
**Anvil** is a local Ethereum node that simulates the blockchain on your computer. It's perfect for testing because:
- ⚡ **Instant transactions** (no waiting)
- 💰 **Free** (no real money needed)
- 🔧 **Easy debugging** with better error messages
- 🔄 **Reset anytime** to start fresh

### Step 1: Start Local Blockchain

```bash
# Start anvil (local blockchain)
anvil
```

You'll see output like this:
```
Available Accounts
==================
(0) 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
(1) 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
...

Private Keys
==================
(0) 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
(1) 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
...
```

**Important**: Copy the first private key - you'll need it to deploy!
**Important**: Don't close the anvil tab

### Step 2: Deploy Your Contract

Open a **new terminal** (keep anvil running) and run:

```bash
# Deploy BasicContract
forge create basicContract.sol:BasicContract \
    --private-key $PRIVATE_KEY \
    --rpc-url http://localhost:8545
```

You'll get output like:
```
Deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

**Save this contract address** - you'll need it to interact with your contract!

### Step 3: Verify Deployment

```bash
# Check if contract is deployed
cast call 0x5FbDB2315678afecb367f032d93F642f64180aa3 "owner()" \
    --rpc-url http://localhost:8545
```

Expected output: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266` (the deployer's address)

---

## 🎮 Interact with Your Contract

Now let's test all the main functions of your BasicContract:

### Task 1: Check Initial State

```bash
# Check who is the owner
cast call $CONTRACT_ADDRESS "owner()" --rpc-url http://localhost:8545

# Check if deployer is whitelisted
cast call $CONTRACT_ADDRESS "isWhitelisted(address)" 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 \
    --rpc-url http://localhost:8545
```

**Expected**: Owner should be the deployer, and deployer should be whitelisted (true).

### Task 2: Add Address to Whitelist

```bash
# Add second account to whitelist (using owner's private key)
cast send $CONTRACT_ADDRESS "addToWhitelist(address)" $PUBLIC_ADDRESS \
    --private-key $PRIVATE_KEY \
    --rpc-url http://localhost:8545

# Verify the address was added
cast call $CONTRACT_ADDRESS "isWhitelisted(address)" $PUBLIC_ADDRESS \
    --rpc-url http://localhost:8545
```

**Expected**: Should return `true` after adding.

### Task 3: Remove Address from Whitelist

```bash
# Remove the address from whitelist
cast send $CONTRACT_ADDRESS "removeFromWhitelist(address)" $PUBLIC_ADDRESS \
    --private-key $PRIVATE_KEY \
    --rpc-url http://localhost:8545

# Verify the address was removed
cast call $CONTRACT_ADDRESS "isWhitelisted(address)" $PUBLIC_ADDRESS \
    --rpc-url http://localhost:8545
```

**Expected**: Should return `false` after removing.

### Task 4: Test Security Vulnerability

```bash
# Try to change owner using a different account (this should work - it's the vulnerability!)
cast send $CONTRACT_ADDRESS "setOwner(address)" $PUBLIC_ADDRESS \
    --private-key $PRIVATE_KEY \
    --rpc-url http://localhost:8545

# Check if owner changed
cast call $CONTRACT_ADDRESS "owner()" --rpc-url http://localhost:8545
```

**Expected**: Owner should change to the second account - this demonstrates the security vulnerability!

### Task 5: Test Access Control

```bash
# Try to add to whitelist with new owner (should work)
cast send $CONTRACT_ADDRESS "addToWhitelist(address)" $PUBLIC_ADDRESS \
    --private-key $PRIVATE_KEY \
    --rpc-url http://localhost:8545

# Try to add to whitelist with old owner (should fail)
cast send $CONTRACT_ADDRESS "addToWhitelist(address)" $PUBLIC_ADDRESS \
    --private-key $PRIVATE_KEY \
    --rpc-url http://localhost:8545
```

**Expected**: First command succeeds, second fails with "Only owner can call this function".

---

## 🌐 Sepolia Testnet Deployment

### What is Sepolia?
**Sepolia** is a public Ethereum testnet where you can deploy contracts that others can interact with. It uses **test ETH** (worthless) instead of real ETH.

### Prerequisites for Sepolia

1. **MetaMask Wallet**
   - Download [MetaMask](https://metamask.io/)
   - Create a new wallet
   - **Save your seed phrase securely!**

2. **Add Sepolia Network**
   - Open MetaMask
   - Click network dropdown → "Add network"
   - Add Sepolia testnet:
     - Network Name: `Sepolia`
     - RPC URL: `https://sepolia.infura.io/v3/YOUR_INFURA_KEY` or use public RPC
     - Chain ID: `11155111`
     - Currency Symbol: `ETH`

3. **Get Test ETH**
   - Call me !

4. **Get Alchemy RPC URL**
   - Visit [Alchemy Dashboard](https://dashboard.alchemy.com/)
   - Sign up or log in with your email
   - Click "Create new app"
   - Fill in the details:
     - **Name**: `My Smart Contract Project`
     - **Chain**: `Ethereum`
     - **Network**: `Sepolia`
   - Click "Create app"
   - Once created, click on your app
   - Click "View key" button
   - Copy the **HTTPS** URL (it looks like: `https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY`)
   - **Save this URL** - you'll use it as your RPC_URL

### Step 1: Setup Environment

Create a `.env` file in your project root:

```bash
# .env file
PRIVATE_KEY="your_private_key_from_metamask"
RPC_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"
```

**Security Note**: Never commit `.env` files to git!

### Step 2: Deploy to Sepolia

```bash
# Load environment variables
source .env

# Deploy to Sepolia
forge create basicContract.sol:BasicContract \
    --private-key $PRIVATE_KEY \
    --rpc-url $RPC_URL
```

You'll get output like:
```
Deployed to: 0x1234567890abcdef1234567890abcdef12345678
```

### Step 3: Verify on Etherscan

1. Go to [Sepolia Etherscan](https://sepolia.etherscan.io/)
2. Search for your contract address
3. You should see your contract deployed!

### Step 4: Interact on Sepolia

Use the same `cast` commands as local deployment, but with Sepolia RPC:

```bash
# Check owner
cast call $CONTRACT_ADDRESS "owner()" --rpc-url $RPC_URL

# Add to whitelist
cast send $CONTRACT_ADDRESS "addToWhitelist(address)" 0xYourFriendAddress \
    --private-key $PRIVATE_KEY \
    --rpc-url $RPC_URL
```

---

## 🎯 Quick Reference Commands

### Local Development
```bash
# Start local blockchain
anvil

# Deploy contract
forge create basicContract.sol:BasicContract \
    --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \
    --rpc-url http://localhost:8545

# Call function (read)
cast call $CONTRACT_ADDRESS "functionName()" --rpc-url http://localhost:8545

# Send transaction (write)
cast send $CONTRACT_ADDRESS "functionName()" \
    --private-key $PRIVATE_KEY \
    --rpc-url http://localhost:8545
```

### Sepolia Testnet
```bash
# Deploy to Sepolia
forge create basicContract.sol:BasicContract \
    --private-key $PRIVATE_KEY \
    --rpc-url $RPC_URL

# Interact on Sepolia
cast call $CONTRACT_ADDRESS "functionName()" --rpc-url $RPC_URL
cast send $CONTRACT_ADDRESS "functionName()" \
    --private-key $PRIVATE_KEY \
    --rpc-url $RPC_URL
```

---

## 🚨 Troubleshooting

### Common Issues

**"Insufficient funds"**
- Local: Make sure anvil is running
- Sepolia: Get more test ETH from faucet

**"Contract not found"**
- Check contract address is correct
- Verify contract was deployed successfully

**"Only owner can call"**
- Make sure you're using the owner's private key
- Check if ownership was transferred

**"Connection refused"**
- Local: Make sure anvil is running on port 8545
- Sepolia: Check RPC URL is correct

### Getting Help

- Check [Foundry Book](https://book.getfoundry.sh/) for detailed documentation
- Visit [Ethereum Stack Exchange](https://ethereum.stackexchange.com/) for community help
- Join [Ethereum Discord](https://discord.gg/ethereum-org) for real-time support

---

## 🎉 Congratulations!

You've successfully:
- ✅ Deployed a smart contract locally
- ✅ Interacted with all contract functions
- ✅ Deployed to a public testnet
- ✅ Tested security vulnerabilities

You're now ready to build more complex smart contracts and deploy them to mainnet! 🚀

---

## Next Steps

- [Learn more about smart contracts](./learn/smart-contracts.md)
- [Explore advanced Solidity features](./learn/solidity.md)
- [Set up your development environment](./SETUP.md)
- [Build your next project](../README.md)
