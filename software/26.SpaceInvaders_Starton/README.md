# Workshop 26 - Create a Play to Earn game with Starton

✔ Enhance an existing game with blockchain interactions

✔ Deploy and interact with smart contracts

✔ Discover the Starton tools to easily build blockchain applications


## Step 0 - Introduction

In this workshop, you'll use Starton, a service to easily connect Web2 applications to blockchain with a simple API.  
With it, you can do a lot of things: monitoring on-chain events, deploying an interacting with smart contracts, uploading files to [IPFS](https://ipfs.tech/)...  
It's a great starting point for web developers who wants to get involved in blockchain and Web3 without a steep learning curve.

Here we give you a simple Space Invader game (a customized version of a game made by the Starton team, itself based on a fork of [this game](https://github.com/leerob/space-invaders)). Your objective is to deploy smart contracts with Starton, and interact with them in your game to create [a Play to Earn](https://decrypt.co/resources/what-are-play-to-earn-games-how-players-are-making-a-living-with-nfts).

All the installation steps required to do the exercises are detailed in the [SETUP.md](./SETUP.md)

## Step 1 - ERC20
TODO: deploy contract with Starton from UI template, interact with it in code

## Step 2 - IPFS background and decorator to validate address
You are rewarded with tokens and NFTs, that's great!  
But blockchains and P2P networks usage is not restricted to game rewards, you can do a lot more, like hosting your game assets (images, musics...) on [IPFS](https://ipfs.tech/), a decentralized network for storing and sharing data 🔥

To use it, you generally have to install [a CLI](https://ipfs.io/#install) and run your node to store your files and make them accessible...  
But with Starton you're ready to go in just a few clicks 🤩

You objective is to change the background image of the game with an image from IPFS instead 🕸️  
> 💡 You can use any image you want, like this [simple background generated with DALL·E](https://labs.openai.com/s/o7FRxbyER0wGMAy8umPYrGTu) for example

To do so, upload your image in the [IPFS tab of Starton](https://app.starton.io/ipfs), which should give you an URL like this one:
```
https://ipfs.starton.io/ipfs/<CID>
```

Once you're here, you have to modify your code you have to load it and assign it to `BACKGROUND_FILE` 😄

> Nothing specific to IPFS here, you just have to search how to load an image from an URL in Python 🔎

## Step 3 - NFT
TODO: deploy contract with Starton from code, interact with it in code

## Step 4 - Display the number of tokens in game
TODO: use pygame to display a screen with number of tokens earned this game + total in wallet using a get request

## To go further

- Dive deeper into smart contracts with Starton with [our workshop](https://github.com/PoCInnovation/Workshops/tree/master/p2p/2.Starton_Smart_Contracts) 😄