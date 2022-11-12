import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAFxOYLnEXHp3RhyjN61iTQ6CqlrOj7jRs",
  authDomain: "e-library-c1ba1.firebaseapp.com",
  projectId: "e-library-c1ba1",
  storageBucket: "e-library-c1ba1.appspot.com",
  messagingSenderId: "829506145062",
  appId: "1:829506145062:web:48a599dc4c74e969a20fe7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
