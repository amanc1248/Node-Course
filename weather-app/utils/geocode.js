const request = require("request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiYW1hbmMxMjQ4IiwiYSI6ImNrZndkdTY4dTFveGMyc216dHptdDVndG8ifQ.lP6SYu3vE82eI0vHnHNtKA";
  request({url, json: true }, (error, {body}) => {

    const theRequiredThing = {
      latitude: body.features[0].center[0],
      longitude: body.features[0].center[1],
      place: body.features[0].place_name,
      featureLength: body.features.length,
    };
    const { latitude, longitude, place ,featureLength} = theRequiredThing;
    if (error) {
      callback("Unable to connect to the internet", undefined);
    } else if (featureLength === 0) {
      callback("Unable to find the location", undefined);
    } else {
      callback(undefined, {
        longitude,
        latitude,
        place,
      });
    }
  });
};
module.exports = geocode;
