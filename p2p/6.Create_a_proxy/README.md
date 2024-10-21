# Workshop - Create a proxy (ERC-1967)

✔ 📖 What is a proxy

✔ 🛠️ Make your own implementation of an ERC-1967

✔ 🚀 Deploy an ERC-1967 on Ethereum Sepolia Testnet

## Introduction in a few lines

If you have already heard about smart contracts, you know that it's not possible to update a contract once it's deployed. But what if you want to update a contract without changing its address? That's where the proxy comes in.

### What is a proxy (ERC-1967)?

🤓 Hum Actually, ERC-1967 refers to the Ethereum Request for Comment 1967, which defines a proxy contract in the Ethereum blockchain ecosystem. A proxy contract acts as an intermediary between a user and the actual implementation contract.

### Why is it useful?

The use of a proxy contract, such as ERC-1967, provides several benefits, including:

- **Upgradability**📈: The ability to upgrade the implementation contract without changing the contract's address or user interactions is very useful, especially when there is a security issue.
- **Cost-Efficiency**💰: Upgrading a contract using a proxy contract is more cost-effective than deploying a new contract.
- **Security**🔒: Proxy contracts can be used to implement security features, such as access control and permission management.
- **Storage Separation**🗄️: The proxy is the storage, so when we change the implementation, all data remains in the proxy.

### What technology is used to do this?

**Solidity** is a **programming language** specifically **designed for developing smart contracts on the Ethereum blockchain**. It enables developers to **create self-executing, autonomous, and verifiable contracts** that define rules and interactions within a **decentralized environment**⛓️‍💥. Solidity is based on **JavaScript-like syntax** and offers features such as state management, control structures, events, and calls to other contracts, enabling the **creation of complex and secure solutions** on the Ethereum blockchain. If you've never worked with Solidity before, take a look at the [Solidity Essentials](./Solidity.md) to understand the basics. You can also consult the [official documentation](https://docs.soliditylang.org/en/latest/).

## Step 0 - Setup 💻

Please refer to the [SETUP.md](./SETUP.md) file.
Now, let's create the needed files.

- 📂 First, delete the `script` folder as we will not need it, as well as the `Counter.sol` and `Counter.t.sol` files.
- 📄 Create a folder named `proxies` in the `src` folder, and then a `ProxyV1.sol` file.
- 📄 Create a folder named `implementations` in the `src` folder and add `CounterV1.sol` and `CounterV2.sol` files which are in the `utils` folder.
  - The `CounterV1.sol` file will contain the first version of the counter contract.
  - The `CounterV2.sol` file will contain the second version of the counter contract.
  - Feel free to look at the content of these files to understand the differences between the two versions.
  - The proxy will allow us to change the implementation easily by switching from Counter_V1 to Counter_V2 without requiring the user to change the address of the contract they call.

## Step 1 - Let's start creating our proxy 🏁

### 📑 **Description**:

In this step, you will implement the delegate call mechanism, which is the basis of the proxy. The delegate call mechanism allows a contract to delegate a call to another contract, which will execute the function in its context. This mechanism is essential for the implementation of a proxy contract.

**Differences between `delegatecall` and `call` in Solidity:**
- Storage Context:
  - `delegatecall`: Executes the code of the called contract in the context of the calling contract. This means it uses the storage of the calling contract.
  - `call`: Executes the code of the called contract in its own context, using its own storage.
- `msg.sender`:
  - `delegatecall`: The msg.sender remains the same as the original caller.
  - `call`: The msg.sender is the address of the calling contract.
- Use Case:
  - `delegatecall`: Typically used for libraries or proxy contracts where you want to execute code in the context of the calling contract.
  - `call`: Used for sending Ether or calling functions on other contracts where the context of the called contract is important.

Example:
```solidity
contract A {
    uint public n;
    function setN(uint _n) public {
        n = _n;
    }
}

contract B {
    uint public n;
    function setN(address _contract, uint _n) public {
        _contract.call(abi.encodeWithSignature("setN(uint256)", _n));
    }
    function delegateSetN(address _contract, uint _n) public {
        _contract.delegatecall(abi.encodeWithSignature("setN(uint256)", _n));
    }
}
```
Here, if you call `delegateSetN` from contract B, the `n` variable of contract B will be updated. If you call `setN` from contract B, the `n` variable of contract A will be updated.

