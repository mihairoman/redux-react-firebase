import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6RqycrW8vqbS9S-HwXLIPTrOps-IUHh8",
    authDomain: "react-redux-marioplan-37025.firebaseapp.com",
    databaseURL: "https://react-redux-marioplan-37025.firebaseio.com",
    projectId: "react-redux-marioplan-37025",
    storageBucket: "react-redux-marioplan-37025.appspot.com",
    messagingSenderId: "18459562077"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;