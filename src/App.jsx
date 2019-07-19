import React from 'react';
import Welcome from './Welcome';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import GoogleMap from './GoogleMap';

class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/map' render={() => <GoogleMap />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }

}

export default App;
