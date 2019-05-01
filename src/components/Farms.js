import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller }
from 'react-scroll'
import { Tooltip, OverlayTrigger, Overlay, Button } from 'react-bootstrap'

import '../css/farms.css'


class Farms extends Component {

  state = {
    visible:false,
    favorite:false
  }

  onProgress = ({progress,velocity},ref) => {
    if(progress >= 0.5){
      this.setState({visible: true})
      this.props.getScrollState(this.props.id)
    }
  }

  setFavorite = () => {
    this.setState({favorite: !this.state.favorite})
  }


    render() {
      let url = `"${this.props.url}"`
      let visible = this.state.visible
      let activities = this.props.activities
      let fPhoto = this.props.img
      let renderTooltip = this.renderTooltip
      let favorite = this.state.favorite




        return (
          <div>
            <ScrollTrigger onProgress={this.onProgress} />
            <Element name={this.props.id} className='element'>
              <div className='card shadow-sm'>
                <img src={require(`../images/farm-images/${fPhoto}`)} className="card-img-top "/>

                <div className="title-wrapper d-flex flex-column">
                  <div className="card-title">{this.props.name}</div>
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
                    return<OverlayTrigger
                      placement="bottom"
                      title={activity.name}
                      overlay={
                        <Tooltip
                          id={`tooltip-${activity.name}`}
                          className={activity.class}
                          >
                          {activity.name}
                        </Tooltip>
                      }
                    >
                    <img src={require(`../images/farm-map-icons-svg/${aIcon}`)} className='activity-icon' data-toggle="tooltip" data-placement="bottom" title={activity.name}/>
                    </OverlayTrigger>

                  })}
                  </div>
                  <span style={{color:'#F58220', paddingRight:"1em", float:'right'}}>
                    <i className={`far fa-heart fa-lg ${favorite ? 'fas fa-heart fa-lg' : ''}`} onClick={this.setFavorite}
                      ></i>
                  </span>
                </div>
              </div>
              </Element>
          </div>

        )
    }
}
export default Farms;
