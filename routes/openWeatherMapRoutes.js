const keys = require('../config/keys');
const axios = require('axios');
const _ = require('lodash');

const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/';
const openWeatherApiKeyParam = `&APPID=${keys.openWeatherMapApiKey}`;

module.exports = app => {
  app.get('/api/weather/current', async (req, res) => {
    const city = req.user ? req.user.settings.city : 'Katowice';
    const url = `${openWeatherUrl}weather?q=${city},pl&lang=pl&units=metric${openWeatherApiKeyParam}`;

    const {
      data: { weather, main, wind, clouds, name }
    } = await axios.get(url);

    res.send({
      description: weather[0].main,
      icon: `http://openweathermap.org/img/w/${weather[0].icon}.png`,
      temp: main.temp,
      humidity: main.humidity,
      pressure: main.pressure,
      minTemp: main.temp_min,
      maxTemp: main.temp_max,
      wind: wind.speed,
      clouds: clouds.all,
      city: name
    });
  });

  app.get('/api/weather/forecast', async (req, res) => {
    const city = req.user ? req.user.settings.city : 'Katowice';
    const forecastHours = req.user ? req.user.settings.forecastHours : 72;
    const url = `${openWeatherUrl}forecast?q=${city},pl&units=metric${openWeatherApiKeyParam}`;

    const {
      data: { list: forecast }
    } = await axios.get(url);

    const forecastMapped = _.take(forecast, Math.round(forecastHours / 3)).map(
      f => {
        return {
          date: new Date(parseInt(f.dt) * 1000),
          temp: f.main.temp,
          wind: f.wind.speed,
          clouds: f.clouds.all,
          rain: f.rain ? f.rain['3h'] || 0 : 0,
          snow: f.snow ? f.snow['3h'] || 0 : 0
        };
      }
    );

    res.send(forecastMapped);
  });
};
