const geocode = require("./utils/geocode");
const weather = require("./utils/weather");

const data = geocode("Bulandshahr", (error, res) => {
  if (error) {
    return console.log(error);
  }
  const long = res.longitude;
  const lat = res.latitude;
  const location_name = res.location;
  console.log(`Showing data for the ${location_name}`);
  weather(long, lat, (error, res) => {
    if (error) {
      return console.log(error);
    }
    const { data } = res;
    console.log(
      data,
      `Temperature outside is ${data.temperature} and humidity:${data.humidity}`,
    );
  });
});
