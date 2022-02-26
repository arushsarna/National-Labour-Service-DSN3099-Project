import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAKIUSKoCyMon-yVJD0QJYaTVjMgjpcHF4",
    authDomain: "login-authentication-3b2be.firebaseapp.com",
    projectId: "login-authentication-3b2be",
    storageBucket: "login-authentication-3b2be.appspot.com",
    messagingSenderId: "251606403044",
    appId: "1:251606403044:web:64172f89b59826a4cce9f1",
    measurementId: "G-NPL3S9KQSM"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;