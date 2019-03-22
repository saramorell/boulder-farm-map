import React, { Component } from 'react';
import Farms from './components/Farms'
import FarmList from './components/FarmList'
import Header from './components/Header'
import Footer from './components/Footer'
import TestMap from './components/TestMap'
import SymbolMap from './components/SymbolMap'
import SoftMap from './components/SoftMap'
import BoulderMap from './components/BoulderMap'
import ScrollTrigger from 'react-scroll-trigger';
import './css/farms.css'

class App extends Component {

  state = {
    farms: [],
    isActive: 0,
    endHeader: false,
    noFooter: true,
    filteredFarms:[]
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

handleSearch = (inputText) => {
    let filteredList = this.state.farms.filter(farm => farm.name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1 || farm.location.toLowerCase().indexOf(inputText.toLowerCase()) !== -1) ||
      this.setState({ filteredFarms: filteredList })
  }

onEnterViewport = () => {
  this.setState({
    endHeader: false,
    noFooter:false,
  });
 }

onExitViewport = () => {
  this.setState({
    endHeader: true,
    noFooter:true
  });
}



  render() {
   let endHeader = this.state.endHeader
   let noFooter = this.state.noFooter

    return (
      <div>
      <ScrollTrigger onExit={this.onExitViewport} onEnter={this.onEnterViewport}>
        <Header handleSearch={this.handleSearch} />
      </ScrollTrigger>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <FarmList
                    renderfarms={this.renderFarms}
                  />
              </div>

              <div className={`col-4 hidden  ${endHeader || noFooter ? 'col-4 fade-in position-fixed show-map ' : 'col-4 position-fixed fade-out '}`}>
                <SoftMap
                isActive={this.state.isActive} />
              </div>

            </div>
        </div>
        <ScrollTrigger onExit={this.onExitViewport} onEnter={this.onEnterViewport}>
          <Footer />
        </ScrollTrigger>
      </div>
    );
  }
}

export default App;
