const request = require("request");
//to be honest i did not know earlier that request is used when we have to request some data from the api.
//Thats why request npm module is used here.
const url =
  "https://samples.openweathermap.org/data/2.5/forecast?id=6940463&appid=b1b15e88fa797225412429c1c50c122a1"; //everything starting from ? is a query string which starts with key, value pairs.
request({ url: url, json: true }, (error, response) => {
  //json:true automatically converts the json response for us.
  if (error) {
    console.log("Unable to connect to the internet");
  }else if(response.body.error){
      console.log("Unable to find the location");
  }
   else {
    const data = response.body;
    console.log(data.list[0].weather[0].description);
    console.log(
      "The temperature in the dt " +
        data.list[0].dt +
        " is " +
        data.list[0].main.temp
    );
  }
});

//api key
//b1b15e88fa797225412429c1c50c122a1

const secondurl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/kathmandu.json?access_token=pk.eyJ1IjoiYW1hbmMxMjQ4IiwiYSI6ImNrZndkdTY4dTFveGMyc216dHptdDVndG8ifQ.lP6SYu3vE82eI0vHnHNtKA";
request({ url: secondurl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the internet");
  }
  else if(response.body.features.length === 0){
    console.log("Unable to find the location");
  }
   else {
    const data = response.body;
    console.log("The lattitude is " + data.features[0].center[0]);
    console.log("The longitude is " + data.features[0].center[1]);
  }
});
