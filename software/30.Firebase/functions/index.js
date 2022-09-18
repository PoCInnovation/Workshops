const functions = require('firebase-functions');
const admin = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyA2e7Qg9ZamfWhZ6QyQkTwEoMWdsdmJLNc",
    authDomain: "try-something-new-206a1.firebaseapp.com",
    projectId: "try-something-new-206a1",
    storageBucket: "try-something-new-206a1.appspot.com",
    messagingSenderId: "613338364088",
    appId: "1:613338364088:web:f174b955e4ea3511c6dc4d",
    measurementId: "G-XDKE66K47L"
};

admin.initializeApp(firebaseConfig);

exports.addBooks = functions.https.onRequest(async (req, res) => {
    const original = { title: req.body.title, author: req.body.author };
    
    await admin.firestore().collection('books').add({original: original})
    .then(() => {
        res.send({result: 'Book added!'});
    }).catch((err) => {
        console.log(err.message);
    });
  });