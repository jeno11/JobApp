// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkxKQNeqlTdgdlUJS1GERhxin11v4T2cE",
  authDomain: "fir-auth-d9f9f.firebaseapp.com",
  projectId: "fir-auth-d9f9f",
  storageBucket: "fir-auth-d9f9f.appspot.com",
  messagingSenderId: "91756426774",
  appId: "1:91756426774:web:3f54bc471e0e787f06a737"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};