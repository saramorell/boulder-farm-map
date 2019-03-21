import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
          <div>
            <div>
              <div className="footer-top">
              </div>
              <div className="footer-bottom d-flex align-items-center">
                <div className="container">
                <h1>
                <a href="#" data-toggle="tooltip" data-placement="top" title="Tooltip on top">tool tip
                </a>
                </h1>
                  <p>This site is an online version of the Boulder Convention and Visitors Bureau's Farm Trail Brochure. The Boulder Convention and Visitors Bureau wanted to offer visitors a way to experience the farms from which many Boulder chefs and restaurants get their food.  The staff contacted farmers and created a brochure that lists the experiences found on the farms such as tours, farm stands, hayrides and even a scenic drive.</p>
                </div>
                </div>
            </div>
          </div>
        )
    }
}
export default Footer;
