/**
 *    Configuracion Firebase
 **/

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdhgKny5iKVDqIl6C-dTHMwzIOAeB0nks",
  authDomain: "todolist-react-f0f51.firebaseapp.com",
  databaseURL: "https://todolist-react-f0f51-default-rtdb.firebaseio.com",
  projectId: "todolist-react-f0f51",
  storageBucket: "todolist-react-f0f51.appspot.com",
  messagingSenderId: "683299821104",
  appId: "1:683299821104:web:cf21fca35b2088e8e03ff5",
};

export default initializeApp(firebaseConfig);
