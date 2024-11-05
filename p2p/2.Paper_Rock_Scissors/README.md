# Workshop 2 - Roshambo Smart Contract

✔️ Create your first smart contract in Solidity

✔️ Learn how to deploy and interact with a contract


## Step 0: Initialization
All the required information to install the workshop's dependencies are given in the [SETUP.md](./SETUP.md)

## Step 1 - Create a contract
### :bookmark_tabs: **Description**:


Let's create your Rock Paper Scissors contract in [Solidity](https://docs.soliditylang.org/en/v0.8.0/) 🚀  
> 💡 You can use the online IDE [Remix](https://remix.ethereum.org/) which is really useful to develop contracts for the Ethereum blockchain.



Your objective is to create a contract named `Roshambo`. This contract will allow two players to play the game of rock-paper-scissors with an Ethereum bet.

### Key Concepts:
- **State Variables**: These are variables whose values are permanently stored in the contract's storage. In this contract, we'll use state variables to store information such as players' addresses and their moves.
- **Constants**: Values that remain the same throughout the contract. 


For example,  is set to 0.001 ETH and defines the minimum amount a player must bet to participate.
### :pushpin: **Tasks**:
1. **Let's Raise the Stakes** 🎲  
   - Add a constant called `MINIMAL_BET` to set a minimum bet amount—let's make it `0.001 ETH` to keep it interesting!

2. **Set a Reveal Timeout** ⏳  
   - To keep the game moving, add a `REVEAL_TIMEOUT` constant variable set to 5 minutes. This will prevent players from stalling too long.

3. **Game logic** 🧑‍💻
    - To e able to handle the logic of the game you will need 2 variables, 2 integers that will handle the `initial bet` and one that represents the `first reveal` of the player.

3. **Representing Rock, Paper, Scissors** ✊🖐✌️  
   - Since our game revolves around Rock, Paper, Scissors, find a way to represent these choices in Solidity! Also, think about how to handle any invalid choices a player might enter.

4. **Define Game Outcomes** 🏆  
   - There is a [type](https://docs.soliditylang.org/en/latest/types.html) that can help you represent possible outcomes: one of the 2 players wins, or it's a Draw or is invalid due to incorrect input from the user. This will make it easy to handle the end result.

5. **Set Up Player Variables** 👤👥  
   - Add variables for the two players. They should be able to place bets, so consider that user needs to [pay](https://ethereum.stackexchange.com/questions/64108/whats-the-difference-between-address-and-address-payable)!

6. **Secret Moves with Encoding** 🔒  
   - To keep each player's choice hidden until both have played, create two variables to store encoded moves—one for each player. This will allow us to reveal the moves only at the right time.

7. **Track Moves for Both Players** ⚔️  
   - Lastly, set up two variables that store each player's actual choice (once revealed). These will use the `Moves` type you created above in the step 3.


## Tasks:
- **Create the Contract**: Start by creating a new file named Roshambo.sol in Remix or in your IDE in the `src/` folder and define a contract structure.


### :books: **Documentation**:
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

### ✔️ **Validation**:
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
```text
0xE39aC98F23333589558f081870c6Ac8F0bdd6B1c
```

> This contract is deployed on Mumbai (the Polygon testnet) 😉

> It can seems hard, but with a few searches you'll find what you need to import the contract

## Step 4 - Interact with a template contract
Writing a contract in Solidity from scratch is great, but sometimes you just want to create something simple and generic and you don't want to spend time learning Solidity in depth, making sure your contract is secure...  
Today's your lucky day, Starton has a service exactly for this: contract templates 🚀

Go to your [Starton dashboard](https://app.starton.io/) and create an [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) token with a fixed supply.  
> If you want more challenge, you can try to deploy the template contract using the API instead of the UI  
> You should find everything you need in their [documentation](https://docs.starton.io/), but don't hesitate to ask for help if you are stuck 😉

When your contract is deployed, you need to interact with it!
You have to make several API calls:
- The first will check if you really have the generated tokens in your wallet
> 💡 You could also see it in an explorer of the blockchain network you published your contract to, but the safest way is still to call the contract directly
- Then, find an call the route to call the `burn` function of your contract to reduce the token supply 🔥
- Finally, check the balance again too make sure the tokens were destroyed

## Step 5 - Time for real Solidity
To further understand how a smart contract works, now we'll dive into a contract similar to the one you created in the previous step.  
Don't worry, you won't have to write it entirely as it would be too long and complicated here.  

In the boilerplate code we gave you in the ([`step5/ERC20`](./step5/ERC20/) folder), you'll find the contract files, but 3 functions were lost:
`_transfer`, `_mint` and `_burn`.
Your objective is to reimplement them in the `ERC20.sol` file to have a better understanding of the Solidity syntax.

You'll need to use Remix again, but to import your files you need to use [remixd](https://www.npmjs.com/package/@remix-project/remixd) by running the following commands:
```shell
# Install the npm package globally
npm install -g @remix-project/remixd

## Run it in the directory you want to import
remixd
```

You can then go to [remix](https://remix.ethereum.org/) and click on `default_workspace`, then select `- connect to localhost -`.

> Take a look at the official [Solidity documentation](https://docs.soliditylang.org/en/v0.8.0/) to get more information about the language.

> You'll also realize how much effort you're saving by using a Starton template 😉

## To go further
Congratulations, you now have an overview of smart contracts deployment and interaction, simplified with Starton.  
But there's still a lot to discover, here are a few links:

- Go deeper into [Ethereum smart contracts](https://ethereum.org/en/developers/docs/#foundational-topics) with concepts like [Opcodes](https://ethereum.org/en/developers/docs/evm/opcodes/) and [useful frameworks](https://ethereum.org/en/developers/docs/frameworks/)
- Use other Starton services like [Notify](https://docs.starton.io/connect/api-doc/notify) and [IPFS hosting](https://docs.starton.io/connect/api-doc/ipfs) for your smart contracts
- Integrate Starton services into a real app (you can take a look at our software workshop to [create a Space Invaders with a Play to Earn model](../../software/26.SpaceInvaders_Starton) 🚀)

## Authors

| [<img src="https://github.com/Molaryy.png?size=85" width=85><br><sub>Mohammed JBILOU</sub>](https://github.com/Molaryy) |
| :---: | 
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.
