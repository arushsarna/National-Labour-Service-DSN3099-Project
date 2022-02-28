// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBVAl4mmvR8KghL2LqK91UiSGzN6i_qW4s",
        authDomain: "national-labour-service-dsn.firebaseapp.com",
        databaseURL: "https://national-labour-service-dsn-default-rtdb.firebaseio.com",
        projectId: "national-labour-service-dsn",
        storageBucket: "national-labour-service-dsn.appspot.com",
        messagingSenderId: "846158267108",
        appId: "1:846158267108:web:f06271ca3b9565c975e2f1",
        measurementId: "G-RK2135N7YS"
    }
);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage }
