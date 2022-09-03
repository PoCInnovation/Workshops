import express from 'express';

import { initializeApp } from 'firebase/app'
import {
  getFirestore
} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2e7Qg9ZamfWhZ6QyQkTwEoMWdsdmJLNc",
  authDomain: "try-something-new-206a1.firebaseapp.com",
  projectId: "try-something-new-206a1",
  storageBucket: "try-something-new-206a1.appspot.com",
  messagingSenderId: "613338364088",
  appId: "1:613338364088:web:f174b955e4ea3511c6dc4d",
  measurementId: "G-XDKE66K47L"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
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

app.post('/register', register);

app.get('/login', login);

app.get('/logout', logout);

app.listen(4000, () =>
  console.log(`Example app listen on port: ${4000}!`),
);