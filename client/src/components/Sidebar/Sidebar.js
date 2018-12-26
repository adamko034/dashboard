import React from "react";
import { NavLink } from "react-router-dom";
import {
  withStyles,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import classNames from "classnames";
import { Group, WbSunny } from "@material-ui/icons";
import PropTypes from "prop-types";

import styles from "./sidebarStyles.js";
import sideBarStyles from "../../assets/jss/material-dashboard/components/sidebar/material-dashboard-sidebarStyles";
import logo from "../../assets/images/reactlogo.png";

import combineStyles from "../../utils/combineStyles";

const NavigationItems = [
  {
    title: "Weather",
    icon: WbSunny,
    path: "weather"
  },
  {
    title: "Social",
    icon: Group,
    path: "social"
  }
];

class Sidebar extends React.Component {
  isActiveRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  renderItems(classes) {
    return NavigationItems.map(item => {
      const listItemClasses = classNames({
        [" " + classes["blue"]]: this.isActiveRoute(item.path)
      });

      const whiteFontClasses = classNames({
        [" " + classes.whiteFont]: this.isActiveRoute(item.path)
      });

      return (
        <NavLink to={item.path} className={classes.item} key={item.title}>
          <ListItem
            key={item.title}
            button
            className={classes.itemLink + listItemClasses}
          >
            <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
              <item.icon />
            </ListItemIcon>
            <ListItemText
              primary={item.title}
              className={classes.itemText + whiteFontClasses}
              disableTypography={true}
            />
          </ListItem>
        </NavLink>
      );
    });
  }

  render() {
    const { classes, image } = this.props;

    return (
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.logo}>
            <a href="https://www.creative-tim.com" className={classes.logoLink}>
              <div className={classes.logoImage}>
                <img src={logo} alt="logo" className={classes.img} />
              </div>
              <span>My Dashboard</span>
            </a>
          </div>
          <div className={classes.sidebarWrapper}>
            <List className={classes.list}>{this.renderItems(classes)}</List>
          </div>
          <div
            className={classes.background}
            style={{ backgroundImage: `url(${image})` }}
          />
        </Drawer>
      </Hidden>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(combineStyles(styles, sideBarStyles))(Sidebar);
