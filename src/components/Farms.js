import React, { Component } from 'react';
import photo from '../images/farm_placeholder.jpg'
import ScrollTrigger from 'react-scroll-trigger';

import '../css/farms.css'


class Farms extends Component {

  state = {
    visible:false,
    active:0,
  }

  onEnterViewport = () => {
     this.setState({visible: true})
    this.props.getScrollState(this.props.id)
   }


   onExitViewport = () => {
     this.setState({
       visible: false,
     });
   }

    render() {

    let visible = this.state.visible



        return (
          <div>
          <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport} />

            <div className={`card card-inverse ${visible ? 'card card-inverse pin-active' : ''}`}>
              <img src={ photo } className="card-img-top"/>
              <div className="card-img-overlay d-flex flex-column " >
              <div className="card-title imgtext">{this.props.name}</div>
              </div>
                <div className="card-body">
                <h6>{this.props.location}</h6>
                <h6>{this.props.contact}</h6>
                <h6><a href={this.props.website}>{this.props.website}</a></h6>
                <p>{this.props.description}</p>
                </div>

            </div>

          </div>

        )
    }
}
export default Farms;
