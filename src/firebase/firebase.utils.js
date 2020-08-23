import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { firebaseKey } from "../assets/base-data";
import { errorNotification } from "../assets/functions";

const firebaseConfig = firebaseKey;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

// Get Current User in session
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Add New user to firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  try {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
      const { email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }

    return userRef;
  } catch ({ message }) {
    errorNotification("Database Error", message);
  }
};

// Locate User in firestore

export const locateUser = async (userId)=> await firestore.doc(`users/${userId}`)