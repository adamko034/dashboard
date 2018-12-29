import axios from "axios";
import { AUTH_GET } from "./types";

export const fetchUser = () => async dispatch => {
  const url = "/api/current_user";
  const result = await axios.get(url);

  dispatch({ type: AUTH_GET, payload: result.data });
};

export const logout = () => async dispatch => {
  const url = "/api/logout";
  await axios.post(url);

  dispatch({ type: AUTH_GET });
};
