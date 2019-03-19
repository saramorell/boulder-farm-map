import React, { Component } from 'react';
import Farms from './components/Farms'
import FarmList from './components/FarmList'
import Header from './components/Header'
import Map from './components/Map'
import TestMap from './components/TestMap'
import BoulderMap from './components/BoulderMap'
import ScrollTrigger from 'react-scroll-trigger';
import './css/farms.css'

class App extends Component {

  state = {
    farms: [],
    isActive: 0,
    endHeader: false
  }

async componentDidMount(){
  const response = await fetch('http://localhost:3001/farms/')
  const json = await response.json()
  this.setState({farms:json})
}

getScrollState = (active) => {
  console.log("from app.js", active)
  this.setState({isActive:active})
}


renderFarms = () => {
  return this.state.farms.map((f,i) => {
    return<Farms {...f} key={i}
    farms={this.state.farms}
    getScrollState={this.getScrollState}
    />
  })
}

onEnterViewport = () => {
  this.setState({
    endHeader: false,
  });
 }

onExitViewport = () => {
  this.setState({
    endHeader: true,
  });
}



  render() {
   let endHeader = this.state.endHeader

    return (
      <div>
      <ScrollTrigger onExit={this.onExitViewport} onEnter={this.onEnterViewport}>
        <Header />
      </ScrollTrigger>
        <div className="row">
        <div className="container">
          <div className="row">
              <div className="col-8">
                <FarmList
                    renderfarms={this.renderFarms}
                  />
              </div>

              <div className={`col-4 hidden  ${endHeader ? 'col-4 fade-in position-fixed show-map ' : 'col-4 position-fixed fade-out '}`}>
                <BoulderMap
                isActive={this.state.isActive} />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

{/*className={` cls-26 grow ${isActive === 6 ? 'grow active' : ''}`}*/}

export default App;
