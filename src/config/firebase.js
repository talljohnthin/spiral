import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBwXnMsczR4_i08rWv-8DCjMi8L0A1Vi8",
    authDomain: "listkoo-e57bd.firebaseapp.com",
    databaseURL: "https://listkoo-e57bd.firebaseio.com",
    projectId: "listkoo-e57bd",
    storageBucket: "listkoo-e57bd.appspot.com",
    messagingSenderId: "88708603617",
    appId: "1:88708603617:web:99fcc12978bf122de6a1a0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase;

