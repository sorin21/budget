import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDem_Qsv4JeGFZhAnzzu-nuwnCyUZnnK_U",
  authDomain: "budget-2f5dc.firebaseapp.com",
  databaseURL: "https://budget-2f5dc.firebaseio.com",
  projectId: "budget-2f5dc",
  storageBucket: "budget-2f5dc.appspot.com",
  messagingSenderId: "442689648965"
};
firebase.initializeApp(config);
const database = firebase.database();
// get a referita to database
// database.ref().set({
//   name: 'Dan',
//   age: 27,
//   isSingle: false,
//   location: {
//     city: 'Braila'
//   }
// }).then(() => {
//   console.log('response');
// }).catch((error) => {
//   console.log('Error: ', error);
// }) 
// database.ref('age').set(28);
// database.ref('name').set('Sorin');
// database.ref('location/city').set('Bucuresti');
database.ref('isSingle').remove()
  .then(() => {
    console.log('Remove succeeded');
  })
  .catch((error) => {
    console.log('Remove failed: ', error.message);
  })