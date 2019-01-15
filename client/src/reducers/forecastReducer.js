import { FORECAST_GET } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FORECAST_GET:
      return action.payload;
    default:
      return state;
  }
}
