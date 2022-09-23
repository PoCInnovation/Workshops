# Workshop 2 - Smart Contracts with Starton

:heavy_check_mark: Create your first smart contract in Solidity

:heavy_check_mark: Learn how to deploy and interact with a contract

:heavy_check_mark: Discover the Starton tools to easily build blockchain applications


## Step 0: Initialization
In this workshop, you'll use [Starton](https://www.starton.io/), a service to easily connect Web2 applications to blockchain with a simple API.  
With it, you can do a lot of things: monitoring on-chain events, deploying an interacting with smart contracts, uploading files to IPFS... 
It's a great starting point for web developers who wants to get involved in blockchain and Web3 without a steep learning curve.  

The only thing you need to do before starting the workshop is to create an account on https://app.starton.io/ and you're ready to go 🚀


## Step 1 - Create a contract
Let's create your first contract in [Solidity](https://docs.soliditylang.org/en/v0.8.0/) :rocket:  
> 💡 You can use the online IDE [Remix](https://remix.ethereum.org/) which is really useful to develop contracts for the Ethereum blockchain.

Your objectif is to create a contract named `WallOfFame`:
- It should have function to register a new warrior (storing both his address and a preudo given as parameter)
- Another function should return a list with the pseudos of registered warriors

> Since you have access to the address that calls your contract, you can also add a check to avoid registering the same address multiple times with different pseudos 😉
 
<details>
    <summary>How to easily test your contract 🤔</summary>
    <br>
    Open the <b>Deploy and run tab</b> and click on the orange <b>Deploy</b> button:<br>
    <img src="https://user-images.githubusercontent.com/49811529/190253522-eb19386e-3990-4ad7-8d3e-c2be45368566.png"/>
    <br>
    This will deploy your contract in a Remix VM to test your contract in a fake environment.<br>
    You can see your deployed contract right below, and interact with your functions:<br>
    <img src="https://user-images.githubusercontent.com/49811529/190254685-0ccee8ce-9c45-4aa8-96e0-f5407e07b7e8.png"/>
</details>

Finally you need to compile your smart contract and copy the [ABI and Bytecode](https://blog.chain.link/what-are-abi-and-bytecode-in-solidity/), it will be useful for the next step 😉

## Step 2 - Deploy with Starton
Now that you have a contract, let's deploy it with Starton 🚀  

They provide a lot of [API routes](https://docs.starton.io/connect/api-doc/relayer/smart-contracts) for smart contracts, you have to find the right one to deploy your contract 😄

> Don't forget to use the information you retrieved in the previous step

If your request is successful, you should have a new contract in the **Interact** tab of your [Starton dashboard](https://app.starton.io/)

> The whole objective of using a service like Starton is to integrate blockchain features without advanced knowledge with an API that takes care of it for you ⭐


## Step 3 - Find and import a contract

You successfully deployed a contract, that's great 🎉  
In a real-world scenario though, you might want to interact with a contract that is already deployed by you or someone else.  
You need to import a contract in Starton using a single information:
```
TODO: add the secret information
```

> It can seems hard, but with a few searches you'll find what you need to import the contract 😉

## Step 4 - Interact with a template contract
Writing a contract in Solidity from scratch is great, but sometimes you just want to create something simple and generic and you don't want to spend time learning Solidity in depth, making sure your contract is secure...  
Today's your lucky day, Starton has a service exactly for this: contract templates :rocket:

Go to your [Starton dashboard](https://app.starton.io/) and create an [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) token with a fixed supply.  
> If you want more challenge, you can try to deploy the template contract using the API instead of the UI  
> You should find everything you need in their [documentation](https://docs.starton.io/), but don't hesitate to ask for help if you are stuck :wink:

When your contract is deployed, you need to interact with it!
You have to make several API calls:
- The first will check if you really have the generated tokens in your wallet
> :bulb: You could also see it in an explorer of the blockchain network you published your contract to, but the safest way is still to call the contract directly
- Then, find an call the route to call the `burn` function of your contract to reduce the token supply :fire:
- Finally, check the balance again too make sure the tokens were destroyed


## To go further
Congratulations, you now have an overview of smart contracts deployment and interaction, simplified with Starton.  
But there's still a lot to discover, here are a few links:

- Go deeper into [Ethereum smart contracts](https://ethereum.org/en/developers/docs/#foundational-topics) with concepts like [Opcodes](https://ethereum.org/en/developers/docs/evm/opcodes/) and [useful frameworks](https://ethereum.org/en/developers/docs/frameworks/)
- Use other Starton services like [Notify](https://docs.starton.io/connect/api-doc/notify) and [IPFS hosting](https://docs.starton.io/connect/api-doc/ipfs) for your smart contracts
- Integrate Starton services into a real app


## Authors

| [<img src="https://github.com/Doozers.png?size=85" width=85><br><sub>Ismaël Fall</sub>](https://github.com/Doozers) | [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola)
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

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.