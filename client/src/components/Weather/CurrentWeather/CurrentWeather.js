import React from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { getWeather } from "../../../actions/weatherActions.js";

import PaperItem from "../../_shared/PaperItem/PaperItem.js";
import Loader from "../../_shared/Loader/Loader";

import styles from "./currentWeatherStyles.js";

class CurrentWeather extends React.Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    const { weather, classes } = this.props;
    console.log("render weather: " + JSON.stringify(weather));

    if (!weather) {
      return <Loader center />;
    }

    return (
      <PaperItem>
        <div className={classes.container}>
          <Grid container>
            <Grid item lg={2}>
              <img src={weather.icon} alt="icon" />
            </Grid>
            <Grid item>
              <div>
                <h1 className={classes.main}>
                  {weather.temp}&deg;C
                  <span className={classes.description}>
                    {weather.description}
                  </span>
                </h1>
              </div>
            </Grid>
          </Grid>
          <Grid container className={classes.parameters}>
            <Grid item lg={3}>
              Wiatr
            </Grid>

            <Grid item lg={3}>
              Chmury
            </Grid>

            <Grid item lg={3}>
              Wilgotność
            </Grid>

            <Grid item lg={3}>
              Ciśnienie
            </Grid>

            <Grid item lg={3}>
              {weather.wind} m/s
            </Grid>

            <Grid item lg={3}>
              {weather.clouds}%
            </Grid>

            <Grid item lg={3}>
              {weather.humidity}%
            </Grid>

            <Grid item lg={3}>
              {weather.pressure}hPa
            </Grid>
          </Grid>
        </div>
      </PaperItem>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(
  mapStateToProps,
  { getWeather }
)(withStyles(styles)(CurrentWeather));
