import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKnj1uyuYJlZvlyh4Z4u2j_ZUNthikjIQ",
  authDomain: "cscdata-30fb8.firebaseapp.com",
  projectId: "cscdata-30fb8",
  storageBucket: "cscdata-30fb8.appspot.com",
  messagingSenderId: "1055537604077",
  appId: "1:1055537604077:web:95357f71af2ce75c0973e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  get,
  onValue
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

console.log(app);
// sendMessage("Mariaaaaaaaaaaaaa", "ddhd@gmail.com", "23444", "My bio", "dev", "sport");

function sendMessage(name, email, password, bio, job, interest) {
  const database = getDatabase(app);

  set(ref(database, 'users/' + Math.floor(Math.random() * 10000000)), {
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  }).then().catch((error) => {
    alert(error)
  })

  const getUser = ref(database, 'users');

  var listUser = get(getUser, "users/" + "54519");

  listUser
    .then((result) => {
      console.log(result.val()); // This will log the resolved value
    })
    .catch((error) => {
      console.error(error); // Handle any errors that occurred during the promise execution
    });
}

const auth = getAuth();

// Set up an observer to watch for changes in authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);

   console.log(user)
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});

console.log(auth)
const database = getDatabase(app);
const userRef = ref(database, 'users');

onValue(userRef, function(snapshot) {
    console.log(snapshot.val())
})

console.log(onValue)