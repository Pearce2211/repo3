import Todomatic from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr3yJ_ZEh5HLAWDiYZUZhlxxjGzOuMn8w",
  authDomain: "todomatic-37099.firebaseapp.com",
  databaseURL: "https://todomatic-37099-default-rtdb.firebaseio.com",
  projectId: "todomatic-37099",
  storageBucket: "todomatic-37099.appspot.com",
  messagingSenderId: "124660004736",
  appId: "1:124660004736:web:ffc0147ac6f8ed0edb3365",
  measurementId: "G-R040N65NSV"
};

Todomatic.initializeApp(firebaseConfig);
const databaseRef = Todomatic.database().ref();

export const todosRef = databaseRef.child("todo");
