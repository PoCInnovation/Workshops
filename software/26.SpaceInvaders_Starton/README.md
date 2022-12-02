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

Let's create your first Smart Contract with Starton 🚀<br>
To do so, you'll use a service they provide: contract templates. It's very useful when you want to create a simple and generic token without spending time creating your own contract from scratch in a language like [Solidity](https://docs.soliditylang.org/).

Go to the [Starton deploy dashboard](https://app.starton.io/templates) and create an ERC-20 token (you're free to choose the type of supply 😄)

> 💡 You can use the Avalanche blockchain with the Fuji network as it's pretty simple to get test tokens on it.

Once your contract is deployed, you need to interact with it in your game!<br>
Starton provides a really complete API that you can use instead of the dashboard.<br>
The logic should be implemented in the `starton_send_tokens` of `starton_workshop.py`, it's already called in the game when you lose 👾<br>
You objective is to send the score as tokens to the given address 💵

> 💡 Take a look at the [Starton documentation](https://docs.starton.io/) and the [`requests`](https://requests.readthedocs.io/en/latest/) library to make your API call

> The [`dotenv`](https://pypi.org/project/python-dotenv/) package could be useful too if you store your API key in a `.env` file 😉


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
Now let's reward our user when he reach some determined points 🎉<br>
For this step we will mint and send to our user a `bronze`, `silver` and `gold` cup when he finishes the 1st, 2nd and 3rd levels.

First of all, we will deploy an NFT contract thanks to a Starton [template](https://app.starton.io/templates/sct_e851adefe4494fc991207b2c37ed8a83).

> Name your contract as you want but deploy it on the Polygon Mumbai testnet for an easy testing 😉

For the `Smart Contract Constructor` parameter:
- chose the `name` you want.
- same for the `symbol`
- for the `base URI` enter `ipfs://ipfs/` because our contract metadata will be hosted on ipfs. 
- for the `contract URI suffix` leave it empty for the moment and go to the IPFS section of your Starton dashboard.

Now we will host our contract and NFT's metadata on IPFS.<br>
First of all we will write our contract's level metadata on an IPFS-hosted JSON as explained in the Starton documentation about [how to deploy NFT's](https://docs.starton.io/tutorials/deploy-your-nfts-on-blockchain-with-starton#d139).

```json
{
  "name": "My Super NFTs",
  "description": "You've never seen NFTs this beautiful.",
  "image": "",
  "external_link": "",
  "seller_fee_basis_points": 100,
  "fee_recipient": "PUT YOUR ADDRESS HERE"
}
```

After deploying it on IPFS we can put the retrieved CID in the `Contract URI Suffix`.

You then have to upload 3 images of your choice on IPFS through the Starton dashboard. You also have to add 3 NFT json metadata in the following format:

```json
{
  "name": "${COLOR} cup",
  "description": "GG you reached ${POINTS} points!",
  "image": "ipfs://ipfs/${imgCid}"
}
```

and add the retrieved CIDs in your `.env` file, with the following structure:
```env
BRONZE_CUP_METADATA=CID
SILVER_CUP_METADATA=CID
GOLD_CUP_METADATA=CID
```

Finally, make the corresponding request in the `starton_send_level_nft`,
 you should mint the right NFT and send it to the user depending on the level he reached 😄

## Step 4 - Display the number of tokens in game

We send tokens and NFTs to our players, but they have no way to visualize it directly in the game 🥲

Now that you are familiar with Starton, explore [their documentation](https://docs.starton.io/connect/api-doc)
 to find an endpoint that'll give you the player's balance of the tokens you send since step 1.

Then, you'll have to dig in the `beerinvaders.py` file to display it where you want, for example in the home screen 😃

The other displayed text will help you do it, and you can also look at the [pygame documentation](https://www.pygame.org/docs/) for some hints!

> It might be confusing at first, but if you search for the right keywords (`level` for example, or a text displayed near where you want to show the token amount) it should be alright 😉

> 💡 Don't forget to refresh the displayed amount by calling Starton's API several times during a game session

## To go further

- Dive deeper into smart contracts with Starton with [our workshop](https://github.com/PoCInnovation/Workshops/tree/master/p2p/2.Starton_Smart_Contracts) 😄

## Authors

| [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola) | [<img src="https://github.com/Doozers.png?size=85" width=85><br><sub>Ismaël Fall</sub>](https://github.com/Doozers)
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
