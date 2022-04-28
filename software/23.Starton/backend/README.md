# Part 1 : repair the backend

## Step 0 : Damage Recognition

*Rob the robot* 🤖: Bip boop bip boop boop... Humm... I see you’ve lost your memory. I will help you to fix the system. Before we start, we need to configure our engineer tools. Go to [SETUP.md](SETUP.md)  and follow the steps to setup your engineer system. 

I will slee... huum... I mean meditate while you do this.

Zzzzzzz... (sighing) Ooh, you've finished. It's time to work, let's check the extend of the damage !

### 1 - The backend's root

Here is the root of the backend system. I will not describe you all the files and folders but only the most important ones.

The file `package.json` is a config file, it describes a lot of information such as dependencies, the project's name, author, and licence, but the most interesting section is the script section. This section can allow us to implement rules to interact with the project. For example, the rule "dev" allows us to start the project with the command `nodemon src/index.ts`.

Be careful, before starting a node project it's important to use the command `npm install` to install all the dependencies. These dependencies will be present in the `node_modules` folder; it's not recommended to push it. You should add it to your `.gitignore`.

Now let's check the `src` folder.

### 2 - the "src" folder

As you can see, there are a lot of folders here, and also a mysterious file by the name of `index.ts`

These folders contain files that each have a specific role :
- `controller/`: is responsible for receiving requests and returning responses.
- `data/`: concerns each interactions with the database.
- `middleware/`: contains each middleware that we want to implement.
- `models/`: concerns each models that we use for creating documents in our database
- `routes/`: concerns the implementation of all api's endpoints
- `services/`: concerns all the services used by the application.

The `index.ts` file is the entrypoint of our application

## Step 1: Creating a smart contract

The authentication has not been damaged, so we can directly start the process of our Nft publication.

### 1 - Creates routes for Smarts contracts

Go to [src/routes/smartContractRouter.ts](./api/src/routes/smartContractRouter.ts)

Oh, what a disaster ! All the routes have been destroyed ! We need to fix that !

To allow the frontend app to indicate to our backend to do an action, we need to create an endpoint for it.

An endpoint is composed by the type of the request and a path which indicates information about the action in question. An endpoint can also receive additionals information in its body or header.

For example, if we want to create an endpoint about getting information on a user with his id, we will probably create the endpoint:
    
    GET /user/id


When an endpoint is requested, its mission is to give a response with information or error codes.

🛠️ <u>Your Job</u> 🛠️

1. Recreate the route POST `smart-contract/ipfs-nft-contract` that call the methods found in `SmartContractController.ts`

2. Check the middleware inside `middleware/auth.ts`. Its role is to check if the token of the user calling the route is valid or not.

3. Call your router in `index.ts`  with  the `app.use` method. Don't forget to use the auth middleware in between the path and your router in this method. We don't want any unauthorized person to access it.

4. Use Postman to test your routes.

<u>Pro tips:</u>

