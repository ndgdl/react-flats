import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Map extends Component {
  shouldComponentUpdate(nextProps) {
    const { lat, lng } = this.props;
    return (nextProps.lat !== lat) || (nextProps.lng !== lng);
  }

  renderMarker() {
    const { lat, lng } = this.props;

    if (lat && lng) {
      return <Marker lat={lat} lng={lng} />;
    }
    return '';
  }

  render() {
    const defaultProps = {
      center: {
        lat: 48.864716,
        lng: 2.349014
      },
      zoom: 11
    };

    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAEtNqdqoSkxF7BntVYaWnac8Rh7TXrU6s" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {this.renderMarker()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
