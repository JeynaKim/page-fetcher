const fs = require('fs');
const request = require('request');

const requestUrl =  function (url, callback)
request('http://example.edu', (error, response, body) => {
  if (error) {
    return callback(error, null);
  }
  if (response) {
    console.log(`Downloaded and saved ${bytes} bytes to ./index.html`);
    if (body) console.log(body); 
});



module.exports = {requestUrl};