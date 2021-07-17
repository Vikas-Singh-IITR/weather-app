const request = require("request");
const geocode = require("./utils/geocode");

// const url = `http://api.weatherstack.com/current?access_key=abca57572ddfbbd79228cd9ef0185690&query=32.8267,-122.4233`;

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather stack api");
//   } else if (response.body.error) {
//     console.log("unable to find");
//   } else {
//     const data = response.body.current;
//     console.log(
//       `Temperature outside is ${data.temperature} and there is ${data.precip} % chances of rain`,
//     );
//   }
// });

// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidnM3MjY0NzIiLCJhIjoiY2tyNzBtOXZ6MGI3NTJxcGdoNWRxa2dkbiJ9.OT40_H70F5ZduYC22oeCvw";

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to geolocation api");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find the location");
//   } else {
//
//     console.log(latitude, longitude);
//   }
// });
