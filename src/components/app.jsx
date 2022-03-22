import React, { Component } from 'react';

import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>

        <FlatList />

        <div className="map-container">

        </div>

      </div>
    );
  }
}

export default App;
