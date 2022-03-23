import React, { Component } from 'react';

class Marker extends Component {
  shouldComponentUpdate(nextProps) {
    const { lat, lng } = this.props;
    return (nextProps.lat !== lat) || (nextProps.lng !== lng);
  }

  render() {
    console.log('MARKER RENDER');
    return (
      <div className="marker" />
    );
  }
}

export default Marker;
