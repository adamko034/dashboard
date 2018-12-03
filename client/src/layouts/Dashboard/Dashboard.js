import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./dashboardStyles.js";

import Sidebar from "../../components/Sidebar/Sidebar.js";
import Weather from "../../components/Weather/Weather.js";
import Social from "../../components/Social/Social.js";

import sideBarImage from "../../assets/images/arjen.jpg";

class Dashboard extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar image={sideBarImage} {...rest} />
        <div className={classes.mainPanel} ref="mainPanel">
          <div className={classes.content}>
            <div className={classes.container}>
              <Switch>
                <Route path="/weather" component={Weather} />
                <Route path="/social" component={Social} />
                <Redirect from="/" to="/weather" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

// @ts-ignore
export default withStyles(styles)(Dashboard);
