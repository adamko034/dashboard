const keys = require('../config/keys');
const axios = require('axios');

const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/';
const openWeatherApiKeyParam = `&APPID=${keys.openWeatherMapApiKey}`;

module.exports = app => {
  app.get('/api/weather/current/:city', async (req, res) => {
    const url = `${openWeatherUrl}weather?q=${
      req.params.city
    },pl${openWeatherApiKeyParam}`;

    const respopnse = await axios.get(url);
  });
};
