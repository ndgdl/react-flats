import React, { Component } from 'react';

import FlatList from './flat_list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 48.864716,
      lng: 2.349014
    };
  }

  selectFlat = (latitude, longitude) => {
    this.setState({
      lat: latitude,
      lng: longitude
    });
  }

  render() {
    const { lat, lng } = this.state;
    return (
      <div>
        <FlatList selectFunction={this.selectFlat} />

        <Map lat={lat} lng={lng} />

      </div>
    );
  }
}

export default App;
