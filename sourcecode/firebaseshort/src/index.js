import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  // Isi dengan konfigurasi Firebase Anda
  apiKey: "AIzaSyCuTAVb-2Yq2RoKlpX4HB3T5g5oe2TA5zk",
  authDomain: "shortlink-8ecf0.firebaseapp.com",
  projectId: "shortlink-8ecf0",
  storageBucket: "shortlink-8ecf0.appspot.com",
  messagingSenderId: "130714866220",
  appId: "1:130714866220:web:f31340de05d5986c8f7789",
  measurementId: "G-61KNZQZS25"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();