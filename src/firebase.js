// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCoOggqCDvVuCUny6J4gpxU4VGn_zmQgo",
  authDomain: "chatapplication-bdb29.firebaseapp.com",
  projectId: "chatapplication-bdb29",
  storageBucket: "chatapplication-bdb29.appspot.com",
  messagingSenderId: "317539787530",
  appId: "1:317539787530:web:5b053820028ef68af010f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();