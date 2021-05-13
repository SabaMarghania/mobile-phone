import firebase, { firestore } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyByJSUNlcWgsJ8SWVZcuJqry3Z1XLYn6rE",
    authDomain: "mobile-phone-58636.firebaseapp.com",
    projectId: "mobile-phone-58636",
    storageBucket: "mobile-phone-58636.appspot.com",
    messagingSenderId: "980382103323",
    appId: "1:980382103323:web:264572536cb699a09e45be",
    measurementId: "G-T5XXYMZ1P4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;