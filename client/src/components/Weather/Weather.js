import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { connect } from "react-redux";

import Airly from "./Airly/Airly";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast/Forecast";

class Weather extends React.Component {
  getPageTitle() {
    let pageTitle = "Weather & Air Condition:";
    if (this.props.auth) {
      pageTitle += " " + this.props.auth.settings.city;
    }

    return pageTitle;
  }

  renderPageTitle() {
    return (
      <Typography variant="h6" color="inherit">
        {this.getPageTitle()}
      </Typography>
    );
  }

  render() {
    return (
      <div>
        <div>{this.renderPageTitle()}</div>
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
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  null
)(Weather);
