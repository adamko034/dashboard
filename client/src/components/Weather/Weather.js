import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import Airly from './Airly/Airly';

import styles from './weatherStyles.js';

class Weather extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.airlyContainer}>
        <Airly />
      </div>
    );
  }
}

Weather.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Weather);
