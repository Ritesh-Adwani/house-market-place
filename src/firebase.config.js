import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9PcJKGX6R6PFpHS_umcm8FRq3RatEV0c",
  authDomain: "house-marketplace-c1c04.firebaseapp.com",
  projectId: "house-marketplace-c1c04",
  storageBucket: "house-marketplace-c1c04.appspot.com",
  messagingSenderId: "847528350278",
  appId: "1:847528350278:web:5b7d1cfc6f7472d0dfb047",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
