const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiY2FtYW5jaDk2IiwiYSI6ImNrNXhjaWExYTA2NmgzbHBjYzdpaWk5eXIifQ.8O6kb2-d5y8ZeXiu4o-o9Q&limit=1`;
  // Same as url: url
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;

//

//

// Geocoding
// Address -> Lat/Long -> Weather

// const geoLocationURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FtYW5jaDk2IiwiYSI6ImNrNXhjaWExYTA2NmgzbHBjYzdpaWk5eXIifQ.8O6kb2-d5y8ZeXiu4o-o9Q&limit=1';

// request({ url: geoLocationURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to the GeoLocation Service');
//   } else if (response.body.features.length < 1) {
//     console.log('GeoLocation not found!');
//   } else {
//     const lat = response.body.features[0].center[1];
//     const long = response.body.features[0].center[0];
//     console.log(lat, long);
//   }
// });
