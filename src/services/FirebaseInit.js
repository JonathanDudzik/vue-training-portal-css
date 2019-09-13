import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCfooWMrp5bbt3TufCjNdakhZJ8I2u0XF0",
    authDomain: "training-app-c847b.firebaseapp.com",
    databaseURL: "https://training-app-c847b.firebaseio.com",
    projectId: "training-app-c847b",
    storageBucket: "",
    messagingSenderId: "871503133300",
    appId: "1:871503133300:web:1012fba29120feebd7ef21"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()