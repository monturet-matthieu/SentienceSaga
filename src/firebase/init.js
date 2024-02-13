import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrzk3T-YCrMtuUcKLtAHP126hV4vu5S1o",
  authDomain: "sentience-saga.firebaseapp.com",
  projectId: "sentience-saga",
  storageBucket: "sentience-saga.appspot.com",
  messagingSenderId: "412029276736",
  appId: "1:412029276736:web:e8c8e3638fde493f7a45a5",
};

initializeApp(firebaseConfig);

const db = getFirestore()
export default db