import React from "react";
import { connect } from "react-redux";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  updateCity,
  updateForecastHours
} from "../../../actions/settingsActions";

import commonStyles from "../../../assets/jss/commonStyles";

class Settings extends React.Component {
  state = {
    cityChanged: false,
    newCity: "",
    forecastHours: 0
  };

  weatherDefaultCityOnChange = event => {
    this.setState({ newCity: event.target.value, cityChanged: true });
  };

  weatherDefaultCityOnBlur = () => {
    if (this.state.newCity) {
      this.props.updateCity(this.state.newCity);
    }
  };

  getCityValue() {
    if (this.props.auth && !this.state.cityChanged) {
      return this.props.auth.settings.city;
    }

    return this.state.newCity;
  }

  foreactHoursOnChange = event => {
    this.setState({ forecastHours: event.target.value });
  };

  foreactHoursOnBlur = () => {
    if (this.state.forecastHours) {
      this.props.updateForecastHours(this.state.forecastHours);
    }
  };

  getForeactHours() {
    if (this.props.auth && this.state.forecastHours === 0) {
      return this.props.auth.settings.forecastHours;
    }

    return this.state.forecastHours;
  }

  render() {
    const { classes } = this.props;
    return (
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Weather & Forecast</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TextField
            id="city"
            label="Weather Default City"
            margin="dense"
            type="text"
            className={classes.textFieldMarginRight}
            variant="outlined"
            value={this.getCityValue()}
            onChange={this.weatherDefaultCityOnChange}
            onBlur={this.weatherDefaultCityOnBlur}
          />
          <TextField
            id="forecastHours"
            label="Forecast Hours"
            margin="dense"
            className={classes.textFieldMarginRight}
            value={this.getForeactHours()}
            type="number"
            variant="outlined"
            inputProps={{ min: 0 }}
            onChange={this.foreactHoursOnChange}
            onBlur={this.foreactHoursOnBlur}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { updateCity, updateForecastHours }
)(withStyles(commonStyles)(Settings));
