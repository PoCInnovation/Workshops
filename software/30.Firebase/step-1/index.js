import express from 'express';

import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2e7Qg9ZamfWhZ6QyQkTwEoMWdsdmJLNc",
  authDomain: "try-something-new-206a1.firebaseapp.com",
  projectId: "try-something-new-206a1",
  storageBucket: "try-something-new-206a1.appspot.com",
  messagingSenderId: "613338364088",
  appId: "1:613338364088:web:f174b955e4ea3511c6dc4d",
  measurementId: "G-XDKE66K47L"
};

initializeApp(firebaseConfig)

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

app.post('/register', register);

app.listen(4000, () =>
  console.log(`Example app listen on port: ${4000}!`),
);