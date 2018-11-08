import React, { Component } from 'react';
import Airly from './Airly';
import TwitterTimeline from './TwitterTimeline';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <Airly />
        <TwitterTimeline />
      </div>
    );
  }
}

export default App;
