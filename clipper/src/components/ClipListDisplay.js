import React, { Component } from 'react';
import ClipsContainer from '../containers/ClipsContainer';

class ClipListDisplay extends Component {
  render() {
    return (
      <div>
        <ul>
          <ClipsContainer/>
        </ul>
      </div>
    )
  }
}
export default ClipListDisplay
