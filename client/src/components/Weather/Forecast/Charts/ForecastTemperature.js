import React from "react";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Title,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import Paper from "@material-ui/core/Paper";
import { Scale, EventTracker, Animation } from "@devexpress/dx-react-chart";
import { DaysLabel, HoursLabel } from "./chartLabels.js";

class ForecastTemperature extends React.Component {
  render() {
    const { data, height } = this.props;

    return (
      <Paper>
        <Chart data={data} height={height}>
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

export default ForecastTemperature;
