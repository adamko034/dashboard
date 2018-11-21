const keys = require('../config/keys');
const axios = require('axios');

const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/';
const openWeatherApiKeyParam = `&APPID=${keys.openWeatherMapApiKey}`;

module.exports = app => {
  app.get('/api/weather/current/:city', async (req, res) => {
    const url = `${openWeatherUrl}weather?q=${
      req.params.city
    },pl&units=metric${openWeatherApiKeyParam}`;

    const {
      data: { weather, main, wind, clouds }
    } = await axios.get(url);

    res.send({
      description: weather[0].main,
      icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temp: main.temp,
      humidity: main.humidity,
      pressure: main.pressure,
      minTemp: main.temp_min,
      maxTemp: main.temp_max,
      wind: wind.speed,
      clouds: clouds.all
    });
  });
};
