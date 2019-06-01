const request = require('request'),
    config = require('../config');

exports.filmDetails = name => {
    const url = `http://www.omdbapi.com/?t=${name}&y=&plot=short&r=json&apikey=${config.apikey}`;
    return new Promise ((resolve, reject) => {
        request(url, (error, response, body) => {
            if(error) {
              console.log('error:', error);
              reject({error, status: response.statusCode, body});
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
};
