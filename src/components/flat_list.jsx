import React, { Component } from 'react';

import flats from '../../data/flats';
import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = { activeKey: null };
  }

  setActive = (key) => {
    this.setState({ activeKey: key });
  }

  isActive = (key) => {
    const { activeKey } = this.state;
    return activeKey === key ? " active" : "";
  }

  render() {
    console.log('RENDER FLAT LIST');

    const { selectFunction } = this.props;

    return (
      <div className="flat-list">
        {flats.map((flat) => {
          return (
            <Flat
              key={flat.imageUrl}
              active={this.isActive(flat.imageUrl)}
              description={flat.name}
              imgUrl={flat.imageUrl}
              price={`${flat.price} ${flat.priceCurrency}`}
              lat={flat.lat}
              lng={flat.lng}
              selectFunction={selectFunction}
              setActiveFunction={this.setActive}
            />
          );
        })}
      </div>
    );
  }
}

export default FlatList;
