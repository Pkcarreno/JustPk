import React, { Component } from 'react';
import packageJson from '../../package.json';

// Return the app version indicate inside the package.json

class Appversion extends Component {
  render(){
    return(
      <div id='versionBox'>
          <p>v{packageJson.version}</p>
      </div>
    )
  }
}

export default Appversion;