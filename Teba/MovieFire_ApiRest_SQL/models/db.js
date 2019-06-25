const mysql = require('mysql');
const {db} = require('../config')
const connection = mysql.createConnection(db);

connection.connect();

function getMovieDetailsDB(id){
    return new Promise((resolve, reject) => {
        const queryText = `SELECT * FROM movies WHERE movie_id = ${id}`
        connection.query(queryText, (error, results) => {
            if (error) {
                console.log(error)
                return reject(error);
            };
            if(results.length === 0){
                return reject({msg: "Movie not found!"})
            }
            resolve(results[0]);
        });

    })
}

function getAllMoviesDB(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM movies', (error, results) => {
            if (error) {
                console.log(error)
                return reject(error);
            };
            resolve(results);
          });
    })
}

function editMovieDB(id, newTitle){
    return new Promise((resolve, reject) => {
        const queryText = `UPDATE movies SET title = '${newTitle}' WHERE movie_id = ${id}`;
        connection.query(queryText, (error, results) => {
            if (error) {
                console.log(error)
                return reject(error);
            };
            resolve(results);
          });
    })
}

function createMovieDB(data){
    return new Promise((resolve, reject) => {
        const columns = ["actors", "awards", "director", "genre", "imdbRating", "language", "plot", "title", "year"].sort()
        const values = columns.map(column => data[column]);
        const queryText = `INSERT INTO movies (??) VALUES (?)`
        connection.query(queryText, [columns, values], (err, result) => {
            if (err) {
             console.log(err)
             return reject(err);
            }
            resolve(result);
        });
    })
}

function deleteMovieDB(id){
    return new Promise((resolve, reject) => {
        const queryText = `DELETE FROM movies WHERE movie_id = ${id}`;
        connection.query(queryText, (err, result) => {
            if (err){
                console.log("Error:", err)
                return reject(err);
            }
            resolve(result);
        });
    })
}


module.exports = { getMovieDetailsDB, getAllMoviesDB, editMovieDB, createMovieDB, deleteMovieDB }