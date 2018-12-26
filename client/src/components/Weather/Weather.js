import React from "react";
import Grid from "@material-ui/core/Grid";

import Airly from "./Airly/Airly";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast";

class Weather extends React.Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item lg={6} md={12}>
          <CurrentWeather />
        </Grid>
        <Grid item lg={6} md={12}>
          <Airly />
        </Grid>
        <Grid item lg={12} md={12}>
          <Forecast />
        </Grid>
      </Grid>
    );
  }
}

export default Weather;
