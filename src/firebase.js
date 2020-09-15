import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAt6tETGI-Pivp0xenRKGCntOk90jT0rGw',
  authDomain: 'memoire-fd589.firebaseapp.com',
  databaseURL: 'https://memoire-fd589.firebaseio.com',
  projectId: 'memoire-fd589',
  storageBucket: 'memoire-fd589.appspot.com',
  messagingSenderId: '28383892522',
  appId: '1:28383892522:web:c0f4193171571c8b',
};
firebase.initializeApp(config);

export default firebase;

export const KEY = 'AIzaSyArESrDNOrqcPZvntIP04SPcG8-qZjkRpA';
