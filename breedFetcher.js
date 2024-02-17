const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(apiUrl, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (body) {
      const data = JSON.parse(body);

      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback('Breed not found. Please try again.');
      }
    }
  });
};

module.exports = { fetchBreedDescription };
