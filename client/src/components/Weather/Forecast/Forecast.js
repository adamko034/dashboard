import React from 'react';
import { connect } from 'react-redux';
import { getForecast } from '../../../actions/weatherActions.js';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './forecastStyles.js';
import ForecastTemperature from './Charts/ForecastTemperature.js';
import ForecastWindAndFalls from './Charts/ForecastWindAndFalls.js';

import Loader from '../../_shared/Loader/Loader';

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast();
  }

  render() {
    const { forecast, classes } = this.props;

    if (!forecast) {
      return <Loader center />;
    }

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

function mapStateToProps({ auth, forecast }) {
  return { auth, forecast };
}

export default connect(
  mapStateToProps,
  { getForecast }
)(withStyles(styles)(Forecast));
