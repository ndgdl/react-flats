import React from "react";
import GoogleMapReact from 'google-map-react';

// googleMapsApiKey = "AIzaSyAEtNqdqoSkxF7BntVYaWnac8Rh7TXrU6s"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 48.864716,
      lng: 2.349014
    },
    zoom: 11
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAEtNqdqoSkxF7BntVYaWnac8Rh7TXrU6s" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={48.864716}
          lng={2.349014}
          text="Coucou"
        />
      </GoogleMapReact>
    </div>
  );
}
