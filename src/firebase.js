import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCONUbMhpumjVA1K_BIUPBZ3NmPguh8dB4",
    authDomain: "twitter-clone-6b12e.firebaseapp.com",
    projectId: "twitter-clone-6b12e",
    storageBucket: "twitter-clone-6b12e.appspot.com",
    messagingSenderId: "914736735116",
    appId: "1:914736735116:web:da3abd61c222d467f5aca9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;