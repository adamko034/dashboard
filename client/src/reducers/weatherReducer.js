import { WEATHER_GET } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case WEATHER_GET:
      return action.payload;
    default:
      return state;
  }
}
