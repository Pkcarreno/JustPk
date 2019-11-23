import React, { Component } from 'react';
import './App.scss';
import packageJson from '../package.json';
import menuText from './Assets/Texts/menu.json';
import aboutMeText from './Assets/Texts/aboutMe.json';
import myWork from './Assets/Texts/myWorks.json';
import {Helmet} from 'react-helmet';
import curriculumEs from './Assets/Curriculum/curriculumEs.pdf';
import curriculumEn from './Assets/Curriculum/curriculumEn.pdf';

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
    const aboutButton = (this.props.show === 'about' ? 'active':'buttonEffect');
    const workButton = (this.props.show === 'work' ? 'active':'buttonEffect');
    const enButton = (this.props.lang === 'en' ? 'on':'button2Effect');
    const esButton = (this.props.lang === 'es' ? 'on':'button2Effect');

    function toggleButtons(toggleContext,button1,button2,isMobile=false,toggleMobile) {
      if (isMobile) {
        return(
          <React.Fragment>
            <button className={'button mobileButton'} onClick={(e => {toggleContext('about'); toggleMobile('context');}) }>{button1}</button>
            <button className={'button mobileButton'} onClick={e => {toggleContext('work'); toggleMobile('context');} }>{button2}</button>
          </React.Fragment>
        )
      } else {
        return(
          <React.Fragment>
            <button className={'button '+ aboutButton} onClick={e => {toggleContext('about')}}>{button1}</button>
            <button className={'button '+ workButton} onClick={e => {toggleContext('work')}}>{button2}</button>
          </React.Fragment>
        )
      }
    }
    return(
      <div id='menuDeskt'>
        <p id='logo'>Pk</p>
        <div id='contextButton'>
          {toggleButtons(this.props.toggleContext,this.props.text.button1,this.props.text.button2,this.props.isMobile,this.props.toggleMobile)}
        </div>
  
        <div id='language'>
          <button className={'button2 '+ enButton} onClick={e => {this.props.toggleLang('en')}}>English</button>
          <p> - </p>
          <button className={'button2 '+ esButton} onClick={e => {this.props.toggleLang('es')}}>Español</button>
        </div>
  
        <div className='primerDiv'>
          <div id='rrss'>
            <a href='https://github.com/Pkcarreno'>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-square" className="svg-inline--fa fa-github-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg>
            </a>
            <a href='https://www.instagram.com/pkcarreno'>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href='https://twitter.com/Pkcarreno'>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" className="svg-inline--fa fa-twitter-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg>
            </a>
            <a href='https://www.linkedin.com/in/pedro-carre%C3%B1o-1b5640185/'>
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
          </div>
          <div className='separator' id='freelancing'>
            <a href='https://www.fiverr.com/pkcarreno'>Fiverr</a>
            {/*<a href=''>Freelancer</a>*/}
          </div>
          <a className='separator' href='mailto:scenic.pk@gmail.com'>scenic.pk@gmail.com</a>
          <p>{this.props.text.curriculum1} <a href={this.props.lang === 'es'? curriculumEs:curriculumEn} download='Pedro Carreno curriculum.pdf'>{this.props.text.curriculum2}</a></p>
        </div>
      </div>
    )
  }
}

class AboutMe extends Component {
  render(){
    return(
      <div className='animationInOut' id='aboutMeDescription'>
        <p>{this.props.text1.text1}<span id='name'>{this.props.text1.name}</span>{this.props.text1.text2}<br/>{this.props.text1.text3}<span id='career'>{this.props.text1.text4}</span>{this.props.text1.text5}<br />{this.props.text1.text6}<u>{this.props.text1.text7}</u>{this.props.text1.text8}<u>{this.props.text1.text9}</u>{this.props.text1.text10}<u>{this.props.text1.text11}</u>{this.props.text1.text12}<span id='extra'>{this.props.text1.text13}</span></p>
      </div>
    )
  }
}

