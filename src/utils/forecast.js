const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/86a635826dd08c0b398e6b9d54fae3ef/${latitude},${longitude}?units=us&lang=en`;

  // same as url: url
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Could not connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. The high today is ${body.daily.data[0].temperatureHigh} and the low is ${body.daily.data[0].temperatureLow}`
      );
    }
  });
};

module.exports = forecast;

//

//

//

//

// const url =
//   'https://api.darksky.net/forecast/86a635826dd08c0b398e6b9d54fae3ef/37.8267,-122.4233?units=us&lang=en';

// request({ url: url, json: true }, (error, response) => {
//   //   console.log(response.body.currently);
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(
//       `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`
//     );
//   }
// });
