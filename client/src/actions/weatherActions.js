import axios from "axios";
import { WEATHER_GET, FORECAST_GET } from "./types";

export const getWeather = () => async dispatch => {
  const url = `/api/weather/current`;
  const res = await axios.get(url);
  console.log("got weather " + JSON.stringify(res.data));
  dispatch({ type: WEATHER_GET, payload: res.data });
};

export const getForecast = () => async dispatch => {
  const url = `/api/weather/forecast`;
  const res = await axios.get(url);

  dispatch({ type: FORECAST_GET, payload: res.data });
};
