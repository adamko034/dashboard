import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import styles from "./twitterTimelineStyles.js";

import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterTimeline = props => {
  return (
    <div className={props.classes.twitterContainer}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="FCBayernEN"
        options={{ height: 1000 }}
        theme="dark"
      />
    </div>
  );
};

TwitterTimeline.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TwitterTimeline);
