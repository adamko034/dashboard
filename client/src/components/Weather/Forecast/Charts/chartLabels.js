import React from "react";
import {
  ArgumentAxis,
  ValueAxis
} from "@devexpress/dx-react-chart-material-ui";

let currentDay;

export const DaysLabel = props => {
  const { text } = props;

  var dt = new Date(text);
  var dayName = dt.toLocaleDateString("en-US", { weekday: "short" });

  if (currentDay === dayName) {
    dayName = "";
  } else {
    currentDay = dayName;
  }
  return (
    <ArgumentAxis.Label
      {...props}
      text={dayName}
      textAnchor="middle"
      dominantBaseline="middle"
    />
  );
};

export const HoursLabel = props => {
  const { text } = props;

  var dt = new Date(text);

  return <ArgumentAxis.Label {...props} text={`${dt.getHours()}:00`} />;
};

export const WindLabel = props => {
  return <ValueAxis.Label {...props} text={props.text + " m/s"} />;
};

export const FallLabel = props => {
  return <ValueAxis.Label {...props} text={props.text + " mm"} />;
};
