import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqZSs4LBSeHGZsACGUQZiIURgMS0msdYU",
  authDomain: "pw2022gs.firebaseapp.com",
  projectId: "pw2022gs",
  storageBucket: "pw2022gs.appspot.com",
  messagingSenderId: "125257553523",
  appId: "1:125257553523:web:ddec5591fe2b9522c63c06",
  measurementId: "G-NG7T8SSYGC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
