import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbibMnfv-0hZyUV_S5XZhDsZ0vi2ojNl0",
    authDomain: "imoney-8a185.firebaseapp.com",
    projectId: "imoney-8a185",
    storageBucket: "imoney-8a185.appspot.com",
    messagingSenderId: "274592752272",
    appId: "1:274592752272:web:61987a298422ad53472e15",
    measurementId: "G-NCV5K0CSXW"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };