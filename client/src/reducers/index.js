import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import forecastReducer from "./forecastReducer";
import authReducer from "./authReducer";

export default combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  auth: authReducer
});
