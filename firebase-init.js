// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  limit,
  orderBy,
  onSnapshot,
  serverTimestamp,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBrz0a-3EY4MekB2sWiLoTIxcM6Bfo67Q",
  authDomain: "leaderboard-83560.firebaseapp.com",
  projectId: "leaderboard-83560",
  storageBucket: "leaderboard-83560.firebasestorage.app",
  messagingSenderId: "978097540126",
  appId: "1:978097540126:web:41d96b1626f8d8758c320f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  limit,
  orderBy,
  onSnapshot,
  serverTimestamp,
  increment
};