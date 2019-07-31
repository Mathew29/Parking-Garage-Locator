import React from 'react'
import { Link } from 'react-router-dom';
import './Welcome.css'

function Welcome() {
  return (
    <div className="center">
      <h1 className="header">Welcome to the Parking Garage Locator!</h1>
      <Link to='/map'><button className="button1">Find Garage</button></Link>
    </div>
  )
}

export default Welcome;