const request = require("request");

const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';
const breed = process.argv[2];
const url = `${apiUrl}?q=${breed}`;

request(url, (error, response, body) => {

  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) { //found out this is typically used to check for errors because http responds with 200 when successfully connected
    console.error('Status code: ', response.statusCode);
    return;
  }

  if (body) {
    const data = JSON.parse(body);

    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.log('Breed not found. Please try again.');
    }
  }
});
