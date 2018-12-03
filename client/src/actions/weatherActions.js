import axios from "axios";
import { WEATHER_GET, FORECAST_GET } from "./types";

export const getWeather = city => async dispatch => {
  const url = `/api/weather/current/${city}`;
  const res = await axios.get(url);

  dispatch({ type: WEATHER_GET, payload: res.data });
};

export const getForecast = (city, days) => async dispatch => {
  const url = `/api/weather/forecast/${city}/${days}`;
  const res = await axios.get(url);

  dispatch({ type: FORECAST_GET, payload: res.data });
};