> For more information about Http responses and requests, check this documentation: [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

> Here is an article about routers in express: [How to Build a REST API With Express JS and Typescript - Part II (Organising Routes)](https://medium.com/geekculture/how-to-build-a-rest-api-with-express-js-and-typescript-part-ii-organising-routes-ee293eeb16eb)

> Here is an article about middlewares in express: [Express middleware: A complete guide](https://blog.logrocket.com/express-middleware-a-complete-guide/)

> Here is some documentation about using Postman for testing routes: [API Testing with Postman](https://cubettech.com/resources/blog/api-testing-with-postman/)

### 2 - Communicate with the starton api

The first step of the creation of our Nfts is to create a Smart Contract capable of saving Nfts.

We will have to follow several steps:

- Creating a pattern of metadata that will constitute the information of the NFTs that will be created by us later.
- Retreiving the CID of these metadata, and then creating a Smart Contract with the information you need to publish it.
- Creating a control method linking everything. In your case, this will already be implemented.

That’s when Starton’s API comes in. We’re going to use it in everything concerning the blockchain. To be able to interact with this api you will need:

- your API key, available in the dev section of the dashboard
- your wallet ID
- to have claimed tokens on polygon-mumbai.

If you haven’t already done these steps, go back to [SETUP.md](SETUP.md) to fix that.

Go to [`src/controller/SmartContractController.ts`](./api/src/controller/SmartContractController.ts), as you can see there are some methods which need to be implemented.

🛠️ <u>Your Job</u> 🛠️

1. Implement missing methods
2. Test if it's working with Postman


<u>Pro tips:</u>

> The communication with the Starton api will use HTTP. You you will need to understand how the HTTP protocol works. Here is documentation about it:  [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

> To exchange information with the Starton API, you will send requests and get responses from it. You will need the axios module. Here is some documentation about it: [How to make HTTP requests with Axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/#:~:text=To%20perform%20an%20HTTP%20POST,must%20have%20a%20url%20property.)

> When you need to interact with another API, it's very important to check the api documentation. Here it is: [API Doc](https://docs.starton.io/connect/api-doc)

> This exercise is based on the first three chapters of the tutorial [Deploy your NFTs on blockchain with Starton
](https://docs.starton.io/tutorials/deploy-your-nfts-on-blockchain-with-starton)


### 3 - Saving a smart contract for a user.

Incredible ! Our backend manages Nft creation ! We will finally get out of here alive ! However, we have to add one last thing for the smart contract creation. We need to save it in a Nft Schema.

Open [`data/NftData.ts`](./api/src/data/NftData.ts). You will find the following methods:

- `getByUserId`: for getting Nft's information about a user.
- `create`: for adding a new NftShema documment for a user with the userId and the smart contract Id (no nft id at this moment)
- `update`: for adding new Nft of the user

You will also need the NftSchema.ts file to store the Nft corresponding to each user and as you can see

🛠️ <u>Your Job</u> 🛠️

1. Implement the create and getByUserId methods. We’ll see the rest later.
2. Test that the contract stores itself well for each user

<u>Pro tips:</u>

> The mongo [findOne](https://mongoosejs.com/docs/api/model.html#model_Model.findOne), [create](https://mongoosejs.com/docs/api/model.html#model_Model.create) and [save](https://mongoosejs.com/docs/api/model.html#model_Model-save) methods provided by the mongoose library in NftSchema.ts will be very helpful.

## Step 2: Nft Release

🤖 Bip boop boop...

Creating a user: check ! ✅

Publicating a Smart Contract: check ! ✅

Uploading a Nft: not check... ❌

Hmm... Interesting ! There is only one last step left to upload our Nft !

### 1 - Uploading a Nft

In order to upload a Nft we will have to interact with the Starton API again.

🛠️ <u>Your Job</u> 🛠️  

1. Open [`controller/NftController.ts`](./api/src/controller/NftController.ts) .
2. Implement the UploadImage, UploadMetadata and MintNft methods
3. Retrieve missing information with the database to complete the requests on Starton.
4. Implement new routes POST `nft/uploadNft` and GET `nft/userNft/:id` corresponding to our controller in the NftRouter.ts file.
5. Test if your Nft uploads well with the help of Postman.

<u>Pro tips:</u>

> This exercice is based on the chapter 4 of the tutorial [Deploy your NFTs on blockchain with Starton](https://docs.starton.io/tutorials/deploy-your-nfts-on-blockchain-with-starton#5775)

### 2 - Saving and retrieving new Nft

Once your Nft is uploaded, it is rather convenient to store all its CIDs  in a NftSchema to be able to recover them later.

🛠️ <u>Your Job</u> 🛠️

1. Navigate to the `NftData`
2. Implement the UpdateNft method, to add new Nfts
3. Navigate to `NftController.ts`
4. Implement the getUserNft method
5. Create the GET `"/nftUser/:id"` route
6. Test if your implementation is working

🤖 Bip boop bip boop boop. Congratulations ! The backend part is now functional, but the job is not finished: go back to the first [README.md](../README.md) to see what's next !