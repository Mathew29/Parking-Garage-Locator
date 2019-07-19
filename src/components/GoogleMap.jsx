import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`
console.log(`${process.env.REACT_APP_GOOGLE_API_KEY}`);

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
  apiKey: API_KEY
})(MapContainer);