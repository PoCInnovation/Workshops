# Setup Guide - Smart Contract Development Environment

This guide will help you set up your development environment for smart contract development using Foundry.

## Prerequisites

Before starting, make sure you have:
- A computer running Windows, macOS, or Linux
- Internet connection
- Terminal/Command Line access

## Installing Foundry

Foundry is a powerful toolkit for Ethereum application development. It includes:
- **Forge**: Testing framework
- **Cast**: Command-line tool for interacting with contracts
- **Anvil**: Local Ethereum node

### Step 1: Install Foundry

#### On macOS/Linux:
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

#### On Windows:
1. Install Git for Windows if you haven't already
2. Open Git Bash and run:
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### Step 2: Verify Installation

Check that Foundry is installed correctly:

```bash
forge --version
cast --version
anvil --version
```

You should see version information for each tool.

## Setting Up Your Project

### Step 1: Initialize a New Foundry Project

In your terminal, navigate to where you want to create your project and run:

```bash
forge init my-smart-contract-project
cd my-smart-contract-project
```

This creates a new directory with the following structure:
```text
my-smart-contract-project/
├── src/           # Smart contracts
├── test/          # Test files
├── script/        # Deployment scripts
├── lib/           # Dependencies
└── foundry.toml   # Configuration file
```

### Step 2: Build Your Project

Compile the contracts:

```bash
forge build
```

### Step 3: Run Tests

Run the included tests:

```bash
forge test
```

## Development Tools (Optional but Recommended)

### Visual Studio Code Extensions

If you're using VS Code, install these helpful extensions:

1. **Solidity** by Juan Blanco
   - Syntax highlighting for Solidity
   - Code completion and error detection

2. **Foundry** by foundry-rs
   - Better integration with Foundry commands

### Alternative: Remix IDE

For a browser-based development environment, you can use [Remix IDE](https://remix.ethereum.org/):
- No installation required
- Built-in compiler and debugger
- Great for learning and prototyping

## Network Configuration

### Local Development (Anvil)

Start a local blockchain for testing:

```bash
anvil
```

This starts a local Ethereum node at `http://localhost:8545` with 10 pre-funded accounts.

### Testnet Configuration (Advanced)

For deploying to testnets like Sepolia, you'll need:
1. A wallet (like MetaMask)
2. Test ETH from a faucet
3. An RPC URL (from services like Alchemy or Infura)

We'll cover this in the advanced deployment section.

## Troubleshooting

### Common Issues

1. **"Command not found" errors**
   - Make sure you've restarted your terminal after installation
   - Check that `~/.foundry/bin` is in your PATH

2. **Build failures**
   - Ensure you have the latest version: `foundryup`
   - Check that your Solidity version is compatible

3. **Test failures**
   - Make sure all dependencies are installed
   - Check for syntax errors in your contracts

### Getting Help

If you encounter issues:
1. Check the [Foundry documentation](https://book.getfoundry.sh/)
2. Search for solutions on [Stack Overflow](https://stackoverflow.com/questions/tagged/foundry)
3. Ask for help in the workshop or blockchain development communities

## Next Steps

Once your environment is set up:
1. **Read the [Blockchain Fundamentals](./learn/blockchain.md)** to understand the basics
2. **Learn [Solidity](./learn/solidity.md)** programming language
3. **Start with the [Practical Tasks](./README.md)** to build your first smart contract

You're now ready to start developing smart contracts! 🚀
