import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import '../css/farms.css'


class Header extends Component {
    render() {
        return (
          <div>
          <nav className="navbar fixed-top navbar-light">
            <a className="navbar-brand" href="#">fixed</a>
          </nav>
            <div className="jumbotron jumbotron-fluid">

              <div className="container d-flex align-items-center justify-content-center">
                <h1 className="display-4 title-pad">Boulder County Farm Tour</h1>
              </div>
            </div>

            <div className="content">
              <div className="container">
              <row>
              <div className="col-6">
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
              </row>
              </div>
            </div>
          </div>
        )
    }
}
export default Header;
