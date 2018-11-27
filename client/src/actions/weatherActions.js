import axios from "axios";
import { WEATHER_GET } from "./types";

export const getWeather = city => async dispatch => {
  const url = `/api/weather/${city}`;
  const res = await axios.get(url);

  dispatch({ type: WEATHER_GET, payload: res.data });
};
