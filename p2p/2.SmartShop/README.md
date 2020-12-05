# Workshop 2 - Smart Shop.

During this workshop, you will create a decentralized online shop.
You probably have heard about "Le bon coin", a purchasing site for individuals to individuals.

Your goal is to write a smart contract that reproduce some basic features of this platform,
including the ability to :

- Submit a product for sale
- Pay for a product
- Retrieve all products available

The shop will be decentralized, and every transfer will be immutable (no scam possible).

## Step 0 : Initialization

Download and extract the `source.zip` file available [here](https://github.com/PoCInnovation/Workshops/raw/master/p2p/2.SmartShop/src/source.zip).

Install the [metamask](https://metamask.io/) extension. Switch to the Ropsten test network and go to [this faucet](https://faucet.dimensions.network/).
Paste your wallet account address to get 5 ether.

You can use the code editor of your choice, but we highly recommend using the online Remix Editor available [here](https://remix.ethereum.org).

It has all required features for smart contract development :
- A builtin Solidity compiler
- A local ethereum network with 10 accounts already funded with 100 Ether
- A syntax highlighter
- Etc...

## Step 1 : A product

First and because each one of them is different, you must create an abstraction of a product.
It must contain basic fields such as :
- The product name
- The product price
- The product owner's account address
- An optional description (with a maximum of 500 char)
- An id

The contract must contain a global list of all the products submitted by the users, named `products` which has to be accessible to anyone.

## Step 2 : Submit for sale & buy

Now that you've represented a product on your smart contract,
users should be able to add a product for sale so that other can buy those products.

These two features must be implemented trough functions, that can be called by anyone.

Submitting a product for sale is achieved by calling the `submitProduct` function,
which creates a product item based on the parameters of the function (refer to the product fields).

Buying a product is achieved by calling the `buyProduct` function,
which take only one parameter : the product id.
Because buying involves sending money, an amount of ether here,
don't forget to check how much ether where given in the `value` field of the message of the function call.

The message is a global variable accessible everywhere in your contract. You can learn more about it [here](https://docs.soliditylang.org/en/v0.7.5/units-and-global-variables.html).

So when buying a product, you must make sure that :
- The amount of ether sent is the same as the one specified in the product price field.
- Transfer the amount of ether received to the product owner
- Delete the product in the global list

## Step 3 : Frontend

Now that you've done the smart contract, it's time to let the user actually use it.

The `source.zip` file you've extracted contains a boilerplate for this step.
You can start the app by running the following command in the `src` folder :
```shell
npm install && npm run start
```

As you can see, there are some basic features already implemented.
You must implement the following ones :
- Update the `smartshopcontract.js` file with the correct information
- Load the accounts provided by metamask in your browser. The [web3](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html) documentation should help you :wink:
- Implement the function body used to interact with the smart contract. Once again, the [web3]() documentation should help you.

## Authors

[Luca Georges Francois](https://github.com/PtitLuca)
