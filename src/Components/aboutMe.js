import React, { Component } from 'react';

class AboutMe extends Component {
    render(){
      return(
        <div className='animationInOut' id='aboutMeDescription'>
          <p>{this.props.text1.text1}<span id='name'>{this.props.text1.name}</span>{this.props.text1.text2}<br/>{this.props.text1.text3}<span id='career'>{this.props.text1.text4}</span>{this.props.text1.text5}<br />{this.props.text1.text6}<u>{this.props.text1.text7}</u>{this.props.text1.text8}<u>{this.props.text1.text9}</u>{this.props.text1.text10}<u>{this.props.text1.text11}</u>{this.props.text1.text12}<span id='extra'>{this.props.text1.text13}</span></p>
        </div>
      )
    }
  }

export default AboutMe;