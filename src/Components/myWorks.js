import React, { Component } from 'react';

class MyWorks extends Component {
  render(){
    function imageAvailable(image, alt) {
      if(image.substring(0,4) === 'http') {
        try {
          return(
            <img async id='workImage' alt={alt} src={image}></img>
          )
        } catch (error) {
          console.log(error)
        }
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

export default MyWorks;