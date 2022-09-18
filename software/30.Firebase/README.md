# Workshop 30 - Firebase ✨

### Step 0 - Create your project
```
To create your firebase project, go to this page: [firebase](https://firebase.google.com).

You will have yo create a google account if you don't have any one, after that click on get started.

Now you will be ask to create new project so go ahead
```
### step 0.5 - Register your app

Now click on web app and register your app,
don't forget to copy the sdk given it look something like that:
```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // your config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```


## Step 1 - Init firestore
```
Now go to firestore database for create a database we have to do this for initialize our database it's like create table in SQL.

You need to start the db in test mode.

Set the time to: eur3 europe-west
```
### Step 1.5 - Create collection

Then create a collection whit collection ID put [Books]()

Then click on [Auto-id]()

your collection will have two field:

Author - String - and give a default value
Name   - String - and give a default value

Firebase set up is now finished let's code

### Step 2 - Create an account

Now you have configured your firebase project's,
you have to complete this code for create an account an store it in firestore.
You have to use firebase a function
```javascript
async function register(req, res) {
    // complete this code
}
```

### Step 3 - Login && Logout
It's not so different from the precedent step.
You always must use firebase given function
```javascript
async function login(req, res) {
    // complete this code
}
async function logout(req, res) {
    // complete this code
}
```

### Step 4 - Get book
A litle bit more tricky so u must find how to get our books collection
```javascript
async function getBooks(req, res) {
    // complete this code
}
```

### Step 5 - Add book
pretty same than the precedent one this time we ask u to add book to collection
```javascript
async function addBooks(req, res) {
    // complete this code
}
```

### Step 6 - Cloud functions
The last step u must configure cloud functions and use it for transform the step 5 to cloud functions.
We will help u abit for this

First of all run these command:
```
npm install firebase-functions@latest firebase-admin@latest --save

firebase init emulators

firebase init functions

firebase emulators:start
```

you will have a folder functions, you need to add your firebase configuration
```
const firebaseConfig = {
    apiKey: ,
    authDomain: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: ,
    measurementId: 
};
```

samething as the first exercice, and now try to implement your addBooks but in cloud function, i will help you abit

```
exports.addBooks = functions.https.onRequest(async (req, res) => {
    //add your code here
  });
  ```