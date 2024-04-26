import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, ge } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYbKa_VDvfPxXF9E5uUUIMF6U42l8b_4U",
  authDomain: "expressify-dec35.firebaseapp.com",
  projectId: "expressify-dec35",
  storageBucket: "expressify-dec35.appspot.com",
  messagingSenderId: "1062782089457",
  appId: "1:1062782089457:web:df9f7a035e71d8769d1150",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

