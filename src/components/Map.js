import React, { Component } from 'react';
import mapImg from '../images/blue-map-8.png'
import pinImg from '../images/pin.svg'
import '../css/farms.css'

class Map extends Component {

    render() {

      let styles = {
        position:'relative',
        top: 200,
        left: -100,
        width: '48px',
        height: '48px',
        backgroundColor: 'yellow',
      }

        return (
          <div className='map'>
            <img src={ mapImg } className='map-image' center center fixed/>
            <div id='pin-9' className='pin' style={styles}>
            <img src={ pinImg }  />

            </div>
          </div>
        )
    }
}
export default Map;
