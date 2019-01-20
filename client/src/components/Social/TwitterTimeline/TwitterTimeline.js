import React from "react";

import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterTimeline = props => {
  const styles = {
    height: "100%"
  };

  return (
    <div style={styles}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={props.twitter}
        options={{ height: 1000 }}
        theme={props.theme}
      />
    </div>
  );
};

export default TwitterTimeline;
