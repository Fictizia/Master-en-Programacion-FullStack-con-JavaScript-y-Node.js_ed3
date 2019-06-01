const request = require('request'),
    config = require('../config');

//@see https://codereview.stackexchange.com/a/162418
function cleanObject (obj) {
   return Object.keys(obj).reduce((c, k) => (c[k.toLowerCase()] = obj[k], c), {});
}


exports.filmDetails = name => {
    const url = `http://www.omdbapi.com/?t=${name}&y=&plot=short&r=json&apikey=${config.apikey}`;
    return new Promise ((resolve, reject) => {
        request(url, (error, response, body) => {
            if(error) {
              console.log('error:', error);
              reject({error, status: response.statusCode, body});
            } else {
                resolve(cleanObject(JSON.parse(body)));
            }
        });
    });
};
