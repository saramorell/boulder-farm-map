import React, { Component } from 'react';
import Farms from './components/Farms'
import FarmList from './components/FarmList'
import Header from './components/Header'
import Map from './components/Map'
import TestMap from './components/TestMap'
import BoulderMap from './components/BoulderMap'
import ScrollTrigger from 'react-scroll-trigger';
import './App.css';

class App extends Component {

  state = {
    farms: [],
    isActive: 4
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



  render() {
    return (
      <div>
        <Header />
        <div className="row">
        <div className="container">
          <div className="row">
              <div className="col-8">
                <FarmList
                    renderfarms={this.renderFarms}
                  />

              </div>
              <div className="col-4 position-fixed">
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

export default App;