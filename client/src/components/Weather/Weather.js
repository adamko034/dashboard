import React from 'react';

import Airly from './Airly/Airly';

class Weather extends React.Component {
  render() {
    return (
      <div className="airly-container">
        <Airly />
      </div>
    );
  }
}

export default Weather;
