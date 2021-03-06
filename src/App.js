// React
import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
// Assets - styles / text in Json files
import './App.scss';
import {themes} from './Assets/Themes/themes.json'
import menuText from './Assets/Texts/menu.json';
import aboutMeText from './Assets/Texts/aboutMe.json';
import myWork from './Assets/Texts/myWorks.json';
// Components
import Appversion from './Components/appVersion';
import Menu from './Components/menu';
import AboutMe from './Components/aboutMe';
import MyWorks from './Components/myWorks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: (navigator.language || navigator.userLanguage).substring(0,2) === 'es' ? 'es':'en',
      show: 'about',
      isMobile: (window.innerWidth <= 660) || (window.matchMedia("(orientation: landscape) and (max-height: 550px)").matches),
      showMobile: 'menu',
      menu: menuText.language.find(e => (e.lang === ((navigator.language || navigator.userLanguage).substring(0,2) === 'es' ? 'es':'en'))),
      aboutMe: aboutMeText.language.find(e => (e.lang === ((navigator.language || navigator.userLanguage).substring(0,2) === 'es' ? 'es':'en'))),
      myWork: myWork.language.find(e => (e.lang === ((navigator.language || navigator.userLanguage).substring(0, 2) === 'es' ? 'es' : 'en'))),
      currentTheme: Math.floor(Math.random() * Math.floor(Object.keys(themes).length)).toString(),
      themes: themes
    };
  }
  // handle states functions
  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      this.setState({
        menu: menuText.language.find(e => (e.lang === this.state.lang)),
        aboutMe: aboutMeText.language.find(e => (e.lang === this.state.lang)),
        myWork: myWork.language.find(e => (e.lang === this.state.lang))
      });
    }
    if (prevState.isMobile === true & this.state.isMobile === false) {
      this.setState({
        showMobile: 'menu'
      });
    }
    if (this.state.currentTheme != prevState.currentTheme) {
      this.setTheme();
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.setTheme();
  }
  handleWindowSizeChange = () => {
    this.setState({ 
      isMobile: (window.innerWidth <= 660) || (window.matchMedia("(orientation: landscape) and (max-height: 550px)").matches)
    });
  }
  toggleContext = (i) => {
    this.setState({
      show: i
    })
  }
  toggleLang = (i) => {
    this.setState({
      lang: i
    })
  }
  toggleMobile = (i) => {
    this.setState({
      showMobile: i
    })
  }
  setTheme = () => {
    const theme = this.state.themes[this.state.currentTheme]
    Object.keys(theme).forEach((key) => {
      const cssKey = '--' + key 
      const cssValue = theme[key]
      document.body.style.setProperty(cssKey, cssValue)
    })
  }
  toggleTheme = () => {
    function getRandomInt(max) {
      return (Math.floor(Math.random() * Math.floor(max)));
    }
    let num
    do {
      num = getRandomInt(Object.keys(themes).length).toString()
    } while (num == this.state.currentTheme);
    this.setState({ currentTheme: num })
  }
  // End handle states
  //handle view functions
  selectContext = (text1, text2, show) => {
    if (show === 'about') {
      return(
        <React.Fragment>
          <AboutMe text1={text1}/>
        </React.Fragment>
      )
    }
    if (show === 'work') {
      return(
        <React.Fragment>
          <div className='animationInOut' id='myWorkRoot'>
            <MyWorks text2={text2}/>
          </div>
        </React.Fragment>
      )
    }
  }
  appContext = (isMobile=false, menuText) => {
    if (isMobile) {
      return(
        <div id='context'>
          {this.selectContext(this.state.aboutMe, this.state.myWork, this.state.show)}
          <button className='button animationInOut' onClick={ e => { this.toggleMobile('menu')}}>
            {menuText.back}
          </button>
        </div>
      )
    }else{
      return(
        <div id='context'>
          {this.selectContext(this.state.aboutMe, this.state.myWork, this.state.show)}
        </div>
      )
    }
  }
  contextMobileState = (text1, toggleContext, toggleLang, text2, text3, showMobileVer, show, lang , isMobile, toggleMobile) => {
    if (showMobileVer === 'menu') {
      return(
        <React.Fragment>
          <Menu text={text1} toggleTheme={this.toggleTheme} toggleContext={toggleContext} toggleLang={toggleLang} show={show} lang={lang} isMobile={isMobile} toggleMobile={toggleMobile}/>
        </React.Fragment>
      )
    }
    if (showMobileVer === 'context') {
      return(
        <React.Fragment>
          {this.appContext(this.state.isMobile, text1)}
        </React.Fragment>
      )
    }
  }
  handleMobileVer(isMobile=false){
    if (isMobile) {
      return(
        <React.Fragment>
          {this.contextMobileState(this.state.menu, this.toggleContext, this.toggleLang, this.state.aboutMe, this.state.myWork,this.state.showMobile, this.state.show, this.state.lang, this.state.isMobile, this.toggleMobile, this.toggleTheme)}
        </React.Fragment>
      )
    } else {
      return(
        <React.Fragment>
          <Menu text={this.state.menu} toggleTheme={this.toggleTheme} toggleContext={this.toggleContext} toggleLang={this.toggleLang} show={this.state.show} lang={this.state.lang}/>
          {this.appContext(this.state.isMobile)}
        </React.Fragment>
      )
    }
  }
  // End handle view
  render(){
    const bg_color = this.state.themes[this.state.currentTheme]["accent"];
    return(
      <React.Fragment>
        <Helmet>
          <html lang={this.state.lang} />
          <meta name="msapplication-TileColor" content={bg_color}/>
          <meta name="theme-color" content={bg_color}/>
        </Helmet>
        <div id='contentBox'>
          {this.handleMobileVer(this.state.isMobile)}
        </div>
        <Appversion/>
      </React.Fragment>
    )
  }
}

export default App;
