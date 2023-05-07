import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjMAsN1k18uTQ3Vi7PHoeXLaqDW_lS9ug",
  authDomain: "ecommerce-react-246b2.firebaseapp.com",
  projectId: "ecommerce-react-246b2",
  storageBucket: "ecommerce-react-246b2.appspot.com",
  messagingSenderId: "960022457392",
  appId: "1:960022457392:web:42aac2bba531ae1abf51f5"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)