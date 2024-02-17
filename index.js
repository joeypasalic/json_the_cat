const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

const handleDescription = function(error, description) {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
};

fetchBreedDescription(breedName, handleDescription);
