// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

// an app has only a single auth, it helps stay upto date on the authentication states happening throughout the app
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    //if userSnapshot doesn't exist, create one, else return userDocRef
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        //set the document
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }
        catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}