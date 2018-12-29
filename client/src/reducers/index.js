import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import forecastReducer from "./forecastReducer";
import authReducer from "./authReducer";
import colorReducer from "./colorReducer";

export default combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  auth: authReducer,
  color: colorReducer
});
