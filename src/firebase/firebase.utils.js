import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXR5_cIF-LTU4sBdYlI_TnfWZMdZLy21s",
    authDomain: "crwn-db-207e7.firebaseapp.com",
    databaseURL: "https://crwn-db-207e7.firebaseio.com",
    projectId: "crwn-db-207e7",
    storageBucket: "crwn-db-207e7.appspot.com",
    messagingSenderId: "17542660676",
    appId: "1:17542660676:web:dc30e6d4d76452d8273211",
    measurementId: "G-P7H9C8P8PE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;