import React from 'react';
import Iframe from 'react-iframe';

import PaperItem from '../../_shared/PaperItem/PaperItem.js';

function Airly() {
  return (
    <PaperItem>
      <Iframe
        url="https://airly.eu/map/widget.html#lat=50.26640&lng=19.02692&id=2676&w=280&h=380&l=pl&i=true&ah=true&aw=true"
        id="airly_634807714"
        position="relative"
        style="width:100%;height:140px;"
      />
    </PaperItem>
  );
}

export default Airly;
