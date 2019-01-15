import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/authActions";

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./dashboardStyles.js";

import Sidebar from "../../components/Sidebar/Sidebar.js";
import Weather from "../../components/Weather/Weather.js";
import Social from "../../components/Social/Social.js";
import Header from "../../components/Header/Header";
import Settings from "../../components/Settings/Settings";

import sideBarImage from "../../assets/images/arjen.jpg";

class Dashboard extends React.Component {
  render() {
    const { classes, auth, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar image={sideBarImage} {...rest} />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header />
          <div className={classes.content}>
            <div className={classes.container}>
              <Switch>
                <Route path="/weather" component={Weather} />
                <Route path="/social" component={Social} />
                <Route path="/settings" component={Settings} />
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

function mapStateToProps({ auth }) {
  return { auth };
}

// @ts-ignore
export default connect(
  mapStateToProps,
  { fetchUser }
)(withStyles(styles)(Dashboard));
