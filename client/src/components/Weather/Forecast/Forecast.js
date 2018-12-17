import React from 'react';
import { connect } from 'react-redux';
import { getForecast } from '../../../actions/weatherActions.js';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Title,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import Paper from '@material-ui/core/Paper';
import { Scale, EventTracker, Animation } from '@devexpress/dx-react-chart';

import styles from './forecastStyles.js';

let currentDay;

const DaysLabel = props => {
  const { text } = props;

  var dt = new Date(text);
  var dayName = dt.toLocaleDateString('en-US', { weekday: 'long' });

  if (currentDay === dayName) {
    dayName = '';
  } else {
    currentDay = dayName;
  }
  return <ArgumentAxis.Label {...props} text={dayName} />;
};

const HoursLabel = props => {
  const { text } = props;

  var dt = new Date(text);

  return <ArgumentAxis.Label {...props} text={`${dt.getHours()}:00`} />;
};

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast('Katowice', 2.5);
  }

  render() {
    const { forecast } = this.props;

    var data2 = forecast.map(forec => {
      return {
        date: forec.date,
        temp: forec.temp
      };
    });

    return (
      <Paper>
        <Chart data={data2}>
          <ArgumentAxis
            showTicks={false}
            showLine={false}
            indentFromAxis={20}
            position="top"
            labelComponent={DaysLabel}
          />
          <ArgumentAxis
            showGrids={true}
            indentFromAxis={20}
            position="bottom"
            labelComponent={HoursLabel}
          />
          <ValueAxis showGrids />

          <SplineSeries valueField="temp" argumentField="date" />
          <Animation />
          <Title text="Temperature" />
          <Scale />
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
