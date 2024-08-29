// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi48efhtM7c7KNAds1L9KzfZlzzuQrxM8",
  authDomain: "damasya-f2602.firebaseapp.com",
  projectId: "damasya-f2602",
  storageBucket: "damasya-f2602.appspot.com",
  messagingSenderId: "823842588126",
  appId: "1:823842588126:web:cc028caa1899b9ca4e894f",
  measurementId: "G-9DDJBK672T"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
