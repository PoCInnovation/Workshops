# Workshop 2 - Roshambo Smart Contract

✔️ Create your first smart contract in Solidity

✔️ Learn how to deploy and interact with a contract


## Step 0: Initialization
All the required information to install the workshop's dependencies are given in the [SETUP.md](./SETUP.md)

## Step 1 - Create a contract
### 📖 **Description**:

Let's create your Rock Paper Scissors contract in [Solidity](https://docs.soliditylang.org/en/v0.8.0/) 🚀  
> 💡 You can use the online IDE [Remix](https://remix.ethereum.org/) which is really useful to develop contracts for the Ethereum blockchain.



Your objective is to create a contract named `Roshambo`. This contract will allow two players to play the game of rock-paper-scissors with an Ethereum bet.

### Key Concepts:
- **State Variables**: These are variables whose values are permanently stored in the contract's storage. In this contract, we'll use state variables to store information such as players' addresses and their moves.
- **Constants**: Values that remain the same throughout the contract. 


For example,  is set to 0.001 ETH and defines the minimum amount a player must bet to participate.
### 🖌️ **Tasks**:
0. **Create a file named game.sol in the src/ folder**
    - After doing a `forge init <name_of_your_project>`, it will create a src/counter.sol, remove it and add a game.sol
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

### 📕 **Documentation**:
- Solidity [types](https://docs.soliditylang.org/en/latest/types.html)
- Scientific [anotation](https://ethereum.stackexchange.com/questions/85015/convert-a-string-in-scientific-notation-to-a-number)

### ✔️ **Validation**:

```sh
# You should build your project with forge
forge build

➜  Correction git:(feat/p2p-liars-dice) forge build
[⠊] Compiling...
[⠒] Compiling 1 files with Solc 0.8.28
[⠑] Installing Solc version 0.8.28
[⠑] Successfully installed Solc 0.8.28
[⠘] Solc 0.8.28 finished in 4.55s
Compiler run successful!
```

## Step 2 - User registration
📖 Description:
Now that you’ve created the main structure of your contract, it’s time to add functionality for user registration! This will allow two players to join the game and place their bets.

Your contract should ensure that only two unique players can register, and they must each place a bet that meets the minimum bet requirements.

### Key Concepts:
- Modifiers: Modifiers allow us to add reusable logic to restrict or validate certain actions before executing a function.
- Functions: We’ll use functions to define the specific actions players can take, such as registering and placing a bet.

### 🖌️ **Tasks**:
- Implement a Valid Bet Modifier 💰
    - Define a modifier called validBet that will ensure each player's bet meets the minimum requirement of BET_MIN and matches the initialBet once it's set.
    - Ensure the modifier also checks that the initial bet is zero, meaning it's the first bet, or the bet amount matches the initial bet for consistency.
- Prevent Duplicate Registration 🔒
    - Use another modifier called notAlreadyRegistered to make sure the registering player is not already registered.
    - This will prevent the same player from registering twice in the same game.
- Create the register Function 🧑‍🤝‍🧑
    - The register function should check both the validBet and notAlreadyRegistered conditions.
    - When called, it should add the player’s address to either playerA or playerB depending on availability.
Return an identifier (1 or 2) indicating whether the player is playerA or playerB.

### 📕 **Documentation**:
- How to deploy a contract with [anvil](https://egghead.io/lessons/solidity-deploy-your-smart-contract-to-anvil)
- What is a solidity [modifier](https://www.tutorialspoint.com/solidity/solidity_function_modifiers.htm)


### ✔️ **Validation**:

Deploy your contract and try registering two different accounts with a minimum bet of 0.01 ETH (1 finney). Only two unique players should be able to register.
Ensure that if a third player tries to register, the contract returns 0, signaling that the registration is closed.

## Step 3 - Start playing

### 📖 Description:
With both players registered, it's time to enter the Commit Phase of the game. In this phase, each player will submit their move in an encrypted form to ensure fairness and prevent cheating. By committing to their moves upfront, players guarantee that they cannot change their choices after seeing the opponent's move.

#### Key Concepts:
- Modifiers: Reusable pieces of code that can enforce certain conditions before executing a function.
- Encryption and Hashing: Techniques to securely encode data. In this context, players will hash their moves to keep them secret until the reveal phase.
- Function Visibility: Ensuring that only authorized users (registered players) can perform certain actions.

### 🖌️ Tasks:
- Implement the isRegistered Modifier 👥
    - Create a modifier named isRegistered that ensures only players who have successfully registered (playerA or playerB) can call certain functions.
    - This modifier will prevent unauthorized users from interacting with the game's core functions.
- Create the play Function 🎮
    - Develop a function called play that allows a registered player to submit their encrypted move.
    - The function should accept a bytes32 parameter representing the hashed move.
    - Ensure that each player can only submit their move once during the commit phase.
- Store Encrypted Moves Securely 🔒
    - Within the play function, store each player's encrypted move in their respective state variables (encrMovePlayerA and encrMovePlayerB).
    - Make sure that once a move is submitted, it cannot be overwritten or changed.
- Validate Move Submissions ✅
    - Ensure that the play function returns true if a move is successfully recorded and false otherwise.
    - Handle scenarios where a player attempts to submit a move multiple times or when both players have already committed their moves.
### ✔️ Validation:
- Testing the Commit Phase:
    - Register Two Players: Ensure that two unique players have successfully registered and placed their bets.
    - Submit Encrypted Moves: Have each player call the play function with their respective encrypted moves.
    - Verify Move Storage: Check that the encrypted moves are correctly stored in the contract's state variables.
    - Prevent Duplicate Moves: Attempt to submit a second move from the same player and confirm that the contract returns false, indicating that duplicate submissions are not allowed.
    - Unauthorized Access: Try to call the play function from an address that is not registered and ensure that the transaction is reverted.

## Step 4 - Reveal Phase
### 📖 **Description**:

After both players have committed to their encrypted moves, it's time for the **Reveal Phase**! In this phase, each player will reveal their original (clear) move, allowing the contract to verify the choice against the previously submitted encrypted move. This ensures the integrity of the game by guaranteeing that neither player can change their move after seeing the opponent’s choice.

### Key Concepts:

- **Hash Comparison**: By comparing hashes of the clear moves to the stored encrypted moves, we can validate each player’s revealed choice.
- **Enums for Game Moves**: The `Moves` enum helps represent Rock, Paper, or Scissors in the game, allowing us to easily manage and compare choices.
- **Function with Custom Logic**: The `reveal` function uses hashing, string manipulation, and timing to securely handle the game’s reveal process.

### 🖌️ **Tasks**:

1. **Implement a Modifier to Ensure the Commit Phase Has Ended** ⏲️  
   - Create a modifier named `commitPhaseEnded` that ensures both players have committed their encrypted moves before entering the reveal phase.
   - This will prevent players from revealing their choices before both encrypted moves have been submitted.

2. **Create the `reveal` Function** 🔍  
   - Define a function called `reveal` that accepts the clear move (as a string) and validates it against the previously committed encrypted move.
   - Use the `isRegistered` and `commitPhaseEnded` modifiers to enforce that only registered players can call this function, and only after both moves are committed.

3. **Hash and Validate Clear Moves** 🔐  
   - Inside the `reveal` function, hash the provided clear move using `sha256`.
   - Compare this hashed value with the stored encrypted move for the player. If they match, save the clear move in the appropriate variable (`movePlayerA` or `movePlayerB`) for further processing.

4. **Store and Track Reveal Timing** ⏱️  
   - When a player successfully reveals their move, set a `firstReveal` timestamp if it’s the first move revealed. This will be important for enforcing a reveal timeout and finalizing the game’s outcome.

5. **Extract the Player’s Move Using `getFirstChar`** 📋  
   - To determine the player’s actual move (Rock, Paper, or Scissors) from the clear move, use the helper function `getFirstChar`. This function maps the first character of the provided string to a move using the `Moves` enum.
   - If an invalid move is provided, the function should return `Moves.None`.

### ✔️ **Validation**:

- **Testing the Reveal Phase**:
  - **Register and Commit**: Ensure two unique players are registered and have committed encrypted moves using `play`.
  - **Reveal Valid Moves**: Each player should call the `reveal` function with the clear move string they used to generate their encrypted move. Verify that the moves are saved correctly if they match the encrypted ones.
  - **Handle Invalid Moves**: Submit an invalid clear move and confirm that the function returns `Moves.None`, ensuring invalid inputs are handled properly.
  - **Prevent Premature Reveal**: Attempt to reveal moves before both players have committed, ensuring the `commitPhaseEnded` modifier prevents it.


## Step 5 - Result Phase
### 📖 **Description**:

With both players' moves revealed, the game can enter the **Result Phase**. In this phase, the contract determines the winner based on the moves provided, handles payouts, and resets the game for potential future rounds.

### Key Concepts:

- **Game Outcome Logic**: Determine the winner based on Rock, Paper, Scissors rules.
- **Timed Reveal Handling**: If a player fails to reveal their move within the designated time, the other player may be declared the winner by default.
- **Payout Mechanism**: Transfer the winnings to the appropriate player(s).
- **Reentrancy Protection**: Avoid vulnerabilities by resetting game state before transferring funds.

### 🖌️ **Tasks**:

1. **Implement a Modifier to Check if the Reveal Phase Has Ended** 🕰️  
   - Define a modifier named `revealPhaseEnded` that ensures one of the following conditions:
     - Both players have revealed their moves.
     - The reveal timeout has elapsed since the first player revealed, allowing the game to proceed even if one player fails to reveal.

2. **Create the `getOutcome` Function** 🏆  
   - Define a function named `getOutcome` that:
     - Uses the `revealPhaseEnded` modifier to ensure the reveal phase has ended.
     - Compares the players’ moves to determine the outcome according to Rock, Paper, Scissors rules.
     - Sets the `Outcomes` enum value accordingly, such as `Outcomes.PlayerA`, `Outcomes.PlayerB`, or `Outcomes.Draw`.
     - Calls the `pay` function to distribute winnings.
     - Returns the outcome to indicate who won or if it was a draw.

3. **Payout Logic with `pay` Function** 💸  
   - Implement a private function `pay` that:
     - Receives addresses of the players and the outcome.
     - Transfers the entire contract balance to the winner in cases of Player A or Player B wins.
     - Splits the balance evenly in the event of a draw.
     - Adjusts the gas limit if necessary to prevent failure in transaction calls (e.g., using `.call.value()`).

4. **Reset the Game with `reset` Function** 🔄  
   - Implement a private `reset` function to clear out all game-related data, including:
     - Setting `playerA` and `playerB` addresses to empty.
     - Resetting the moves, encrypted values, and timestamps to their initial states.
     - Ensuring the game can start fresh for a new round without carrying over any old state.

### ✔️ **Validation**:

- **Testing the Result Phase**:
  - **Normal Gameplay**: Register two players, commit, reveal moves, and call `getOutcome` to verify the correct outcome and payout.
  - **Timeout Scenario**: Have one player reveal while the other fails to reveal within the timeout. Confirm that the outcome favors the player who revealed.
  - **Draw Case**: Commit identical moves to both players, reveal them, and ensure that both receive an equal share of the payout.
  - **Reentrancy Protection**: Ensure that the game state is reset before funds are transferred, protecting the contract from potential reentrancy attacks.

## Step 6 - Helper Functions
### 📖 **Description**:

In this final step, we'll add some helper functions to make the contract more user-friendly. These functions allow players to check essential game details, such as the contract's balance, their player ID, whether both players have committed or revealed their moves, and how much time is left in the reveal phase.

### Key Concepts:

- **View Functions**: These functions do not modify contract state but instead provide helpful information about the current state.
- **Balance Checking**: Enables players to see the contract's balance, which can be useful in understanding the stakes and ensuring proper payouts.
- **Status Checks**: Verifying the game status (e.g., both players committed or revealed) allows for better tracking and flow control.
- **Time Management**: Showing the time left in the reveal phase ensures transparency and helps players monitor deadlines.

### 🖌️ **Tasks**:

1. **Return Contract Balance** 💰  
   - Implement `getContractBalance`, which returns the current balance of the contract. This helps players know how much ETH is staked for the game.

2. **Identify Player** 👤  
   - Implement `whoAmI`, which returns:
     - `1` if the caller is `playerA`
     - `2` if the caller is `playerB`
     - `0` if the caller is neither player
   - This function allows a player to check their role in the game.

3. **Verify Both Players Have Committed** ⏳  
   - Implement `bothPlayed`, which returns `true` if both players have committed their encrypted moves. This function helps determine if the game is ready for the reveal phase.

4. **Verify Both Players Have Revealed** 🔍  
   - Implement `bothRevealed`, which returns `true` if both players have revealed their moves. This is useful for determining if the result phase can proceed.

5. **Display Reveal Phase Time Left** ⏲️  
   - Implement `revealTimeLeft`, which:
     - Returns the remaining time (in seconds) before the reveal phase ends if the first reveal has occurred.
     - Otherwise, it returns the full reveal timeout.
   - This function helps players monitor the remaining time to complete the reveal phase, avoiding accidental forfeiture due to timeout.

### ✔️ **Validation**:

- **Checking Helper Functions**:
  - **Contract Balance**: Call `getContractBalance` and verify it reflects the correct balance after each bet.
  - **Player Identification**: Each player should call `whoAmI` to confirm their player ID is accurately returned.
  - **Commitment and Reveal Status**: Test `bothPlayed` and `bothRevealed` at different stages to ensure they accurately reflect whether both players have committed or revealed their moves.
  - **Reveal Timer**: Call `revealTimeLeft` during the reveal phase and check if it accurately decreases as time passes.


## To Go Further

Congratulations! 🎉 You've successfully completed a decentralized Rock, Paper, Scissors game on Ethereum. You now have a foundational understanding of smart contracts, gameplay logic, and player interaction. Here are a few ideas and resources to deepen your knowledge and expand the functionality of your contract.

- **Add Multiplayer Support** 👥  
  Expand the game to support multiple players by creating a lobby system. Players could join a lobby, and once two players are ready, they can start a game. You could even add a queue or match-making feature to pair up players automatically.

- **Implement a Best-of Series** 🏅  
  Take your game beyond a single round by creating a "best of three" or "best of five" format. This would allow players to commit to multiple rounds, where the contract tracks wins and determines an overall champion, adding an extra layer of engagement.
  
- **Set up a Timeout Penalty** ⏲️  
  To make the game fairer, introduce a penalty if a player fails to reveal their move within the timeout period. This could forfeit their bet to the opponent, ensuring the game flow remains smooth and deterring delays.


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
