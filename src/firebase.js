// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// [https://firebase.google.com/docs/web/setup#available-libraries](https://firebase.google.com/docs/web/setup#available-libraries)

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmi5-EHignisxIkBGNgYUdOdx3UXnU_WY",
  authDomain: "react-chat-f615b.firebaseapp.com",
  projectId: "react-chat-f615b",
  storageBucket: "react-chat-f615b.appspot.com",
  messagingSenderId: "299669595084",
  appId: "1:299669595084:web:70adb3ef7f4a9c47b23369",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
