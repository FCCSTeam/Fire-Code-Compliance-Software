import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrUI3NOJol7lVLx9VlLf9fIjsRHgzNY4M",
  authDomain: "fire-code-compliance-software.firebaseapp.com",
  projectId: "fire-code-compliance-software",
  storageBucket: "fire-code-compliance-software.appspot.com",
  messagingSenderId: "1085587302993",
  appId: "1:1085587302993:web:a4afba4eafa24ccd152670",
  measurementId: "G-7EPQK3G2SK"
};

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firstore service
  const projectFirestore = firebase.firerstore()

  //export
  export { projectFirestore }