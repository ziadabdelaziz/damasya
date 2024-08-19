import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
