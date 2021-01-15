// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAk97Q7BdQSubJmfP66VUJ0iANONjO4fdY",
    authDomain: "fir-crud-8cdc8.firebaseapp.com",
    projectId: "fir-crud-8cdc8",
    storageBucket: "fir-crud-8cdc8.appspot.com",
    messagingSenderId: "558872418091",
    appId: "1:558872418091:web:c7463986712e618d89976e",
    measurementId: "G-HXG62Z3X82"
  };

  const fire = firebase.initializeApp(firebaseConfig)
  const db = fire.firestore()

  export default db;