### 📌 **Tasks**:

- Create a contract `ProxyV1` in the `ProxyV1.sol` file.
- Add the following public variables in this order in the `ProxyV1` contract:
  - `implem`, which is an address.
    - This variable will store the address of the implementation contract.
- Add the contract constructor in the `ProxyV1` contract.
  - In it, initialize the `implem` variable with the address of the implementation contract.
- Add the `receive` function which is external payable.
  - This function will be used to receive Ether sent to the contract.
  - You can leave it empty for now, we just need to have it in the contract.
- Add the `implementation` function in the `ProxyV1` contract.
  - This function will return the address of the implementation contract.
- Add the `fallback` function in the `ProxyV1` contract.
  - This function will use the delegate call mechanism to delegate the call to the implementation contract.
  - firstly, do a [deleguate call](https://www.rareskills.io/post/delegatecall) to the implementation contract and save the returned values with the `success` variable which is a boolean and `returnData` which is bytes.
    - This line calls the `delegatecall` function on the implementation contract with the `msg.data` that was sent to the proxy. The `delegatecall` function executes the code of the implementation contract in the context of the proxy contract. The `success` variable will be `true` if the `delegatecall` was successful, and the `returnData` variable will contain the return data from the `delegatecall`.
  - now you need to check if `success` is true
    - if so, use [inline assembly](https://docs.soliditylang.org/en/latest/assembly.html) to return the `returnData` value. You need to use assembly because in pure solidity you can't return data not defined in the function by `returns(uint256)` for example.
    - if not, `returndata` become the error message so return it with [inline assembly](https://docs.soliditylang.org/en/latest/assembly.html) if it's not empty. Otherwise return a generic message.

> ⚠️ Don't forget the header of the file.  
> 🙋‍♂️ If you're really stuck on the fallback function, you can find help [here](./help/fallback.md), but try to do it by yourself first.

### 📚 **Documentation**:

- [Variable visibility](https://docs.soliditylang.org/en/latest/contracts.html#state-variable-visibility)
- [Constructor 🛠️](https://docs.soliditylang.org/en/latest/contracts.html#constructor)
- [Function visibility 👀](https://docs.soliditylang.org/en/latest/contracts.html#function-visibility)
- [Fallback function 📍](https://docs.soliditylang.org/en/latest/contracts.html#fallback-function)
- [Delegate call 📲](https://www.rareskills.io/post/delegatecall)
- [Inline Assembly 📄](https://docs.soliditylang.org/en/latest/assembly.html)

## Step 2 - Let's test if it works 🧪

### 📑 **Description**:

In this step, you will test the proxy contract you have just implemented. Testing the proxy contract is essential to ensure that the delegate call mechanism works correctly and that the proxy can interact with the implementation contract as expected.

### 📌 **Tasks**:

Add the `ProxyV1.t.sol` file, from the `utils`folder, in the `test`folder. This is the tests for the proxy contract.  
You will have to run these tests to verify that the proxy contract works correctly using the command :

```bash
forge test
```

- `-vvvv` add it for more details.

Run the tests. Does it work?

Normally, only the counter test works. Why?  
It's normal. In this version of the proxy, the delegate call uses the function logic from the `CounterV1` contract but doesn't use its variables, so the delegate call tries to access a `count` variable that doesn't exist in the proxy contract.

So, add the `count` public variable, which is a `uint256`, before the `implem` variable in the proxy contract and initialize it to 0 in the constructor.
Now, if you run the tests, all should work.

As you can see, a delegate call uses the proxy's memory and not the memory of the contract you're calling. So when the function you're calling uses a variable, it tries to find it in the memory of the proxy. If your contract has a single variable in memory, that variable will correspond to the first storage slot in the proxy's memory. But if the slot doesn't correspond to the variable used by the function, it won't work.
That's why you add the `count` variable first because it's the first variable in the `counterV1` contract.

### 📚 **Documentation**:

- [Foundry](https://book.getfoundry.sh/)
- [Foundry tests](https://book.getfoundry.sh/forge/fuzz-testing)

## Step 3 - Let's upgrade it 📈

### 📑 **Description**:

Having a functional proxy is great, but we need to write all the variables of the implementation function to make it work. It's not very convenient. So, let's upgrade our proxy to make it more flexible.

In this version, there is no variable in memory, so you don't need to have the same variables in the same order as the implementation contract.
To store the implementation address, we will use a constant (which is not stored in memory) to store the slot address to save the implementation address.
This slot is defined in the ERC-1967 rules to be "eip1967.proxy.implementation".

In this step, you will add a `setImplementation` function to the proxy contract and we will explore storage slots. This function will allow you to change the implementation contract address dynamically to be upgraded.

### 📌 **Tasks**:

- 📄 Create a new file `ProxyV2.sol` in the `proxies` folder.
- Create a contract `ProxyV2` in the `ProxyV2.sol` file.
  - This contract will be an upgrade of the `ProxyV1` contract.
  - Copy only the fallback function from the `ProxyV1` contract to the `ProxyV2` contract.
- Add the following line at the beginning of the contract:
  ```solidity
  // Define the storage slot for the implementation address
  bytes32 private constant IMPLEMENTATION_SLOT = bytes32(uint256(keccak256("eip1967.proxy.implementation")) - 1);
  ```
  - This line defines a storage slot for the implementation address. A storage slot is a unique identifier used to store data in the contract's storage. The `keccak256` function generates a unique identifier based on the string `"eip1967.proxy.implementation"`.
  - The slot address is stored in a const which are written in the contract bytecode so their's no variable.
  - 🥊 Since there are no variables in the proxy contract (as the implementation address is stored in the contract's storage), we don't need to declare the variables from the implementation contract, thus avoiding conflicts between the variables of the proxy and the implementation.
- Add the following functions and use inline assembly code to modify or access the storage slot:
  - `_setImplementation(address newImplementation)`, which is an internal function.
    - This function will allow you to change the implementation contract address dynamically.
    - It will use the `IMPLEMENTATION_SLOT` storage slot to store the new implementation address.
  - `setImplementation(address newImplementation)`, which is a virtual public function (you need to put virtual for the next step).
    - This function will call the `_setImplementation` function to set the implementation address.
  - `getImplementation()`, which is a public function.
    - This function will return the address of the implementation contract stored in the `IMPLEMENTATION_SLOT` storage slot.
- Add the contract constructor and set the implementation address using the `setImplementation` function.
- Modify the fallback function to use the `getImplementation` function to retrieve the implementation address.

### 👨‍🏫 **Advice/Comments**:

- Use `if` or `require` statements to handle [error cases](https://docs.soliditylang.org/en/latest/contracts.html#errors-and-the-revert-statement).
- Use [inline Assembly](https://docs.soliditylang.org/en/latest/assembly.html) to access the storage slot.

### ✔️ **Validation**:

Add the `ProxyV2.t.sol` file, from the `utils` folder, in the `test` folder. This file contains the tests for the `ProxyV2` contract.

- In this test, we will change the implementation address and check if the fallback function works correctly.
- As you can see in the logs, the count value doesn't reset to `0` when we change the implementation address. This is normal because the count value is stored in the proxy's storage, not in the implementation contract.

### 📚 **Documentation**:

- [Storage slots 💾](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html#layout-in-storage)
- [Inline Assembly ⛓️](https://docs.soliditylang.org/en/latest/assembly.html)

## Step 4 - Let's upgrade it again 📈

### 📑 **Description**:

Great, you now have a fully functional proxy. But we can improve it further. As it stands, anyone can call the `setImplementation` function and change the implementation contract address, which is not secure. Let's add access control to this function by using a `modifier`.

A modifier is a function-like construct used to run code before the function attached and revert before the called function is run if certain conditions are not met. It's mainly used to check the caller or the parameter values.

### 📌 **Tasks**:

- 📄 First, create a new file `ProxyOwnableUpgradable` in the `proxies` folder.
- Create a contract `ProxyOwnableUpgradable` in the `ProxyOwnableUpgradable.sol` file.
  - 📈 This contract will be an upgrade of the `ProxyV2` contract.
  - To achieve this, the contract will inherit from the `ProxyV2` contract.
- 💾 We need to store the `owner` address. As learned in the previous step, we use storage slots to store this variable.
  - The slot convention for the owner is `bytes32(uint256(keccak256("eip1967.proxy.owner")) - 1)`.
  - Add public functions to get the owner value from the storage.
  - Add internal functions to set the owner value in the storage.
    - These functions must be called by other functions in the contract.
- 🔎 Now, we need events to log changes in the implementation address and ownership:
  - `event Upgraded(address indexed implementation);`
  - `event ProxyOwnershipTransferred(address previousOwner, address newOwner);`
  - Events are useful for debugging and keeping track of changes in the contract.
  - Events are declared at the beginning of the contract.
- Implement the following functions:
  - `transferProxyOwnership(address newOwner)`, which is a public function.
    - This function will allow the current owner to transfer ownership of the proxy contract to a new owner.
    - This function will emit the `ProxyOwnershipTransferred` event and set the new owner in the storage.
  - `upgradeTo(address newImplementation)`, which is a public function.
    - This function will allow the owner to upgrade the implementation contract address.
    - This function will emit the `Upgraded` event and set the new implementation address in the storage.
- 🔨 Create a modifier `onlyOwner` to restrict access to certain functions to the owner of the contract.
  - This modifier will use the `msg.sender` variable to check if the function caller is the owner of the contract.
  - Add the `onlyOwner` modifier to the `transferProxyOwnership` and `upgradeTo` functions.
- 🛠️ Add a constructor to set the contract owner.
  - This constructor will use the `msg.sender` variable to set the contract owner.
  - This constructor will also accept parameters to set the implementation address.
- 📝 Override the `setImplementation` function to be usable by the owner only with the `onlyOwner` modifier.

### 📚 **Documentation**:

- [Inheritance 👶](https://docs.soliditylang.org/en/latest/contracts.html#inheritance)
- [Events 🎭](https://docs.soliditylang.org/en/latest/contracts.html#events)
- [Access control ⛔️](https://docs.soliditylang.org/en/latest/contracts.html#access-control)
- [Modifiers 🔨](https://docs.soliditylang.org/en/latest/contracts.html#modifiers)
- [Require ✅](https://docs.soliditylang.org/en/latest/control-structures.html#require)

### ✔️ **Validation**:

Add the `ProxyV3.t.sol` file, from the `utils` folder, in the `test` folder. This file contains the tests for the `ProxyOwnableUpgradable` contract.

## Step 5 - Let's deploy it 🚀

### 📑 **Description**:

In this step, you will deploy your ERC-1967 contract on the [Ethereum Sepolia Testnet](https://www.alchemy.com/overviews/sepolia-testnet). Testing our contract on a testnet allows us to deploy and test our application on the Ethereum network without spending real money, as we use test tokens. Be careful; this step requires several tools. The first part of the tasks involves installing these tools, while the second part focuses on deploying the ERC-1967.

### 📌 **Tasks**:

#### Installation of the Tools

- 📡 Download [Metamask](https://metamask.io) and create an account if you don't already have one. It is the most popular Ethereum wallet and allows you to interact with the Ethereum blockchain.
- Get your RPCURL on [Alchemy](https://dashboard.alchemy.com/apps).
  - Sign in.
  - Click on `Create new app` and enter the project name.
  - Go to network, select `Ethereum`, change `mainnet` to `Sepolia`, and copy the URL.
- Add the Sepolia Testnet network to Metamask. [Here's](https://moralis.io/how-to-add-the-sepolia-network-to-metamask-full-guide/) a guide on how to do it.
- Go to the [Sepolia faucet](https://www.alchemy.com/faucets/ethereum-sepolia), enter your wallet address, and send yourself some ETH.
  > ⚠️ You need some ETH on the mainnet to receive test tokens. If you don't have any, contact the workshop manager.
- Copy the `.env` file from the `utils` folder to your project and fill in the variables except for the last one.

#### Deployment of the ERC-1967

The setup is now complete. Let's move on to the interesting part: deploying our ERC-1967. We will use [foundry](https://book.getfoundry.sh/), specifically the [forge create](https://book.getfoundry.sh/forge/deploying) command to deploy the contract and the [cast](https://book.getfoundry.sh/cast/) command to interact with it.

- Load the environment variables:

```bash
source .env
```

- Deploy your implementation contract:

```bash
forge create src/implementations/CounterV1.sol:CounterV1 --private-key "$PRIVATE_KEY" --rpc-url $RPC_URL
```

- Copy the address from `Deployed to` and paste it into the `.env` file under the `CONTRACT_V1` variable.

- Load the environment variables again:

```bash
source .env
```

- Deploy your proxy contract:

```bash
forge create src/proxies/ProxyOwnableUpgradable:ProxyOwnableUpgradable --private-key "$PRIVATE_KEY" --rpc-url $RPC_URL --constructor-args "v1" "$CONTRACT_V1"
```

- Copy the address from `Deployed to` and paste it into the `.env` file under the `PROXY` variable.

- Load the environment variables again.

- Verify that the contract has been deployed correctly:

```bash
cast call $PROXY "total()" --rpc-url $RPC_URL
```

> 💡 This should display a lot of 0.

</br>

Try some interactions:

- Add to the counter:

```bash
cast send $PROXY "add()" --private-key $PRIVATE_KEY --rpc-url $RPC_URL
```

- Change the implementation address:
  - Deploy the new implementation contract `CounterV2`.
  - Copy the address from `Deployed to` and paste it into the `.env` file under the `CONTRACT_V2` variable.
  - Load the environment variables again.
  - Upgrade the implementation address:

```bash
cast send $PROXY "upgradeTo(address)" $CONTRACT_V2 --private-key $PRIVATE_KEY --rpc-url $RPC_URL
```

- Try the new implementation:

```bash
cast send $PROXY "add(uint256)" 4 --private-key $PRIVATE_KEY --rpc-url $RPC_URL
cast call $PROXY "total()" --rpc-url $RPC_URL
```

> 💡 This should display 5 if you had already called `add()` once with the previous implementation.

### 📚 **Documentation**:

- [Ethereum Sepolia Testnet](https://www.alchemy.com/overviews/sepolia-testnet)
- [Metamask](https://metamask.io)
- [Add Sepolia Testnet to Metamask](https://moralis.io/how-to-add-the-sepolia-network-to-metamask-full-guide/)
- [Sepolia faucet](https://www.alchemy.com/faucets/ethereum-sepolia)
- [Foundry deploy](https://book.getfoundry.sh/forge/deploying)
- [Cast command](https://book.getfoundry.sh/cast/)

## Conclusion 🏁

Congratulations! You've created your own proxy. During this workshop, you learned about ERC-1967 and built your own implementation. You can find a well-known implementation [here](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/TransparentUpgradeableProxy.sol). Feel free to compare it with your implementation and consider adding security features to your contract.

Thank you for completing this workshop! If you have any questions, don't hesitate to contact the PoC Team.

## To go further 🔼

You have discovered what an ERC-1967 is, but there are still many other concepts to explore. Here are some examples:

- [ERC-20](https://eips.ethereum.org/EIPS/eip-20) **Token** with this PoC [workshop](https://github.com/PoCInnovation/Workshops/tree/master/p2p/5.Create_an_ERC-20)
- [ERC-721](https://eips.ethereum.org/EIPS/eip-721) **NFT**
- [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) **Multi Token**
- [UUPS Proxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/UUPSUpgradeable.sol)

## Authors 👋

| [<img src="https://github.com/Intermarch3.png" width=120><br><sub>Lucas LECLERC</sub>](https://github.com/Intermarch3) |
| :--------------------------------------------------------------------------------------------------------------------: |

<h2 align="center">Organization</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align="center">
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different platforms, and give a star 🌟 to PoC's repositories.
