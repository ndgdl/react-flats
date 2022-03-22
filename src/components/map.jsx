import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

// googleMapsApiKey = "AIzaSyAEtNqdqoSkxF7BntVYaWnac8Rh7TXrU6s"

export default function Map(props) {
  console.log("MAP RENDER");

  const defaultProps = {
    center: {
      lat: 48.864716,
      lng: 2.349014
    },
    zoom: 11
  };

  const { lat, lng } = props;

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAEtNqdqoSkxF7BntVYaWnac8Rh7TXrU6s" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={lat}
          lng={lng}
        />
      </GoogleMapReact>
    </div>
  );
}
