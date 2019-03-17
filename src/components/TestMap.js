import React, { Component } from 'react';
import '../css/farms.css'

class TestMap extends Component {

    render() {

      let isActive = this.props.isActive


      return (
        <div className='map'>
          <svg id="Layer_1" dataname="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <defs>
          <style>
          {`.cls-1{fill:#e4f4f1;}.cls-2{fill:#145e68;}.cls-3{fill:#f99108;}.cls-4{fill:#17b5c1;}`}
          </style>
          </defs>
          <title>test-map</title>
          <rect className="cls-1" width="200" height="200"/>
          <path id="marker" className={`cls-2 grow ${isActive === 2 ? 'cls-2 active' : ''}`} d="M165.85,127.07a12.33,12.33,0,1,0-24.66,0,12.15,12.15,0,0,0,1,4.87.52.52,0,0,0,.06.13h0l.13.27c.14.28.28.56.44.83L154,154.74l10.75-22.67h0A12.28,12.28,0,0,0,165.85,127.07Zm-12.33,4.81a4.58,4.58,0,1,1,4.57-4.57A4.57,4.57,0,0,1,153.52,131.88Z"/>
          <path id="marker" className={`cls-3 grow ${isActive === 3 ? 'cls-3 grow active' : ''}`} d="M74.8,139.08A12.33,12.33,0,1,0,51.13,144s0,.08.07.13h0l.14.26c.14.29.28.56.44.84L63,166.75l10.76-22.67h0A12.28,12.28,0,0,0,74.8,139.08Zm-12.33,4.81A4.58,4.58,0,1,1,67,139.31,4.57,4.57,0,0,1,62.47,143.89Z"/>
          <path id="marker" className={`cls-4 ${isActive === 4 ? 'cls-4 grow active' : ''}`} d="M70.23,55.61a12.34,12.34,0,1,0-23.67,4.87l.06.13h0l.14.26c.13.29.28.56.43.83L58.41,83.27,69.17,60.61h0A12.28,12.28,0,0,0,70.23,55.61ZM57.9,60.42a4.58,4.58,0,1,1,4.57-4.58A4.58,4.58,0,0,1,57.9,60.42Z"/>
          </svg>

        </div>
      )
  }
}
export default TestMap;
