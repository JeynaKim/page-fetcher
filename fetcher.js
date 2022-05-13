const args = process.argv.slice(2);
const fs = require("fs");
const request = require("request");

const pageFetcher = function (url, fileName) {
  request(url, (error, response, body) => {
    if (error) {
      return console.log("error!", error);
    }
    // console.log(response);

    fs.writeFile(fileName, body, (err) => {
      if (err) {
        return console.log("error!", err);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${fileName}.`);
    });
  });
};

pageFetcher(args[0], args[1]);

