# Workshop 4 - Connect your DApp to Ledger Live

✔️ How to interact with smart contracts in your DApp using [wagmi](https://wagmi.sh/)

✔️ Integrate your application to [Ledger Live](https://www.ledger.com/ledger-live)

✔️ Use a hardware wallet to sign transactions

## Introduction

A decentralized application, or DApp, is a software application that operates on a decentralized network of computers rather than a central server. It utilizes blockchain technology to provide transparency, immutability, and security. DApps enable peer-to-peer interactions, removing the need for intermediaries and allowing users to retain control over their data and digital assets.

Today we'll discover how to connect our DApp to a [smart contract](https://www.ibm.com/topics/smart-contracts) and integrate it to
 [Ledger Live](https://www.ledger.com/ledger-live) so it will be possible to run it both on a browser and inside Ledger Live for users of Ledger wallets.

This workshop is heavily inspired from [the one created by the Ledger team](https://github.com/LedgerHQ/workshop-connect-dapp-ll/), we invite you to check it out later 👍

## Step 0: Initialization

All the required information to install the workshop's dependencies are given in the [SETUP.md](./SETUP.md)

## Step 1: Interact with the contract

### 📑 **Description**:

The first thing to do is to enable our frontend to interact with the *Ledger Guestbook* contract that allows users to post messages 😄\
The contract is already deployed, so you need to modify the code inside `hooks/usePostMessage.ts` to interact with it.

### 📌 **Tasks**:

- Have to look at the [ABI](./dapp/src/utils/contract.json) and deduce which function you will need to use to post a new message.
> 💡 You can look at the existing wagmi hook at [the top of the file](./dapp/src/hooks/usePostMessage.ts#L7) for an example of what to do.
It will be helpful to look at the already made Wagmi hooks [here](./dapp/src/hooks/usePostMessage.ts).

> You'll need to use the [Goerli Testnet on Metamask](https://www.datawallet.com/crypto/add-goerli-to-metamask) and claim tokens with a [faucet](https://goerli-faucet.pk910.de/) or ask the workshop staff to send you some 😄

### 📚 **Documentation**:
- [What is an ABI?](https://www.quicknode.com/guides/ethereum-development/smart-contracts/what-is-an-abi/)
- Wagmi: [getting started](https://wagmi.sh/react/getting-started) and [useContractWrite hook](https://wagmi.sh/react/hooks/useContractWrite)

### ✔️ **Validation**:

After implementing this correctly, your can click on the `Post` button to submit your message and confirm the transaction with your Metamask wallet 🚀

## Step 2: Connect your app to Ledger Live

### 📑 **Description**:

Now that our application is working as intended, let's integrate it to Ledger Live 🔥\
This will allow our apps to be used either in a browser with Metamask (as experienced above) or directly within Ledger Live!
Deploying a Live App to everyone is of course subject to a [full review process](https://developers.ledger.com/docs/live-app/start-here/#process) to avoid presenting malicious apps to Ledger users.\
Here we will use the developer mode to integrate and test it locally 😄

### 📌 **Tasks**:

The first thing you have to do is to install a connector to use wagmi with Ledger Live: `@ledgerhq/ledger-live-wagmi-connector`.\
It can be used to initialize a wagmi client that will seamlessly manage the interaction of your DApp with the Ledger Live wallet.
> 💡 You can use `yarn` to add it to the project

Then, add `IFrameEthereumConnector` to the list of connectors inside the `src/WagmiWrapper.tsx` file.

Now let's setup Ledger Live for our use case:
- activate the [developer mode](https://developers.ledger.com/docs/live-app/developer-mode/) 
- [add your local app](https://developers.ledger.com/docs/live-app/developer-mode/#add-a-local-app) using the given [manifest](./dapp/manifest.json).
> The manifest contains a `json` configuration file defining, among other things, your DApp name, URL, available networks, description, etc... to provide the best experience possible to the app users in Ledger Live. You can modify it as you want, especially for the `nodeURL` (add your own Alchemy HTTPS URL) 😉

> 💡 As for Metamask, make sure you have a Goerli [Testnet](https://www.ledger.com/academy/glossary/testnet) account available in Ledger Live.

### 📚 **Documentation**:
- [Manifest](https://developers.ledger.com/docs/non-dapp/reference/manifest/)
- [Import your app](https://developers.ledger.com/docs/non-dapp/tutorial/3-import/)

### ✔️ **Validation**:

If you've done all this, you should now be able to use your DApp normally within Ledger Live context, and also on a browser environment with Metamask.\
You'll have a consistent experience across both platforms, providing you with flexibility and convenience in managing your application 🔥

## Step 3: Add some style

### 📑 **Description**:

Congratulations, you can now post and retrieve messages in your DApp from a browser or within Ledger Live 🥳\
But the design is quite primitive at the moment, it's time add some style to it 🖌️

### 📌 **Tasks**:

Create a great interface and user experience by using a CSS framework like [Tailwind](https://tailwindcss.com/) for example.

### 📚 **Documentation**:

- [Getting started with Tailwind](https://tailwindcss.com/docs/installation)

### ✔️ **Validation**:

Make something beautiful that you can be proud of, and show your app to someone else to have feedbacks about your design 🎨

## Bonus

Congratulations for going through this workshop, we hope you've enjoyed it!\
You can go further by adding new features to your DApp, read the contract ABI again to find interesting features to integrate using wagmi hooks 🔥
> There should be a way to tip the author of a message 💸

There also much more to discover around Ledger Live, refer to the [official documentation](https://developers.ledger.com/docs/live-app/start-here/) to deep-dive into it 🚀

Finally, check out the following resources to discover other aspects of the Ledger ecosystem:
- [Nano App](https://developers.ledger.com/docs/embedded-app/introduction/) to get your blockchain supported on Nano S/X/S Plus 🌐
- [Blockchain support](https://developers.ledger.com/docs/coin/general-process/) to get your currency supported on Ledger Live 🪙
- [Connect your app](https://developers.ledger.com/docs/transport/overview/) to support a Nano on your desktop/web app 🔥

## Authors

| [<img src="https://github.com/Doozers.png?size=85" width=85><br><sub>Ismaël Fall</sub>](https://github.com/Doozers) | [<img src="https://github.com/LeTamanoir.png?size=85" width=85><br><sub>Martin Saldinger</sub>](https://github.com/LeTamanoir) |
| :---: | :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
