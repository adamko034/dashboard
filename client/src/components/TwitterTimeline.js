import React, { Component } from 'react';
// @ts-ignore
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import './TwitterTimeline.css';

class TwitterTimeline extends Component {
  render() {
    return (
      <div className="right twitter-container">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="FCBayernEN"
          options={{ height: 1000 }}
          theme="dark"
          noFooter
        />
      </div>
    );
  }
}

export default TwitterTimeline;
