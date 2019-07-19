import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={tjis.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 45.5155,
          lng: 122.6793
        }} 
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);