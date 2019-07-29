import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './Leaflet.css';
import LeafletMarker from './LeafletMarker';

class Leaflet extends Component {

  state = {
    location: {
      lat: 45.5127,
      lng: -122.6795,
    },
    zoom: 13
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.keys(this.props.parkingGarage).map((garage) =>
        <LeafletMarker lat={this.props.parkingGarage[garage].lat}
        lng={this.props.parkingGarage[garage].lng}
        street={this.props.parkingGarage[garage].street}
        city={this.props.parkingGarage[garage].city}
        state={this.props.parkingGarage[garage].state}
        zip={this.props.parkingGarage[garage].zip}
        />
        )}
    </Map>
    )
  }
}

Leaflet.propTypes = {
  parkingGarage: PropTypes.object
}

export default Leaflet;



          // {Object.keys(this.props.parkingGarage[garage]).map((mark) =>
            
            
          //   )}