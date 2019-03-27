import React, { Component } from 'react';
import '../css/farms.css'
import logo from '../images/farm-trail-logo.svg'


class Header extends Component {
    render() {

        return (
          <div>
            <nav className="navbar fixed-top shadow-sm">
              <div className='container'>
                <a className="navbar-brand" href="#">
                  <img src={require('../images/farm-trail-logo.svg')} className="logo" alt="logo" width='250px' />
                </a>
              {/*<form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search Farms</button>
              </form>*/}
                <span>
                  <span style={{color:'#F58220', paddingRight:"1em"}}>
                  <i class="fas fa-heart fa-lg"></i>
                  </span>
                  <span style={{color:"#F58220", paddingRight:"3em"}}>
                  <i class="far fa-envelope fa-lg"></i>
                  </span>
                </span>
              </div>
            </nav>
            <div className="jumbotron jumbotron-fluid">
              <div className="container d-flex align-items-center justify-content-center">
                <div className="title-pad">
                  <p class="lead">A Tour of Farms in Boulder County</p>
                </div>
              </div>
            </div>
            <div className="welcome-wrapper">
              <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                  <div className="col-6">
                    <img src={require('../images/welcome.svg')} className="welcome-heading" alt="heading" width="300px" />
                    <p>
                    Early on, Boulder’s residents made clear a deep love
                    for their land. In 1967, Boulder became the first city
                    in the United States to tax itself for funds to be used
                    specifically for the acquisition and management of
                    open space. Around the same time, countywide
                    residents approved the use of public lands for
                    agriculture, seeing value in the care and use of public
                    land by farmers. Today, about 25,000 acres of the
                    county’s public lands are leased to farmers.
                    <br />
                    <br />
                    An even broader agricultural industry feeds
                    Boulder’s obsession with fresh foods and its
                    outdoor-loving ethos. There are over 850 farms
                    in Boulder County! This brochure is devoted to a
                    number of those farms that welcome visitors on
                    a regular basis.
                    <br />
                    <br />
                    It’s our hope you’ll get out and meet our
                    extraordinary farming community, feel the cool
                    Colorado sunshine on your skin, swing on a tire
                    swing, let a handful of juicy raspberries drip down
                    your chin — and see for yourself why Boulderites
                    are so passionate about our land and the foods
                    that come from it.
                    </p>
                  </div>
                  <div className="col-4">
                    <div className="image-container">
                      <img src={require('../images/growing-gardens.jpg')} alt='girl holding vegetables' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="activities-wrapper">
              <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                <div className="col-4">
                  <div className="image-container">
                    <img src={require('../images/cure-organic-farm.jpg')} alt='girl holding vegetables' />
                  </div>

                </div>
                  <div className="col-6">
                  <h2>Farm Activities</h2>
                  <p>
                  Each farm will have a series of icons that represent the various activities available on each farm including tours, farm stands, and animal interactions.
                  </p>
                  <img src={require('../images/activity-chart.svg')} alt='chart of farm activities' />
                  </div>

                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default Header;
