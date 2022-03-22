import React, { Component } from 'react';

import FlatList from './flat_list';
import Map from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>

        <FlatList />

        <Map />

      </div>
    );
  }
}

export default App;
