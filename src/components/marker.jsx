import React, { Component } from 'react';

class Marker extends Component {
  shouldComponentUpdate(nextProps) {
    const { lat, lng } = this.props;
    return (nextProps.lat !== lat) || (nextProps.lng !== lng);
  }

  render() {
    return (
      <div className="marker" />
    );
  }
}

export default Marker;
