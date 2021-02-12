import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCrUI3NOJol7lVLx9VlLf9fIjsRHgzNY4M",
    authDomain: "fire-code-compliance-software.firebaseapp.com",
    projectId: "fire-code-compliance-software",
    storageBucket: "fire-code-compliance-software.appspot.com",
    messagingSenderId: "1085587302993",
    appId: "1:1085587302993:web:a4afba4eafa24ccd152670",
    measurementId: "G-7EPQK3G2SK"
  };
  
  const app = firebase.initializeApp(firebaseConfig);

  const projectAuth = firebase.auth(app)


  let user = projectAuth.CurrentUser
  
  
    projectAuth.onAuthStateChanged(_user => 
    {
      
      user = _user
      if(_user == null)
      {
        console.log("no user has signed in yet")
      }
      else
      {
        //console.log(user)
        
      }
      

    })

  export{user, projectAuth}