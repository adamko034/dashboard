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
import {
  Scale,
  EventTracker,
  Animation,
  BarSeries,
  Stack
} from '@devexpress/dx-react-chart';

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

const WindLabel = props => {
  return <ValueAxis.Label {...props} text={props.text + ' m/s'} />;
};

const FallLabel = props => {
  return <ValueAxis.Label {...props} text={props.text + ' mm'} />;
};

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast('Katowice', 2.5);
  }

  render() {
    const { forecast } = this.props;

    var dataTemperature = forecast.map(forec => {
      return {
        date: forec.date,
        temp: forec.temp
      };
    });

    var dataFalls = forecast.map(forec => {
      return {
        date: forec.date,
        snow: forec.snow,
        rain: 0.1,
        wind: forec.wind
      };
    });

    console.log(dataFalls);

    return (
      <div>
        <Paper>
          <Chart data={dataTemperature}>
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

        <br />
        <Paper>
          <Chart data={dataFalls}>
            <ArgumentAxis
              showTicks={false}
              showLine={false}
              indentFromAxis={20}
              position="top"
              labelComponent={DaysLabel}
            />
            <ArgumentAxis
              //showGrids={false}
              indentFromAxis={50}
              //position="bottom"
              labelComponent={HoursLabel}
            />
            <ValueAxis
              //showGrids
              scaleName="falls"
              labelComponent={FallLabel}
            />
            <ValueAxis
              //showGrids={false}
              scaleName="wind"
              position="right"
              labelComponent={WindLabel}
            />

            <BarSeries
              name="SnowFall"
              valueField="snow"
              argumentField="date"
              scaleName="falls"
            />
            <BarSeries
              name="RainFall"
              valueField="rain"
              argumentField="date"
              color="#235e14"
              scaleName="falls"
            />
            {/* <SplineSeries
              valueField="wind"
              argumentField="date"
              scaleName="wind"
              color="#bb4242"
            /> */}

            <Animation />
            <Title text="Falls and Wind" />
            <Stack />
            <Scale />
          </Chart>
        </Paper>
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
