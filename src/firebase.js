// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, limit} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFtgfMl8p0bM2gbRhGRdio6gFyTWH187U",
  authDomain: "letrasdecadiz-45d5b.firebaseapp.com",
  projectId: "letrasdecadiz-45d5b",
  storageBucket: "letrasdecadiz-45d5b.appspot.com",
  messagingSenderId: "746443805130",
  appId: "1:746443805130:web:e385058c93559438d17f33",
  measurementId: "G-ZCB6PD5CTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

