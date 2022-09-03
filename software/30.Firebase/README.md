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