import React from "react";

import { Typography } from "@material-ui/core";

import SettingsSocial from "./SettingsSocial/SettingsSocial";
import SettingsWeather from "./SettingsWeather/SettingsWeather";

const Settings = props => {
  const style = {
    marginTop: "20px"
  };

  return (
    <div>
      <Typography variant="h6" color="inherit">
        Settings
      </Typography>
      <div style={style}>
        <SettingsWeather />
        <SettingsSocial />
      </div>
    </div>
  );
};

export default Settings;
