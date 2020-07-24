import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCxnLup86SBLOzV1Ijc5G3Lt95TCVfxEtM",
    authDomain: "wpa-react.firebaseapp.com",
    databaseURL: "https://wpa-react.firebaseio.com",
    projectId: "wpa-react",
    storageBucket: "wpa-react.appspot.com",
    messagingSenderId: "920003021629",
    appId: "1:920003021629:web:484f28554a40d1a0215354"
};
  
// Initialize Firebase
var nameDB = 'simple-inventoris';
var firebaseEnv =  firebase.initializeApp(firebaseConfig);

export default firebaseEnv;
export {nameDB};
