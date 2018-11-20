const keys = require('../config/keys');
const axios = require('axios');

const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/';
const openWeatherApiKeyParam = `&APPID=${keys.openWeatherMapApiKey}`;

module.exports = app => {
  app.get('/api/weather/current/:city',  async (req, res) => {
    const url = `${openWeatherUrl}weather?q=${req.params.city},pl&units=metrics${openWeatherApiKeyParam}`;

    const {data} = await axios.get(url);

    res.send({
      description: data.weather[0].main,
      icon: data.weather[0].icon,
      temp: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      wind: data.wind.speed,
      clouds: data.clouds.all
    });
  });
};
