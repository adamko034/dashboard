import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import Airly from './Airly/Airly';
import CurrentWeather from './CurrentWeather/CurrentWeather';

import styles from './weatherStyles.js';

class Weather extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={16}>
        <Grid item lg={6}>
          <CurrentWeather />
        </Grid>
        <Grid item lg={4}>
          <Airly />
        </Grid>
      </Grid>
    );
  }
}

Weather.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Weather);
