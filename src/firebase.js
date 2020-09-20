import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD__O0O2Pn1l-pRPYnTXjN58Fa8b69tDlU",
    authDomain: "e-clone-a5a98.firebaseapp.com",
    databaseURL: "https://e-clone-a5a98.firebaseio.com",
    projectId: "e-clone-a5a98",
    storageBucket: "e-clone-a5a98.appspot.com",
    messagingSenderId: "930044630330",
    appId: "1:930044630330:web:d4f5a6663c274aa188ac03",
    measurementId: "G-FHBXQXWX7F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };