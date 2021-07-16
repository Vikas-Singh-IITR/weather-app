const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=abca57572ddfbbd79228cd9ef0185690&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current;
  console.log(data);
});
