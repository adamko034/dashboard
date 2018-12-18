import React from "react";
import { connect } from "react-redux";
import { getForecast } from "../../../actions/weatherActions.js";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import * as _ from "lodash";

import styles from "./forecastStyles.js";
import ForecastTemperature from "./Charts/ForecastTemperature.js";
import ForecastWindAndFalls from "./Charts/ForecastWindAndFalls.js";

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast("Katowice", 2.5);
  }

  render() {
    const { forecast, classes } = this.props;

    var dataTemperature = forecast.map(forec => {
      return {
        date: forec.date,
        temp: forec.temp
      };
    });

    var dataFallsAndWind = forecast.map(forec => {
      return {
        date: forec.date,
        snow: forec.snow,
        rain: forec.rain,
        wind: forec.wind
      };
    });

    return (
      <div>
        <div className={classes.chartContainer}>
          <ForecastTemperature data={dataTemperature} height={300} />
        </div>
        <div className={classes.chartContainer}>
          <ForecastWindAndFalls data={dataFallsAndWind} height={300} />
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ forecast }) {
  return { forecast };
}

export default connect(
  mapStateToProps,
  { getForecast }
)(withStyles(styles)(Forecast));
