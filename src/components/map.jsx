import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 48.864716,
      lng: 2.349014
    },
    zoom: 12
  };


  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
}
