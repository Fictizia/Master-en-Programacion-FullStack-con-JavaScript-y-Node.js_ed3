
const firebase = require('firebase')
const { firebaseConfig, firebasePath } = require('../config')
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref(firebasePath)


function getAllFilmsDB () {
  return new Promise((resolve, reject) => {
    db.once('value', (snapshot) => {
      const originalData = snapshot.val()
      const data = [];
      // @TODO: resolver
      /* 
      
      {
        "-LfOniihOKPbedDrHCNu": {
          title: "Minions"
        }
      }
      --- objetivo ----
      [{
        id: "-LfOniihOKPbedDrHCNu"
        title: "Minions"
      }]
      */
      resolve(originalData)
    }, reject)
  })     
}

function filmDetailsDB (id) {
  return new Promise((resolve, reject) => {
    db.child(id).once('value', (snapshot) => {
      const data = snapshot.val()
      resolve(data)
    }, reject)
  })     
}

function createFilmDB (data) {
  return db.push(data)
}

function editFilmDetailsDB (id, newTitle) {
  return db.child(id).update({
    title: newTitle
  })
}

function deleteFilmDB (id) {
  return db.child(id).remove()
}

// createFilmDB({ title: 'Minions'});
// createFilmDB({ title: 'The Hulk'});
// createFilmDB({ title: 'The Matrix'});
// editFilmDetailsDB("-LfOmgHi75rrWg-2YT3u", "Banana!");
// deleteFilmDB("-LfOmgHi75rrWg-2YT3u").then(console.log).catch(console.log)
//filmDetailsDB('-LfOniihOKPbedDrHCNu').then(console.log).catch(console.log);
// getAllFilmsDB().then(console.log).catch(console.log);

// Export for api.js
module.exports = { getAllFilmsDB, filmDetailsDB, createFilmDB, editFilmDetailsDB, deleteFilmDB }