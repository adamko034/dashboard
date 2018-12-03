import React from "react";
import { connect } from "react-redux";
import { getForecast } from "../../../actions/weatherActions.js";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./forecastStyles.js";

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast("Katowice", 2);
  }

  render() {
    const { forecast } = this.props;
    return <div>{JSON.stringify(forecast)}</div>;
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
