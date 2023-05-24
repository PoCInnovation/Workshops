# Setup - Connect your DApp to Ledger Live

## NodeJS

To run the DApp locally, you need to install:
- [nodejs](https://github.com/nodejs/node): JavaScript runtime
- [npm](https://www.npmjs.com/): node package manager
- [yarn](https://yarnpkg.com/): a better npm

## Wallets

To interact with our dApp, we will use two wallets:
- [Metamask](https://metamask.io/download/), a simple wallet available as a browser extension to easily test our first steps
- [Ledger Live](https://support.ledger.com/hc/en-us/articles/4404389606417-Download-and-install-Ledger-Live?docs=true), the software provided by Ledger to use their hardware wallets in a nice interface with lots of features.

## Initialize your project

You will need an [Alchemy API key](https://docs.alchemy.com/docs/alchemy-quickstart-guide) that our app will be using to interact with the Ethereum blockchain.\
Once you have it, you can add it to the `.env` file in the code given in the next step 😉

### During a PoC workshop

If you are participating to a workshop session we organize, we'll provide you a link to a GitHub repository created for you that already contains the necessary code.

You just have to install the project dependencies using the following command:
```sh
yarn
```
and you are ready to go 🚀

### On your own

If you are following this workshop on your own, you can run the following commands to retrieve the provided code and install the project dependencies:

TODO
```sh
wget URL
cd folder
yarn
```

> ⚠️ Make sure you have [a Ledger wallet](https://shop.ledger.com/pages/hardware-wallets-comparison) or you won't be able to test your Ledger Live integration correctly

You now have everything setup to start the workshop 😄

## Back to the workshop

You can start the DApp and open it in your browser with
```sh
yarn dev
```

then [go back to the exercises](./README.md) 🚀