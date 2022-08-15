// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDz8RNIvb3pZ47pienD9VthudeXRHkqEOg",
  authDomain: "seedhe-maut-db.firebaseapp.com",
  projectId: "seedhe-maut-db",
  storageBucket: "seedhe-maut-db.appspot.com",
  messagingSenderId: "477441356732",
  appId: "1:477441356732:web:763d092ba55ffbf934b1b9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
