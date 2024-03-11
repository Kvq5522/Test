// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6fVbAR-VrE77YvuTSSuO9GBuOlC712vM",
  authDomain: "testfirebase-66e10.firebaseapp.com",
  projectId: "testfirebase-66e10",
  storageBucket: "testfirebase-66e10.appspot.com",
  messagingSenderId: "33412031371",
  appId: "1:33412031371:web:909b8c7d329fc0ef1bc58e",
  measurementId: "G-PC2TC05FVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

app.listen(8080, function () {
  console.log('Server is running on port 3000');
});

app.get("/", function (request, response) {
  response.sendFile("./public/index.html", { root: __dirname });
});

const signupForm = document.querySelector('.form');
const password = signupForm.querySelector('#password');

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

function sendSignup(auth, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert('Signed in as ' + user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

function signUp() {
	document.querySelector('.form').addEventListener('submit', (e) => {
		e.preventDefault();

		const email = signupForm.querySelector('#email').value;

		if (true) {
			sendSignup(auth, email, password.value);
		}
	});
}

sendSignup(auth, 'vinhkhangquach2002@gmail.com', '123456')