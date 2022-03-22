import React, { Component } from 'react';

import FlatList from './flat_list';
import SimpleMap from './map';

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
        <SimpleMap />

      </div>
    );
  }
}

export default App;
