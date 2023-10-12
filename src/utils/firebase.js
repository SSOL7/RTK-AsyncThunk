import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBzK9ktxdTfI8k66p2xrAlKzcFv-SWXKjY",
  authDomain: "final-2cfcd.firebaseapp.com",
  projectId: "final-2cfcd",
  storageBucket: "final-2cfcd.appspot.com",
  messagingSenderId: "691633928499",
  appId: "1:691633928499:web:a90a9998644c60dcd5a646",
  measurementId: "G-8B3EH98LJ6"
};


const app = initializeApp(firebaseConfig);

export const firebaseauth = getAuth(app);

