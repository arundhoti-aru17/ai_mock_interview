// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMVNxLKCDmioiVJYpSzCqFanDyD54actU",
    authDomain: "prepwise-fce94.firebaseapp.com",
    projectId: "prepwise-fce94",
    storageBucket: "prepwise-fce94.firebasestorage.app",
    messagingSenderId: "248163391158",
    appId: "1:248163391158:web:064bc691dc66e3c842b817",
    measurementId: "G-YRM5GC0NBE"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);