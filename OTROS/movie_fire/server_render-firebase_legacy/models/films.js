const firebase = require('firebase'),
    {filmDetails} = require('../utils/movie_details'),
    config = require('../config');

firebase.initializeApp(config.firebase);

const database = firebase.database().ref().child("server-render-firebase");

exports.getAll = () => {
    return new Promise ((resolve, reject) => {
        database.once("value", snapshot => {
            const films = snapshot.val();
            resolve(films);
        }, reject);
    });
};

exports.remove = id => {
    return new Promise ((resolve, reject) => {
        database.child(id).remove(err => {
            err ? reject() : resolve(); 
        });
    });
};


exports.update = (id, name) => {
    return new Promise ((resolve, reject) => {
        database.child(id).update({name}, err => {
            err ? reject(err) : resolve();
        });
    });
};

exports.get = id => {
    return new Promise ((resolve, reject) => {
        database.orderByKey().equalTo(id).once("child_added", snapshot => {
    		resolve(snapshot.val());
    	}, reject);
    });
};

exports.create = name => {
    return new Promise ((resolve, reject) => {
        filmDetails(name)
        .then((details=false) => database.push({name, details}, err => {
            err ? reject(err) : resolve();
        }))
        .catch(reject);
    });
};