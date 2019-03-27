import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
          <div>
            <div>
              <div className="footer-top">
              </div>
              <div className="footer-bottom">
                <div className="container">
                  <div className='row d-flex align-items-center justify-content-around footer-content'>
                    <div className="col-6">
                    <img src={require('../images/thank-you.svg')} className="welcome-heading" alt="heading" width="200px" />
                  <p>This site was created in collaboration with the Boulder Convention and Visitors Bureau and is based on their Farm Trail Brochure. The Boulder Convention and Visitors Bureau wanted to offer visitors a way to experience the farms from which many Boulder chefs and restaurants get their food.  The staff contacted farmers and created a brochure that lists the experiences found on the farms such as tours, farm stands, hayrides and even a scenic drive.</p>
                  <p>
                  Photo Credits: Boulder Farmers Market - BoulderCVB Denise Chambers, McCauley Family Farm - Bedell Photography, Munson Farm - Paul Bousquet. 

                  </p>
                    </div>
                    <div className="col-4">
                    <div className="image-container">
                    <img src={require('../images/baby-sheep.jpg')} className="" alt="" width="400px" />
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        )
    }
}
export default Footer;
