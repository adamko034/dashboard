import React from "react";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Title
} from "@devexpress/dx-react-chart-material-ui";
import Paper from "@material-ui/core/Paper";
import { Scale, Animation, BarSeries, Stack } from "@devexpress/dx-react-chart";

import * as _ from "lodash";

import { DaysLabel, HoursLabel, FallLabel, WindLabel } from "./chartLabels.js";

class ForecastWindAndFalls extends React.Component {
  render() {
    const { data, height } = this.props;

    if (data.length === 0) {
      return <p>loading</p>;
    }

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
            showGrids={false}
            indentFromAxis={10}
            labelComponent={HoursLabel}
          />
          <ValueAxis
            showGrids={false}
            scaleName="wind"
            position="right"
            labelComponent={WindLabel}
          />
          <ValueAxis max={5} scaleName="fall" labelComponent={FallLabel} />

          <BarSeries
            name="SnowFall"
            scaleName="fall"
            valueField="snow"
            argumentField="date"
          />
          <BarSeries
            name="RainFall"
            valueField="rain"
            argumentField="date"
            color="#235e14"
            scaleName="falls"
          />
          <SplineSeries
            valueField="wind"
            argumentField="date"
            scaleName="wind"
            color="#bb4242"
          />

          <Animation />
          <Title text="Falls and Wind" />
          <Stack />
          <Scale />
        </Chart>
      </Paper>
    );
  }
}

export default ForecastWindAndFalls;
