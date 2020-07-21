import firebase from 'firebase';



var firebaseConfig = {
  apiKey: "AIzaSyDY6dUzpFqjo9iQYWlx7E-fiOYl8Azog9U",
  authDomain: "auth-5fbb0.firebaseapp.com",
  databaseURL: "https://auth-5fbb0.firebaseio.com",
  projectId: "auth-5fbb0",
  storageBucket: "auth-5fbb0.appspot.com",
  messagingSenderId: "717864216639",
  appId: "1:717864216639:web:8bcb87ec9a2de76c28308a"
};
  

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;