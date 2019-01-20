import React from "react";
import { connect } from "react-redux";
import { Typography, Grid } from "@material-ui/core";

import TwitterTimeline from "./TwitterTimeline/TwitterTimeline.js";
import Loader from "../_shared/Loader/Loader";

const renderContent = props => {
  if (!props.auth) {
    return <Loader />;
  }

  if (props.auth.settings.twitters.length === 0) {
    return (
      <div>
        No twitters to follow defined. Go to settings page and add twitter's
        profile names you want to see here.
      </div>
    );
  }

  if (props.auth) {
    const twittersCount = props.auth.settings.twitters.length;
    let lgCol = 0;

    switch (twittersCount) {
      case 1:
        lgCol = 12;
        break;
      case 2:
        lgCol = 6;
        break;
      case 3:
        lgCol = 4;
        break;
      default:
        lgCol = 3;
    }

    return props.auth.settings.twitters.map(twitter => {
      return (
        <Grid item lg={lgCol}>
          <TwitterTimeline key={twitter} twitter={twitter} theme="dark" />
        </Grid>
      );
    });
  }
};

const Social = props => {
  const style = {
    marginTop: "20px"
  };

  return (
    <div>
      <Typography variant="h6" color="inherit">
        Social
      </Typography>
      <div style={style}>
        <Grid container spacing={16}>
          {renderContent(props)}
        </Grid>
      </div>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  null
)(Social);
