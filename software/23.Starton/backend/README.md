# Part 1 : repair the backend

## Step 0 : Damage Recognition

*Rob the robot* 🤖: Bip boop bip boop boop... Humm... I see you’ve lost your memory. I will help you to fix the system. Before starting, we need to config our engineer tools, go to the config.md file and folow steps to setup your engineer system. 

I will slee... huum... I mean meditate while you do this.

Zzzzzzz... (sighing) Ooh you finshed. It's time to work, let's check the extend of the damage !

### 1 - The backend's root

Here is the root of the backend system. I will not describe you all the files and folders but only the most importants.

The file `package.json` is a config file, it describes a lot of informations such as dependencies, the project's name, author, and licence, but the most interesting section is the script section. This section can allow us to implement rules to interact with the project. For example, the rule "dev" allows us to start the project with the command `nodemon src/index.ts`.

Be carefull, before starting a node project it's important to use the command `npm install` to install all the dependences. These dependences will be present in the `node_modules` folder, it's not recommended to push it. You should add it to your `.gitignore`.

Now let's check the `src` folder.

### 2 - the "src" folder

As you can see, there is a lot of folders at this place and there is a mysterious file by the name of index.ts

These folders contain files that each have a specific role :

    - The controller folder is responsible for receiving requests and returning responses.

    - The data folder concerns each interactions with the database.

    - The middleware folder contains each middleware that we want to implement.

    - The models folder concerns each models that we use for creating documents in our database

    - The routes folder concerns the implementation of all api's endpoints

    - The services folder concerns all the services used by the application.

The index.ts file is the entrypoint of our application

## Step 1: Creating a smart contract

The authentication as not been damaged, so we can directly start the process of our Nft publication.

### 1 - Creates routes for Smarts contracts

Go to the `src/routes/smartContractRouter.ts`

oh what a disaster ! all routes has been destroyed ! We need to fix that !

To allow the frontend app to indicate to our backend to do an action, we need to create an endpoint for it.

An endpoint is composed by the type of the request and a path which indicates informations about the action in question. An endpoint can also receive additionals informations in its body or header.

For example, if we want to create an endpoint about getting informations on a user with his id, we will probably create the endpoint:
    
    GET /user/id


When an endpoint is requested, its mission is to give a response with informations or error codes.

Your Job:

    - Recreates routes who calls methods corresponding of the SmartContractController.ts

    - Check the middleware inside the auth.ts file in the middleware section of our api. Its role is to check if the token of the user who calling the route is valid or not.

    - Call your router in the index.ts file in the app.use. Don't forget to use the auth middleware in between the path and your router in this method. We don't want any unauthorized persson to access on it.

    - Use postman to test your routes.

Pro tips:

For more informations about Http responses and requests check this documentation: [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

Here is an article about router in express: [How to Build a REST API With Express JS and Typescript - Part II (Organising Routes)](https://medium.com/geekculture/how-to-build-a-rest-api-with-express-js-and-typescript-part-ii-organising-routes-ee293eeb16eb)

Here is an article about middleware in express: [Express middleware: A complete guide](https://blog.logrocket.com/express-middleware-a-complete-guide/)

Here is documentation about using Postman for testing routes. Here it is : [API Testing with Postman
](https://cubettech.com/resources/blog/api-testing-with-postman/) 

### 2 - Comunicate with the starton api

The first step of the creation of our Nft's is to create a Smart Contract capable of saving Nfts.

We will have to follow several steps:

    - Create a pattern of metadata that will constitute the information of the NFTs that will be created by us later

    - Retreive the CID of these metadata, and then create a Smart Contract with the informations you need to publish it.

    - Create your control method linking everything. In your case, these will already be implemented.

That’s when Starton’s API comes in. We’re going to use it in everything concerning the blockchain. To be able to interact with this api you will need your API key available in the dev section of the dashboard, you will also need your wallet ID and to claim token on polygon-mumbai. If you haven’t already do that, go back to the SETUP.md file to fix that.

Go to the `src/controller/SmartContractController.ts`, as you can see there is some methodes which need to be implemented.

Your Jobs: 

    - Implement missing methods

    - Test if it's work with Postman


Pro tips:

The comunication with the Starton api will be in Http.
You you will need to understand how HTTP protocol works.
Here is documentation about it:  [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

For getting information with the Starton API you will send requests and get responses on it. You will need the axios Modules.
Here is a documentation about it: [How to make HTTP requests with Axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/#:~:text=To%20perform%20an%20HTTP%20POST,must%20have%20a%20url%20property.)

When you need to interact with another API, it's very important to check the api documentation. Here it is [API Doc](https://docs.starton.io/connect/api-doc)

Also this exercise is based on the first three chapters of the tutorial [Deploy your NFTs on blockchain with Starton
](https://docs.starton.io/tutorials/deploy-your-nfts-on-blockchain-with-starton)


### 3 - Saving a smart contract for a user.

Incredible ! Our backend manages Nft's creation ! We will finally get out of here alive ! However, we have to add one last thing for the smart contract creation. We need to save it in a Nft Schema.

Go to the data folder and open the NftData.ts file. You will find the following methods:

    - getByUserId // for getting Nft's informations about a user. 

    - create // for adding a new NftShema documment for a user with the userId and the smart contract Id (no nft id at this moment) 

    - update // for adding new Nft of the user
 
You will also need the NftSchema.ts file to store the Nft corresponding to each user and as you can see 

Your Job: 

    - Implement the create and getByUserId methods. we’ll see the rest later.

    - Test that the contract stores itself well for each user

Pro tips:

The mongo [findOne](https://mongoosejs.com/docs/api/model.html#model_Model.findOne), [create](https://mongoosejs.com/docs/api/model.html#model_Model.create), [save](https://mongoosejs.com/docs/api/model.html#model_Model-save), methods provided by the mongoose library in the NftShemma.ts will be very helpfull.

## Step 3: Nft Release

bip boop boop...

Creating a user: check ! ✅

Publication of a Smart Contract: check ! ✅

Uploading of a Nft: not check... ❌

Hmm... Interesting ! There is only one last step left for uploading our Nft !

### 1 - Uploading a Nft

In order to upload a Nft we will have to interact with the Starton API again.

Your Jobs:  

    - Open the NftController.ts file in the controller section of our api.

    - Implement the UploadImage, Upload Metadata, MintNft methods

    - Retrivied missing informations with the database to complete the requests on Starton.

    - Implement new routes corresponding to our controller in the NftRouter.ts 

    - Test if your Nft uploads well with the help of postman.

Pro tips:

    - This exercice is based on the chapter of 4th of the tutorial [Deploy your NFTs on blockchain with Starton](https://docs.starton.io/tutorials/deploy-your-nfts-on-blockchain-with-starton#5775)

### 2 - Saving and retrieving new Nft

Once your Nft is uploaded, it is rather convenient to store all the Cid of these in a NftSchema to be able to recover them later.

Your Jobs:

    - Navigate to the NftData file

    - Implement the Update Nft method, to add new Nfts

    - Navigate to the NftController.ts file

    - Implement the getUserNft method

    - Create the Get "/nftUser/:id" route

    - Test if your implementation is working

Bip boop bip boop boop. Congratulations ! The backend part is now functional but the job is not finished: go back to the first README.md to see the next !  