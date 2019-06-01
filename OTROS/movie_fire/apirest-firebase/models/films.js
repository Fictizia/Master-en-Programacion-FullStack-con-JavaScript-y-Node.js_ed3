const firebase = require('firebase'),
    {filmDetails} = require('../utils/movie_details'),
    config = require('../config');

firebase.initializeApp(config.firebase);

const database = firebase.database().ref().child(config.firebasePath);

exports.getAll = () => {
    return new Promise (async (resolve, reject) => {
        try {
            const snapshot = await database.once("value");
            const films = snapshot.val();
            const data = [];
            if(films){
                for (let id in films){
                    const filmData = films[id];
                    filmData.id = id;
                    data.push(filmData);
                }   
            }
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
};

exports.remove = id => {
    return new Promise (async (resolve, reject) => {
        try {
            await database.child(id).remove();
            resolve();
        } catch (err) {
            reject(err);
        }
    });
};


exports.update = (id, name) => {
    return new Promise (async (resolve, reject) => {
        try {
           await database.child(id).update({name});
           resolve();
        } catch (err) {
            reject(err);
        }
    });
};

exports.get = id => {
    return new Promise (async (resolve, reject) => {
        try {
            const snapshot = await database.orderByKey().equalTo(id).once("child_added");
            const data = snapshot.val();
                data.id = id; 
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
};

exports.create = name => {
    return new Promise (async (resolve, reject) => {
        try {
            const data = await filmDetails(name);
            data.name = name;
            await database.push(data);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
};