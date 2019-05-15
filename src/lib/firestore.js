import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD8QkUipZ_JNcMbNLAm58THX0K3GRSuWr0',
  authDomain: 'rimac-repuestos.firebaseapp.com',
  databaseURL: 'https://rimac-repuestos.firebaseio.com',
  projectId: 'rimac-repuestos',
  storageBucket: 'rimac-repuestos.appspot.com',
  messagingSenderId: '151232070298',
  appId: '1:151232070298:web:a8ecd2cee5afbf90',
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
