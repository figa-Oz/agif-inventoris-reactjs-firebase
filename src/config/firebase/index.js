import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initial Firebase Config from your Firebase Project
// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyCxnLup86SBLOzV1Ijc5G3Lt95TCVfxEtM",
    authDomain: "wpa-react.firebaseapp.com",
    databaseURL: "https://wpa-react.firebaseio.com",
    projectId: "wpa-react",
    storageBucket: "wpa-react.appspot.com",
    messagingSenderId: "920003021629",
    appId: "1:920003021629:web:484f28554a40d1a0215354"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = firebase.database();

export default firebase