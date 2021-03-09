import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrUI3NOJol7lVLx9VlLf9fIjsRHgzNY4M",
  authDomain: "fire-code-compliance-software.firebaseapp.com",
  projectId: "fire-code-compliance-software",
  storageBucket: "fire-code-compliance-software.appspot.com",
  messagingSenderId: "1085587302993",
  appId: "1:1085587302993:web:7fdfca95f878b8d5152670",
  measurementId: "G-BXEZQLWTY3"
};

const authMaskApp = firebase.initializeApp(firebaseConfig, "authMaskApp");
const authMaskAuth = firebase.auth(authMaskApp);

export { authMaskAuth }