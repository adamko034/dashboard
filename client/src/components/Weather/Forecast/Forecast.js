import React from "react";
import { connect } from "react-redux";
import { getForecast } from "../../../actions/weatherActions.js";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import * as _ from "lodash";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Title,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import Paper from "@material-ui/core/Paper";
import { Scale, EventTracker } from "@devexpress/dx-react-chart";
import * as d3 from "d3-scale";

import styles from "./forecastStyles.js";

function getCustomDate(date) {
  var dt = new Date(date);
  var dayName = dt.toLocaleDateString("en-US", { weekday: "short" });

  return `${dayName} ${dt.getHours()}h`;
}

function getTimeScaler() {
  var x = d3.scaleTime();
  x.ticks(d3.timeHour.every(3));

  return x;
}

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast("Katowice", 2.5);
  }

  render() {
    const { forecast } = this.props;

    var data2 = forecast.map(forec => {
      return {
        date: new Date(forec.date), //getCustomDate(forec.date),
        temp: forec.temp
      };
    });

    return (
      <Paper>
        <Chart data={data2} height={200}>
          <ArgumentAxis showGrids indentFromAxis="20" type="time" />
          <ValueAxis showGrids />

          <SplineSeries valueField="temp" argumentField="date" />
          <Title text="Temperature" />
          <Scale extensions={[{ type: "time", constructor: getTimeScaler }]} />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
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
