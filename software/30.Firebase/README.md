# Workshop 30 - Firebase ✨

✔️ Discover the power of an app development platform

✔️ Create a collection in a NoSQL database

✔️ Build an authentication system

✔️ Get a preview of serverless functions    

## Step 0 - Initialization

All the required information to install the workshop's dependencies are given in the [SETUP.md](./SETUP.md)

### Step 0.5 - Create your project
Let's create your Firebase project 🚀  
For this, go [the Firebase console](https://console.firebase.google.com/) and choose a name for your project (you can use `firebase-workshop-poc` for example 😉)

Firebase will then take you to a dashboard where you will be able to select an app on which you want to add Firebase:  
![image](https://user-images.githubusercontent.com/49811529/193420648-40733ffd-a5f3-4935-915a-5c599d5476dd.png)

Click on the web icon `</>`, you'll need to enter a name once again (using the same name as before is fine).
> ⚠️ Don't select the hosting option, it's another great feature of Firebase but we won't cover it here

And just with those few clicks you're are done!  
Firebase should give you a command to run in your local project to install the Firebase package, as long as some starter code that you can paste in your `index.js` 🤩

## Step 1 - Authentication
Now you are ready to use your first Firebase service: Authentication 🔒  
You just have to activate the `Email/Password` provider in the `Sign-in method` section of [your Firebase console](https://console.firebase.google.com/):  
![auth-console](https://user-images.githubusercontent.com/49811529/193460013-bda98391-0964-4481-a91f-e4029812ac2f.png)

And you are ready to code!
Let's write some code to create an account in `index.js` in a function with the following prototype:  
```javascript
function register(req, res) {
    // Complete this code
}

app.post('/register', register);
```
> This function will be executed every time a `POST` request is made to `localhost:4000/register` 😉

Your objective is to retrieve the `email` and `password` from the request body, create a user in Firebase, and return the registered user object on success (or an error message on failure).

> 💡 You'll deal with [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), so you'll need to use the [.then() and .catch() methods](https://www.freecodecamp.org/news/javascript-promise-methods/)
 to return data, or [`async/await`](https://javascript.info/async-await) if you prefer

To test your function, we created a frontend for you 🎉, here's how to launch it:
```shell
# Go in the folder
cd frontend

# Install dependencies
npm install && npm install -g ng

# Start the project
npm start
```

Then you can go to `http://localhost:4200/register` and try to create your user (check in Firebase if it worked)

> 💡 You can also use the browser console to debug, but some non-related error messages may appear due to other routes not being created... yet 😉

## Step 2 - Login and logout
Let's make sure you have understand how authentication works in Firebase 😄

Nothing new here, you have to create 2 other endpoints `/login` and `/logout`, using the `POST` method as before
 to complete your authentication workflow 🔥
```javascript
async function login(req, res) {
    // complete this code
}
async function logout(req, res) {
    // complete this code
}
```

> Again, you can test using the frontend at http://localhost:4200/login and with the logout button 😉

## Step 3 - Firestore, a NoSQL cloud database
Authentication is great, but you can do a lot more with other Firebase products, like Firestore 💥  
It's a flexible database to store any type of data that you want, with out of the box synchronization to keep your data updated in realtime between your clients and server 😍

Back to your project dashboard, select Cloud Firestore and create a database 🔥

![cloud-firestore](https://user-images.githubusercontent.com/49811529/193421532-f8281f56-f7e5-47ac-a6af-ce88ef0bd98a.png)

> 💡 You can use the test mode to avoid setting up security rules

> Select a location near you for better performance, like `eur3 (europe-west)` in our case 😉

## Create a collection

Let's create a collection:

Click on `+ Start collection` and create one named `Books`.
You can then use the Auto-ID option 😄

The last thing to do is to create the 2 fields you will use:
- `author` of type `string`
- `title` of type `string`
> Don't forget to add default values for these fields 😉

Now let's code 🚀

## Add a book

Create an endpoint `/book` using the `POST` method to add a new document in Firestore 🔥

Same as before, you'll the use a code similar to this one:
```javascript
async function addBook(req, res) {
    // complete this code
}

app.post("/book", addBook);
```

> You need to import the functions necessary to interact with your Firestore instance from `firebase/firestore` 😉

> 💡 This [documentation](https://firebase.google.com/docs/firestore/quickstart#web-version-9) can help you understand how to use the Firestore SDK.

You can use the frontend and then check your Firebase console if the document was added 😉

## Step 4 - Retrieve the books

Adding a book is great, but you want to be able to display them in our app too 🙂

Let's see if you've understood how it works by creating an endpoint `/books` to return all the books in the collection with a `GET` method:
```javascript
async function getBooks(req, res) {
    // complete this code
}
```

If you do it right, the front should automatically display them in the home page 🥳

### Step 5 - Cloud functions
This last step is a bit more complicated: until now, all the functions you've written are exposed in an express API that should be reachable anytime for your frontend to work.

In today's world, a lot of applications choose to use [a serverless backend](https://www.cloudflare.com/learning/serverless/what-is-serverless/) instead of fixed amounts of servers to handle incoming requests.

Firebase has its own serverless framework that you will use here: [Cloud Functions](https://firebase.google.com/docs/functions) 🔥

Your objective is to replace the `addBook` function with a cloud function 😄

> You'll use an [emulator](https://firebase.google.com/docs/functions/local-emulator) to run it locally, but later you could deploy it on Firebase 🚀

Run these commands to setup the emulator:
```
npm install firebase-functions@latest firebase-admin@latest --save

firebase init emulators

firebase init functions

firebase emulators:start
```

> 💡 It will create a `functions` folder, where you need to add your Firebase configuration in `index.js`.

Then you can implement your cloud function:
```js
exports.addBooks = functions.https.onRequest(async (req, res) => {
    // add your code here
});
```

## To go further

You've explored a few options of Firebase, but it's a powerful platform on which you can do a lot more 😄
- [Measure your app usage](https://firebase.google.com/docs/analytics/) with the integration of Google Analytics
- [Hosting on Firebase](https://firebase.google.com/products/hosting) to deploy anything from Cloud functions like the one you just created to static websites. It has a great integration with GitHub, supports custom domain names...
- You can also do [Machine Learning on Firebase](https://firebase.google.com/docs/ml) with their SDK to easily integrate AI features in a mobile app 🧠📱
- Discover [Supabase](https://supabase.com/), an open-source alternative to Firebase with similar services 🤩

## Authors

| [<img src="https://github.com/tonida-rodda.png?size=85" width=85><br><sub>Toni Da rodda</sub>](https://github.com/tonida-rodda) | [<img src="https://github.com/RezaRahemtola.png?size=85" width=85><br><sub>Reza Rahemtola</sub>](https://github.com/RezaRahemtola)
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
