import express from 'express';

import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore'

const app = express();

app.use(express.json());


// config a genere via firebase en creant un projet a placer dans un conf.js
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

// collection ref
const colRef = collection(db, 'books')

// get collection data

function getBooks(req, res) {
    let books = [];

    getDocs(colRef)
    .then(data => {
      data.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id })
      })
      res.send(books);
    })
    .catch(err => {
      console.log(err.message)
    });
}

async function addBooks(req, res) {
    const body = { title: req.body.title, author: req.body.author };
    await addDoc(colRef, body)
        .then( () => {
            res.send('data sended!');
        })
        .catch(err => {
            console.log(err.message);
        });
}


// petite routes vite faits pour comprendre le fonctionnement
app.get('/books', getBooks);

app.post('/addBooks', addBooks);

app.listen(4000, () =>
  console.log(`Example app l4000 ${4000}!`),
);