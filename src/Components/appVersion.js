import React, { Component } from 'react';
import packageJson from '../../package.json';

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