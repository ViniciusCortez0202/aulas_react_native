// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI8NVpdpHoLnEzhTsp1nPPeWTVZ5Z6eLI",
  authDomain: "aula6-a8050.firebaseapp.com",
  projectId: "aula6-a8050",
  storageBucket: "aula6-a8050.appspot.com",
  messagingSenderId: "924833518116",
  appId: "1:924833518116:web:a1d21898a13f3ed5fd3eb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;