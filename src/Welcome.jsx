import React from 'react'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h1>Welcome to the Parking Garage Locator!</h1>
      <Link><button>Find Garage</button></Link>
    </div>
  )
}

export default Welcome;