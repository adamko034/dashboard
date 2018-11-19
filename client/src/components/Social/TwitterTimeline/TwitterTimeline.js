// @ts-nocheck
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './twitterTimelineStyles.js';

// @ts-ignore
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class TwitterTimeline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.twitterContainer}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="FCBayernEN"
          options={{ height: 1000 }}
          theme="dark"
        />
      </div>
    );
  }
}

TwitterTimeline.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TwitterTimeline);
