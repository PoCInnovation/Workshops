# Workshop 3 - Extract data from ₿itcoin

In this workshop, you will connect to the Bitcoin blokchain, and extract data from it.

Using this data, you will be able to compute the balance of any user of the blockchain.

## Step 0 - Initialization :rocket:

## Step 1 - Connect to the Bitcoin Network :globe_with_meridians:

Your first real step is to connect to the Bitcoin network.
But before connecting to the node, we must initialize some things.

- Create a go module locally, named pocbtc.
- Install btcd, the go bitcoin client in your go module.

Now that you have installed all the prerequisites, we can start interacting with the node !

- Create an rpcclient variable, it will let you send request to the node.

> Use the following credentials :
>
>- Host: XXXXX
>- User: XXXXX
>- Password: XXXXX

Use the documentation available [here](https://pkg.go.dev/github.com/btcsuite/btcd/rpcclient?utm_source=godoc), it will help you save you a lot time ;)

Finally, to test the connection, you can try to acquire informations about the first block (the genesis block).

**Here is the corresponding hash**: 0x000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f.

## Step 2 - UTXOs :credit_card:
