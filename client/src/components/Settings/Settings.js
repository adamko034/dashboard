import React from 'react';
import { connect } from 'react-redux';
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Fab
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { updateCity, updateForecastHours } from '../../actions/settingsActions';
import * as _ from 'lodash';

import styles from './settingsStyles';
import commonStyles from '../../assets/jss/commonStyles';
import combineStyles from '../../utils/combineStyles';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityChanged: false,
      city: '',
      forecastHours: 0,
      twitters: [],
      twitterChanged: false,
      newTwitter: ''
    };
  }

  weatherDefaultCityOnChange = event => {
    this.setState({ city: event.target.value, cityChanged: true });
  };

  weatherDefaultCityOnBlur = () => {
    if (this.state.city) {
      this.props.updateCity(this.state.city);
    }
  };

  getCityValue() {
    if (this.props.auth && !this.state.cityChanged) {
      return this.props.auth.settings.city;
    }

    return this.state.city;
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

  renderTwitters() {
    let twittersToShow = this.state.twitters;

    if (this.props.auth && !this.state.twitterChanged) {
      twittersToShow = this.props.auth.settings.twitters;
    }

    return twittersToShow.map(twitter => {
      return (
        <ListItem key={twitter}>
          <ListItemText primary={twitter} />
          <ListItemSecondaryAction>
            <IconButton
              data-value={twitter}
              aria-label="Delete"
              onClick={this.onTwitterDeleted}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
  }

  onTwitterDeleted = event => {
    const { twitters: currentTwitters } = this.state;
    const twitterToRemove = event.currentTarget.attributes['data-value'].value;
    _.pull(currentTwitters, twitterToRemove);

    this.setState({ twitters: currentTwitters });
  };

  onTwitterAdded = () => {
    const { twitters: currentTwitters, newTwitter } = this.state;
    currentTwitters.push(newTwitter);

    this.setState({
      twitterChanged: true,
      twitters: currentTwitters,
      newTwitter: ''
    });
  };

  newTwitterOnChange = event => {
    this.setState({ newTwitter: event.target.value });
  };

  addingTwitterDisabled() {
    return this.state.twitters.length > 2;
  }

  getTwitterRestrictionMessageColor() {
    return this.state.twitters.length > 2 ? 'error' : 'default';
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" color="inherit">
          Settings
        </Typography>
        <div className={classes.container}>
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
                className={classes.textField}
                variant="outlined"
                value={this.getCityValue()}
                onChange={this.weatherDefaultCityOnChange}
                onBlur={this.weatherDefaultCityOnBlur}
              />
              <TextField
                id="forecastHours"
                label="Forecast Hours"
                margin="dense"
                className={classes.textField}
                value={this.getForeactHours()}
                type="number"
                variant="outlined"
                inputProps={{ min: 0 }}
                onChange={this.foreactHoursOnChange}
                onBlur={this.foreactHoursOnBlur}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded={true}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Twitters</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <List>{this.renderTwitters()}</List>
                <div className={classes.containerCenter}>
                  <TextField
                    id="newTwitter"
                    label="New Twitter to follow"
                    margin="dense"
                    type="text"
                    variant="outlined"
                    className={classes.textField}
                    value={this.state.newTwitter}
                    onChange={this.newTwitterOnChange}
                    disabled={this.addingTwitterDisabled()}
                  />
                  <Fab
                    color="primary"
                    size="small"
                    aria-label="Add"
                    onClick={this.onTwitterAdded}
                    disabled={this.addingTwitterDisabled()}
                  >
                    <AddIcon />
                  </Fab>
                </div>
                <Typography
                  variant="subtitle1"
                  color={this.getTwitterRestrictionMessageColor()}
                >
                  You can add up to 3 Twitter accounts to follow.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { updateCity, updateForecastHours }
)(withStyles(combineStyles(styles, commonStyles))(Settings));
