const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
if (process.argv[2]) {
  geocode(process.argv[2], (error,  {longitude,latitude,place} ) => {
    if (error) {
      return console.log(error);
    }
    //destructuring the object
    forecast(longitude,latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(place);
      console.log(forecastData);
    });
  })
} else {
  console.log("Please provide the location");
}
