const request = require('request');

const forecast = (latitude, longitude, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=08ffc90718048ad0d580242476c50664&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}& units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (body.error) {
      callback('Unable to find location!', undefined);
    } else {
      callback(undefined,

        // `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.

        `Weather description: ${body.current.weather_descriptions[0]},
         Temperature: ${body.current.temperature}°C,
         Feelslike: ${body.current.feelslike}°C,
         Humidity: ${body.current.humidity}%,
         Precipitation: ${body.current.precip}mm,
         Pressure: ${Math.trunc((body.current.pressure) * 100 / 133.322)}mmHg,
         Wind Speed: ${body.current.wind_speed} km/h,
         Wind Degree: ${body.current.wind_degree}°,
         Wind Direction: ${body.current.wind_dir},
         Cloudcover: ${body.current.cloudcover}%,
         Visibility: ${body.current.visibility}km,
         UV Index: ${body.current.uv_index}`
      );
    };
  });
};

module.exports = forecast;