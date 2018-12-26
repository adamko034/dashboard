import axios from "axios";
import { AUTH_GET } from "./types";

export const fetchUser = () => async dispatch => {
  const url = "/api/current_user";
  const result = await axios.get(url);

  dispatch({ type: AUTH_GET, payload: result.data });
};
