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

const notes = [
  {
    id: '12',
    title: "First note",
    body: "This is a demo note."
  },
  {
    id: '142fd',
    title: "Another note",
    body: "Ala bala portocala note me."
  }
];
// Adding Data
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


// Update Data
// database.ref().update({
//   name: 'Mike',
//   age: 38,
//   job: 'Developer',
//   isSingle: null, // delete it
//   'location/city': 'Boston'
// })

// // Remove Data
// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Remove succeeded');
//   })
//   .catch((error) => {
//     console.log('Remove failed: ', error.message);
//   })

// Fetching Data - get only once data
// database.ref().once('value')
//   .then((response) => {
//     console.log('response', response.val());
//   })
//   .catch((error) => {
//     console.log('Error fetching data: ', error.message);
//   })

// Fetching Data - update the data automatically
// const onValueChange = database.ref().on('value', (response) => {
//   console.log("response", response.val());
// }, (error) => {
//   console.log('Error with data fetching', error.message);
// })

// setTimeout(() => {
//   database.ref('age').set(22);
// }, 3500);
// setTimeout(() => {
//   // unsubscribe the change
//   database.ref().off(onValueChange);
// }, 3500);
// setTimeout(() => {
//   database.ref('age').set(10);
// }, 3500);