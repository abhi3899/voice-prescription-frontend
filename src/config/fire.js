import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBA0N7mRtNBPh2MapH4C078AIMLwMTNFJE",
  authDomain: "voice-prescription-group68.firebaseapp.com",
  projectId: "voice-prescription-group68",
  storageBucket: "voice-prescription-group68.appspot.com",
  messagingSenderId: "944933420526",
  appId: "1:944933420526:web:743425c4e97b08b66ea2ff",
  measurementId: "G-2HVYFLESBR",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

