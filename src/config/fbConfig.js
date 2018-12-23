import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBP0Fnvfg9hkgqACXzIuKcFyFrxFQuyMlk",
  authDomain: "webmcki-react.firebaseapp.com",
  databaseURL: "https://webmcki-react.firebaseio.com",
  projectId: "webmcki-react",
  storageBucket: "webmcki-react.appspot.com",
  messagingSenderId: "939704834954"
};

const settings = { timestampsInSnapshots: true };
firebase.initializeApp(config);
firebase.firestore().settings(settings);
//firebase.firestore()
export default firebase;

