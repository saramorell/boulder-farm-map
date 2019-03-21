import React, { Component } from 'react';
import photo from '../images/aspen-moon-farm.jpg'
import ScrollTrigger from 'react-scroll-trigger';

import '../css/farms.css'


class Farms extends Component {

  state = {
    visible:false,
  }

  onEnterViewport = ({progress, velocity}, ref) => {
    this.setState({visible: true})
    this.props.getScrollState(this.props.id)
   }

    render() {
      let url = `"${this.props.url}"`
      let visible = this.state.visible
      let activities = this.props.activities


        return (
          <div>
          <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport} />

            <div className={`card shadow-sm card-inverse ${visible ? 'card shadow-sm card-inverse pin-active' : ''}`}>
              <img src={ photo } className="card-img-top"/>
              <div className=" d-flex flex-column " >
              <div className="card-title imgtext">{this.props.name}</div>
              <div className="card-subtitle">{this.props.subtitle}</div>
              </div>
                <div className="card-body">
                <h6>{this.props.location}</h6>
                <h6>{this.props.contact}</h6>
                <h6><a href={this.props.url} target="_blank">{this.props.website}</a></h6>
                <p>{this.props.description}</p>
                <div>

                {this.props.activities.map((activity, i)=> {
                  let aIcon = activity.icon
                  return <img src={require(`../images/farm-map-icons-svg/${aIcon}`)} className='activity-icon' data-toggle="tooltip" data-placement="bottom" title={activity.name}/>
                })}

                </div>

              </div>

            </div>

          </div>

        )
    }
}
export default Farms;
