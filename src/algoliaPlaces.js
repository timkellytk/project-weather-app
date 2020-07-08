import places from 'places.js';

const algoliaPlaces = (input, callback) => {
  const placesAutocomplete = places({
    appId: 'plUKYE6MHLZW',
    apiKey: '494e4aad2936484cc24439027b7a32e6',
    container: input,
  });

  placesAutocomplete.on('change', callback);
};

export default algoliaPlaces;
