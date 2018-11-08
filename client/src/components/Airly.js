import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Airly extends Component {
  render() {
    return (
      // @ts-ignore
      <Iframe
        url="https://airly.eu/map/widget.html#lat=50.26640&lng=19.02692&id=2676&w=280&h=380&l=pl&m=true&i=true&ah=true&aw=true"
        id="airly_634807714"
        position="relative"
      />
    );
  }
}

export default Airly;
