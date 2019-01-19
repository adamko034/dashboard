import React from "react";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import SettingsSocial from "./SettingsSocial/SettingsSocial";
import SettingsWeather from "./SettingsWeather/SettingsWeather";

const styles = {
  container: {
    marginTop: "20px"
  }
};

const Settings = props => {
  return (
    <div>
      <Typography variant="h6" color="inherit">
        Settings
      </Typography>
      <div className={props.classes.container}>
        <SettingsWeather />
        <SettingsSocial />
      </div>
    </div>
  );
};

export default withStyles(styles)(Settings);
