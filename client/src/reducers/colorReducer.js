import { COLOR_CHANGE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case COLOR_CHANGE:
      return "red";
    default:
      return state;
  }
}
