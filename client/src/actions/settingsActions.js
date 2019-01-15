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
