import React, { Component } from 'react';
import './App.scss';
import packageJson from '../package.json';
import menuText from './Assets/Texts/menu.json';

class Appversion extends Component {
  render(){
    return(
      <div id='versionBox'>
          <p>v{packageJson.version}</p>
      </div>
    )
  }
}

class Menu extends Component {
  render(){
    return(
      <div id='menuDeskt'>
        {console.log("menu: ",this.props.text)}
        <p id='logo'>Pk</p>
        <div className='primerDiv'>
          <button>{this.props.text.button1}</button>
          <button>{this.props.text.button2}</button>
        </div>
  
        <div>
            <p><a href=''>English</a> - <a href=''>Español</a></p>
          </div>
  
        <div className='primerDiv'>
          <div>
            <a href=''>github</a>
            <a href=''>Instagram</a>
            <a href=''>twitter</a>
            <a href=''>linkedin</a>
          </div>
          <div>
            <a href=''>Fiverr</a>
            <a href=''>Freelancer</a>
          </div>
          <a href=''>scenic.pk@gmail.com</a>
          <p>{this.props.text.curriculum1} <a href=''>{this.props.text.curriculum2}</a></p>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menuText.language.find(e => (e.lang === this.state.lang))
    };
  }
  state = {
    lang: 'español'
  }
  render(){
    return(
      <React.Fragment>
        <Menu text={this.state.menu}/>
        <Appversion/>
      </React.Fragment>
    )
  }
}

export default App;
