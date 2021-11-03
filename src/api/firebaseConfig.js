import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIT4n3Omgt18mgJxibj3R2AWFL0nHy_IY",
    authDomain: "equicustom-69ca3.firebaseapp.com",
    databaseURL: "https://equicustom-69ca3-default-rtdb.firebaseio.com",
    projectId: "equicustom-69ca3",
    storageBucket: "equicustom-69ca3.appspot.com",
    messagingSenderId: "145223840518",
    appId: "1:145223840518:web:8bcf4f01a7f31466bee487",
    measurementId: "G-V5K8FFY1RJ"
};

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { database }