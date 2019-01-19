import React from "react";
import { connect } from "react-redux";
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
  Fab,
  Divider
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { addTwitter, deleteTwitter } from "../../../actions/settingsActions";
import * as _ from "lodash";

import commonStyles from "../../../assets/jss//commonStyles";

class Settings extends React.Component {
  state = {
    newTwitter: ""
  };

  onTwitterDeleted = twitter => {
    const { twitters: currentTwitters } = this.props.auth.settings;
    _.pull(currentTwitters, twitter);

    this.props.deleteTwitter(twitter);
  };

  onTwitterAdded = () => {
    const { twitters: currentTwitters } = this.props.auth.settings;
    const { newTwitter } = this.state;

    if (newTwitter !== "") {
      currentTwitters.push(newTwitter);

      this.props.addTwitter(newTwitter);
      this.setState({ newTwitter: "" });
    }
  };

  newTwitterOnChange = event => {
    this.setState({ newTwitter: event.target.value });
  };

  getTwitters() {
    if (this.props.auth) {
      return this.props.auth.settings.twitters;
    }

    return [];
  }

  addingTwitterDisabled() {
    return this.getTwitters().length > 2;
  }

  getTwitterRestrictionMessageColor() {
    return this.getTwitters().length > 2 ? "error" : "default";
  }

  renderTwitters() {
    const twittersToShow = this.getTwitters();

    return twittersToShow.map(twitter => {
      return (
        <div key={twitter}>
          <ListItem>
            <ListItemText primary={twitter} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                onClick={this.onTwitterDeleted.bind(this, twitter)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </div>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
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
                className={classes.textFieldMarginRight}
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
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { addTwitter, deleteTwitter }
)(withStyles(commonStyles)(Settings));
