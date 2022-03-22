import React from 'react';

import flats from '../../data/flats';
import Flat from './flat';

const FlatList = (props) => {
  const { selectFunction } = props;

  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat
            key={flat.imageUrl}
            description={flat.name}
            imgUrl={flat.imageUrl}
            price={`${flat.price} ${flat.priceCurrency}`}
            lat={flat.lat}
            lng={flat.lng}
            selectFunction={selectFunction}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
