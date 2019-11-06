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
        <div id='buttonDiv'>
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

function AboutMe() {
  return(
    <div id='aboutMeDescription'>
      <p>Soy <span id='name'>Pedro carreño</span>, un placer conocerte! <br />Hace tres años que empece mi carrera como <span id='career'>ingeniero de sistemas</span> y desde entonces e hecho unos cuantos proyectos Cools <br />Mi fuerte el <u>desarrollo web</u>, <u>React.js</u> y <u>Node.js</u>.<span id='extra'>(Todo el mundo tiene una pagina web asi que decidi hacerme una :D)</span></p>
    </div>
  )
}
class Context extends Component{
  render(){
    return(
      <div id='context'>
        <AboutMe/>
        <Appversion/>
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
        <Context/>
      </React.Fragment>
    )
  }
}

export default App;
