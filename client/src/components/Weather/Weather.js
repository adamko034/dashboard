import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";

import { getWeather } from "../../actions/weatherActions";
import Airly from "./Airly/Airly";

import styles from "./weatherStyles.js";

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeather("Katowice");
  }
  render() {
    const { classes, weather } = this.props;

    return (
      <div className={classes.airlyContainer}>
        <div>{weather}</div>
        <Airly />
      </div>
    );
  }
}

Weather.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(
  mapStateToProps,
  { getWeather }
)(withStyles(styles)(Weather));
