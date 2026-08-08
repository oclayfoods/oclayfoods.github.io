// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDu4ZhQdxrnI0DVuEJfxfwghAPJeabEgRs",
  authDomain: "oclay-feedback.firebaseapp.com",
  projectId: "oclay-feedback",
  storageBucket: "oclay-feedback.firebasestorage.app",
  messagingSenderId: "909802406072",
  appId: "1:909802406072:web:84d46adebc7983c05c744d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export
export { db, collection, addDoc };