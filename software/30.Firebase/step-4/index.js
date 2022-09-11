import express from 'express';

import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection
} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2e7Qg9ZamfWhZ6QyQkTwEoMWdsdmJLNc",
  authDomain: "try-something-new-206a1.firebaseapp.com",
  projectId: "try-something-new-206a1",
  storageBucket: "try-something-new-206a1.appspot.com",
  messagingSenderId: "613338364088",
  appId: "1:613338364088:web:f174b955e4ea3511c6dc4d",
  measurementId: "G-XDKE66K47L"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db, 'books');
const auth = getAuth();
const app = express();

app.use(express.json());

async function register(req, res) {
    const email = req.body.email;
    const password = req.body.password;
  
    await createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      res.send(cred.user);
    }).catch((err) => {
      res.send(err.message);
    });
}

async function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
  
    await signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      res.send(cred.user);
    }).catch((err) => {
      res.send(err.message);
    });
}

async function logout(req, res) {
    await signOut(auth)
    .then(() => {
      res.send('User logged out!');
    }).catch((err) => {
      res.send(err.message);
    });
}

async function addBooks(req, res) {
    const body = { title: req.body.title, author: req.body.author };
    const user = auth.currentUser;

    if (user) {
      await addDoc(colRef, body)
        .then( () => {
            res.send('data sended!');
        })
        .catch(err => {
            console.log(err.message);
        });
    } else {
      res.send('User not logged in!');
    }
}

app.post('/register', register);

app.get('/login', login);

app.get('/logout', logout);

app.post('/addBooks', addBooks);

app.listen(4000, () =>
  console.log(`Example app listen on port: ${4000}!`),
);