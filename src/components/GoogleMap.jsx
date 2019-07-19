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
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 45.5127,
          lng: -122.6795
        }} 
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'process.env.API_KEY'
})(MapContainer);