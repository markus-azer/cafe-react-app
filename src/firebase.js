import firebase from 'firebase';
import 'firebase/firebase-firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyADGhn1vWjgc77eujUPNKjvU_SaNsiRLU8',
  authDomain: 'cafe-react-app.firebaseapp.com',
  databaseURL: 'https://cafe-react-app.firebaseio.com',
  projectId: 'cafe-react-app',
  storageBucket: 'cafe-react-app.appspot.com',
  messagingSenderId: '728192537184',
  appId: '1:728192537184:web:8a79b03ee4ee70f820a905',
  measurementId: 'G-0Z8DYNYHR9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
