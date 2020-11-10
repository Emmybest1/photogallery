import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCsFFEUXJNanKZ-PMQW5O4QPyQKz_Yd9hY',
  authDomain: 'photo-dc611.firebaseapp.com',
  databaseURL: 'https://photo-dc611.firebaseio.com',
  projectId: 'photo-dc611',
  storageBucket: 'photo-dc611.appspot.com',
  messagingSenderId: '321822383486',
  appId: '1:321822383486:web:90f398ec55a5117858e72f',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
Object.seal(firebaseConfig)

export { firebase, projectStorage, projectFireStore, timeStamp };