class MyWorks extends Component {
  render(){
    function imageAvailable(image, alt) {
      try {
        if(image.substring(0,4) === 'http') {
          return(
            <img async id='workImage' alt={alt} src={image}></img>
          )
        } else {
          console.log(image.substring(0,4),'nope')
        }
      } catch (error) {
        console.log(error)
      }
    }
    return(
      <React.Fragment>
        {this.props.text2.card.map(e => 
          <div id='workBox'>
          {imageAvailable(e.image, e.alt)}
          <p id='workTitle'><span>{e.title}</span></p>
          <p id='workDescription'><span>{e.description}</span></p>
          <a href={e.link}>{e.direction}</a>
          <p id='workDate'><span>{e.date}</span></p>
        </div>
        )}
      </React.Fragment>
    )
  }
}

class Context extends Component {
  render(){
    function goBackIcon(isMobile=false, toggle){
      if (isMobile) {
        return(
          <React.Fragment>
            <button className='button animationInOut' onClick={ e => { toggle('menu')}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
            </button>
          </React.Fragment>
        )
      }
    }
    function contextState(text1, text2, show){
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
    return(
      <div id='context'>
        {goBackIcon(this.props.isMobile, this.props.toggleMobile)}
        {contextState(this.props.text1,this.props.text2,this.props.show)}
      </div>
    )
  }
}

class ContextMobile extends Component {
  render(){
    function contextState(text1, toggleContext, toggleLang, text2, text3, showMobileVer, show, lang , isMobile, toggleMobile){
      if (showMobileVer === 'menu') {
        return(<Menu text={text1} toggleContext={toggleContext} toggleLang={toggleLang} show={show} lang={lang} isMobile={isMobile} toggleMobile={toggleMobile}/>)
      }
      if (showMobileVer === 'context') {
        return(<Context text1={text2} text2={text3} show={show} isMobile={isMobile} toggleMobile={toggleMobile}/>)
      }
    }
    return(
      <React.Fragment>
        {contextState(this.props.text1, this.props.toggleContext, this.props.toggleLang, this.props.text2, this.props.text3,this.props.showMobileVer, this.props.show, this.props.lang, this.props.isMobile, this.props.toggleMobile)}
      </React.Fragment>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: (navigator.language || navigator.userLanguage).substring(0,2) === 'es' ? 'es':'en',
      show: 'about',
      isMobile: window.innerWidth <= 660,
      showMobile: 'menu',
      menu: menuText.language.find(e => (e.lang === ((navigator.language || navigator.userLanguage).substring(0,2) === 'es' ? 'es':'en'))),
      aboutMe: aboutMeText.language.find(e => (e.lang === ((navigator.language || navigator.userLanguage).substring(0,2) === 'es' ? 'es':'en'))),
      myWork: myWork.language.find(e => (e.lang === ((navigator.language || navigator.userLanguage).substring(0,2) === 'es' ? 'es':'en')))
    };
  }

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
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ 
      isMobile: window.innerWidth <= 660 
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
  handleMobileVer(isMobile=false){
    if (isMobile) {
      return(
        <React.Fragment>
          <ContextMobile text1={this.state.menu} toggleContext={this.toggleContext} toggleLang={this.toggleLang} text2={this.state.aboutMe} text3={this.state.myWork} showMobileVer={this.state.showMobile} show={this.state.show} lang={this.state.lang} isMobile={this.state.isMobile} toggleMobile={this.toggleMobile}/>
        </React.Fragment>
      )
    } else {
      return(
        <React.Fragment>
          <Menu text={this.state.menu} toggleContext={this.toggleContext} toggleLang={this.toggleLang} show={this.state.show} lang={this.state.lang}/>
          <Context text1={this.state.aboutMe} text2={this.state.myWork} show={this.state.show}/>
        </React.Fragment>
      )
    }
  }
  render(){
    return(
      <React.Fragment>
        <Helmet>
          <html lang={this.state.lang} />
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
