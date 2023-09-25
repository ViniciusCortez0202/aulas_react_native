import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0fRpfkYIXLFHGVq_5bxCayAg23T0qbIg",
  authDomain: "login-system-35e74.firebaseapp.com",
  projectId: "login-system-35e74",
  storageBucket: "login-system-35e74.appspot.com",
  messagingSenderId: "609261567921",
  appId: "1:609261567921:web:ebe1edaaa236a35deb0790"
};

const app = initializeApp(firebaseConfig);

export default app;