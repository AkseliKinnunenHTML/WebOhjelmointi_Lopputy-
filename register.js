// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZU4ytJDWyBcWeIs4AS0jkq396Wxhci2o",
  authDomain: "databaselogin-94483.firebaseapp.com",
  projectId: "databaselogin-94483",
  storageBucket: "databaselogin-94483.appspot.com",
  messagingSenderId: "909988855266",
  appId: "1:909988855266:web:c6225d282603fac3298dbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();


const googleLogin = document.getElementById("submitButton");
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user
        console.log(user);
        });
        if (googleLogin) {
            googleLogin.addEventListener("click", function () {
                signInWithPopup(auth, provider)
                    .then((result) => {
                        // Kun kirjautuminen onnistuu..
                        const user = result.user;
                        console.log("User logged in:", user);
    
                        
                        window.location.href = "deepsite.html";
                    })
                    .catch((error) => {
                        console.error("Error during login:", error);
                    });
            });
        } else {
            console.error("Google login button not found!");
        }
    });
