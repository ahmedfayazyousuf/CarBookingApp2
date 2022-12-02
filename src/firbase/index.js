// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_TlDky5GvuULDls77DWjKdPaY6MV7EIM",
  authDomain: "thhbookingapp.firebaseapp.com",
  projectId: "thhbookingapp",
  storageBucket: "thhbookingapp.appspot.com",
  messagingSenderId: "74727663261",
  appId: "1:74727663261:web:9328b7ac4a89c6fce05674",
  measurementId: "G-QR16PZV4ME"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);

