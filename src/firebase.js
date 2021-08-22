import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9TRv4N25jYMqcewfqzam1R6-SxxzYfr8",
    authDomain: "geowebshop-5fe4c.firebaseapp.com",
    projectId: "geowebshop-5fe4c",
    storageBucket: "geowebshop-5fe4c.appspot.com",
    messagingSenderId: "864190836527",
    appId: "1:864190836527:web:fc8610e704896d8f947bda"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}