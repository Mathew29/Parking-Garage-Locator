import React from 'react';
import Welcome from './Welcome';
import Error404 from './Error404';
import Leaflet from './Leaflet';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      garage: {
        parkingOne: {
          lat: 45.5194,
          lng: -122.6818,
          street: '730 SW 10th Ave',
          city: 'Portland',
          state: 'OR',
          zip: 97205
        },
        parkingTwo: {
          lat: 45.5159,
          lng: -122.6779,
          street: '818 SW 4th Ave',
          city: 'Portland',
          state: 'OR',
          zip: 97204
        },
        parkingThree: {
          lat: 45.5119,
          lng: -122.6774,
          street: '120 SW Clay St',
          city: 'Portland',
          state: 'OR',
          zip: 97204
        },
        parkingFour: {
          lat: 45.5281,
          lng: -122.6766,
          street: '7418 NW Station Way',
          city: 'Portland',
          state: 'OR',
          zip: 97209
        },
        parkingFive: {
          lat: 45.5331,
          lng: -122.6673,
          street: '127 N Winning Way',
          city: 'Portland',
          state: 'OR',
          zip: 97227
        },
      }
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/map' render={() => <Leaflet parkingGarage={this.state.garage} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );  
  }

}

export default App;
