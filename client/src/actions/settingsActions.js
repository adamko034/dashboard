import axios from "axios";
import { AUTH_GET } from "./types";

export const updateCity = city => async dispatch => {
  const url = "/api/settings/city";
  const res = await axios.post(url, { city });

  dispatch({ type: AUTH_GET, payload: res.data });
};

export const updateForecastHours = forecastHours => async dispatch => {
  const url = "/api/settings/forecastHours";
  const res = await axios.post(url, { forecastHours });

  dispatch({ type: AUTH_GET, payload: res.data });
};

export const addTwitter = twitter => async dispatch => {
  const url = "/api/settings/twitters";
  const res = await axios.post(url, { twitter });

  dispatch({ type: AUTH_GET, payload: res.data });
};

export const deleteTwitter = twitter => async dispatch => {
  console.log("delete twitter from action: " + twitter);
  const url = "/api/settings/twitters/" + twitter;
  const res = await axios.delete(url);

  dispatch({ type: AUTH_GET, payload: res.data });
};
