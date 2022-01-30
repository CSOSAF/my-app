// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl8vHbkIbDuXYj12Lef62OUtuzpwjI-2k",
  authDomain: "wine-not-fc5f0.firebaseapp.com",
  projectId: "wine-not-fc5f0",
  storageBucket: "wine-not-fc5f0.appspot.com",
  messagingSenderId: "722993975001",
  appId: "1:722993975001:web:7f07d57bdcfcf979e1f8c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)




