import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBLar4wsTUfH3E78psDMPBEbJRHv9JBnC0",
        authDomain: "onlinestore-db-f05dd.firebaseapp.com",
        projectId: "onlinestore-db-f05dd",
        storageBucket: "onlinestore-db-f05dd.appspot.com",
        messagingSenderId: "199556381638",
        appId: "1:199556381638:web:58071b14605e0ce47150c7",
        measurementId: "G-QY6FE01GJR"
    };

    firebase.initializeApp (config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore ();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters ({ prompt: 'select_account'});
    export const signInWithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;



