CREATE DATABASE IF NOT EXISTS moviefire;

USE moviefire;

CREATE TABLE IF NOT EXISTS movies
    (
    movie_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(150) NOT NULL, 
    year INTEGER UNSIGNED NOT NULL DEFAULT 2000, 
    genre VARCHAR(350), 
    director VARCHAR(250), 
    actors VARCHAR(500), 
    plot TEXT, 
    language VARCHAR(30), 
    awards VARCHAR(100), 
    imdbRating INTEGER UNSIGNED
    );