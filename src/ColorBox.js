import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
      // if opacity in app.js is greater than 0.2,
      if (this.props.opacity > 0.2) {
          return (
              // create a div for a color box with that same opacity
              <div className='color-box' style={{opacity: this.props.opacity}}>
                  {/* & inside this div create a new color box that subtracts 0.1 from parent opacity )*/}
                  <ColorBox opacity={this.props.opacity - 0.1} />
              </div>
          )
      } else {
          // once we repeatedly subtract opacity, exit out of the loop & return null
          return null
      }
  }

}
