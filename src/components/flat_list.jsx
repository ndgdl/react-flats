import React from 'react';

import flats from '../../data/flats';
import Flat from './flat';

const FlatList = () => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat
            key={flat.imageUrl}
            description={flat.name}
            imgUrl={flat.imageUrl}
            price={`${flat.price} ${flat.priceCurrency}`}
          />
        );
      })}
    </div>
  );
}

export default FlatList;
