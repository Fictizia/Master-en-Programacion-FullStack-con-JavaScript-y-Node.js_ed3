const mysql = require('mysql');
// Inicializar la BBDD
const connectionDB = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "MovieFire"
  });
  
  connectionDB.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS MovieFire", 
      function (err, result) {
        if (err) throw err;
        console.log("MovieFire database created!");
      });
    con.query("CREATE TABLE IF NOT EXISTS movies (movie_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT), (title VARCHAR(150) NOT NULL), (year INTEGER UNSIGNED NOT NULL DEFAULT 2000), (genre VARCHAR(50)), (director VARCHAR(150)), (actors VARCHAR(500)), (plot TEXT), (language VARCHAR(30)), (awards VARCHAR(100)), (imdbRating INTEGER UNSIGNED)", 
      function (err, result) {
        if (err) throw err;
        console.log("Movies table created!");
    });
      // createFilmDB();
    con.query("INSERT INTO movies (title, year, genre, director, actors, plot, language, awards, imdbRating) VALUES ('${Title}', '${Year}', '${Genre}', '${Director}', '${Actors}', '${Plot}', '${Language}', '${Awards}', '${imdbRating}')", 
    function (err, result) {
      if (err) throw err;
      console.log("Movies table created!");
    });
    // editFilmDetailsDB();
    con.query("UPDATE INTO movies(title) SET title = '${newTitle}' WHERE title = '${title}'", 
    function (err, result) {
      if (err) throw err;
      console.log("Film new title changed!");
    });
    // filmDetailsDB();
    con.query("SELECT title, genre, directors, actors, plot FROM movies WHERE title LIKE '${title}'", 
    function (err, result) {
      if (err) throw err;
      console.log("Check the film details!");
    });
    // deleteFilmDB();
    con.query("DELETE FROM movies WHERE title = '${title}'", 
    function (err, result) {
      if (err) throw err;
      console.log("Film deleted!");
    });
    // getAllFilmsDB(SELECT title, genre, directors, actors, plot FROM movies limit 10);
    con.query("SELECT title, genre, directors, actors, plot FROM movies limit 10", 
    function (err, result) {
      if (err) throw err;
      console.log("Film list!");
    });
  });



// Exportar las funciones CRUD
// module.exports: {}
// Export for api.js
module.exports = { getAllFilmsDB, filmDetailsDB, createFilmDB, editFilmDetailsDB, deleteFilmDB }
