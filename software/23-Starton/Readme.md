# Introduction

*Rob the robot* 🤖: Bip boop bip boop boop, mayday ! mayday ! Wake up, engineer of the Black Raven starship ! We just hit an asteroid, the kernel of the backend and frontend system is totally damaged ! We need it to navigate and communicate with Nfts in the entire galaxy. We need you to fix that !

# Part 1 : repair the backend

## Step 0 : Damage Recognition

Humm... I see you’ve lost your memory. I will help you to fix the system.

First of all, we will begin with the backend.
Let's check the extend of the dammage !

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

    - The router folder concerns the implementation of all api's endpoints

    - The services folder concerns all the services used by the application.

The index.ts file is the entrypoint of our application

## Step 1 : User handling and authentification

To be able to interact with other users of the blockchain with our Nft messages, we need them to be able to identify themselves.

### 1 - Interaction with the database

First of all, go to the file `src/controller/UserData.ts`. This file has for role to interact with our Mongo database, and to be able to insert, modify, delete
users. Inside, you will find the UserData class and the following methods:

    - getById
    - register
    - login
    - update
    - delete

Each method designates an action that we want to do with our database. These methods require the model UserShemma.ts present in the Models folder. You also need the UserDataDto interface as the return type of your methods.

Your Job :

    - Implement missing methods

Pro tips: 

MongoDb is a database which we interact with in an asynchronous way. Here is an article about the subject: [Learn await/async](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)

The mongo [findById](https://mongoosejs.com/docs/api/model.html#model_Model.findById), [findOne](https://mongoosejs.com/docs/api/model.html#model_Model.findOne), [create](https://mongoosejs.com/docs/api/model.html#model_Model.create), [save](https://mongoosejs.com/docs/api/model.html#model_Model-save), [deleteOne](https://mongoosejs.com/docs/api/model.html#model_Model.deleteOne) methods provided by the mongoose library in the UserShemma.ts will be very helpfull.

### 2 - Retrieving queries and sending new responses.

You have finished implementing interactions with the database. Now, it will be necessary to recover the different requests received by the api.

Open the file "src/controller/UserController.ts".

Oh, lucky you ! Just part of the file has been damaged !

Your Job:

    - Implement missing methods.

Pro tips:

It is important to send the correct response code with your api. I strongly advise you to take a look at this article: [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

Here is a documentation about how to receive requests and send responses. [ExpressJS Request & Response
](https://www.pabbly.com/tutorials/express-js-request-response/)

### 3 - Implementation of new endpoints

You’re ready for it! Now that you have implemented the controller part we need to expose new endpoints to let the interface interact with our backend.

Navigate to the "src/Router/userRoute.ts" file

Your Job :

    - Create the following endpoints and apply the corresponding controller methods:

            - GET '/id/:id'

            - PUT '/register'

            - GET '/home

            - PATCH '/update'

            - DELETE '/id/:id'

        - Once finished, we must indicate to our index.ts that our router exists:

            - import your router 
            
            - call the method .use the app variable

            - Insert middleware between route and router.
        
        - Start the backend with the command npm run dev

        - Test your endpoints with Postman.

        - Test if informations of each user are stored correctly in mongoDb. Check that with the help of the mongo express interface avaible at.

Pro tips:

Here is an article about router in express : [How to Build a REST API With Express JS and Typescript - Part II (Organising Routes)](https://medium.com/geekculture/how-to-build-a-rest-api-with-express-js-and-typescript-part-ii-organising-routes-ee293eeb16eb)

### 4 - Users authentication

Congratulation ! You can now create, modify, and remove users. However, we are missing one crucial step: authentication. 

A middleware is a function that allows interaction with informations which transit in a function call. They are very useful in user verification because they can prevent the execution of an endpoint if the user does not have the right token of identification. This is the role of our auth middleware present in the middleWares folder in `auth.ts`.

Your Job: 

    - Navigate to the middleware section of the project and open the auth.ts file.

    - Create a route in the index.ts file with the path "/helloWorld" which returns as response a status 0K with the message "hello world"

    - Test your route

    - Put your middleware in between the route and the callback response function.

    - You should now receive an error "403 No acces token provided"

As you can see, your users can not yet prove that they are who they pretend to be or not to be ;) but don't panic we will see this together.

Going back to our UserData.ts folder, we will add some changes to our methods.

Your Job:

    - We will use the jsonWebToken library to generate a new token when the user logs in, or is created. This token will be based on the user id and the TOKEN_SECRET environment variable. We need to implement that in login and register methods.

    - then in a second step we will use the bcrypt library to compare the user’s password with the hash created in the database verify that the password entered is correct when logging in. We need to implement that in login and register methods too.

Pro tips:

Here is a documentation about jsw token creation: [How To Use JSON Web Tokens (JWTs) in Express.js
](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)

Here is a documentation about password hash: [Using Bcrypt To Hash & Check Passwords In Node.js
](https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js)


## Step 2: Creating a smart contract

Good job ! the backend app is once again able to manage users and authenticate them. However, we still have work to do. We need to create Smart Contracts with ipfs to store our NFT’s!

To create a Smart Contract capable of saving Nfts, we will have to follow several steps:

    - Create a pattern of metadata that will constitute the information of the NFTs that will be created by us later

    - Retreive the CID of these metadata, and then create a Smart Contract with the informations you need to publish it.

    - Create your control method linking everything. In your case, these will already be implemented.

That’s when Starton’s API comes in. We’re going to use it in everything concerning the blockchain. To be able to interact with this api you will need your API key available in the dev section of the dashboard, you will also need your wallet ID and to claim token on polygon-mumbai if you haven’t already do that.

Your Jobs: 

    - Implement missing methods

    - Implementes routes

    - Test if the contract does publish on your Starton dashboard.


Pro tips:

If you want more details about Ipfs storage check this link: [What is IPFS?](https://docs.ipfs.io/concepts/what-is-ipfs/)

When you need to interact with another API, it's very important to check the api documentation. Here it is [API Doc](https://docs.starton.io/connect/api-doc)

Also this exercise is based on the first three chapters of the tutorial [Deploy your NFTs on blockchain with Starton
](https://docs.starton.io/tutorials/deploy-your-nfts-on-blockchain-with-starton)

### 2 - Saving a smart contract for a user.

Incredible ! Our backend manages Nft's creation ! We will finally get out of here alive ! However, we have to add one last thing for the smart contract creation. We need to save it in a Nft Schema.

Go to the data folder and open the NftData.ts file. You will find the following methods:

    - getByUserId

    - create

    - update
    
You will also need the NftSchema file to store the Nft corresponding to each user.

Your Job: 

    - Implement the create and getByUserId methods. we’ll see the rest later.

    - Test that the contract stores itself well for each user

## Step 3: Nft Release

bip boop boop...

Creating a user: check ! ✅

Publication of a Smart Contract: check ! ✅

Uploading of a Nft: not check... ❌

Hmm... Interesting ! There is only one last step left for uploading our Nft !

### 1 - Uploading a Nft

In order to upload a Nft we will have to interact with the Starton API again.

Your Jobs:  

    - Open the NftController.ts file

    - Implement the UploadImage, Upload Metadata, MintNft methods

    - Linking methods to retrieve missing information in the database

    - Implement new routes in the controller

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

Bip boop bip boop boop. Congratulations ! The backend part is now functional but the job is not finished: you will have to fix the frontend part now...