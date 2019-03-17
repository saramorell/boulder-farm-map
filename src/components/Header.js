import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
          <div>
          <nav className="navbar fixed-top navbar-light bg-transparent">
            <a className="navbar-brand" href="#">fixed top</a>
          </nav>
            <div className="jumbotron jumbotron-fluid">

              <div className="container">
                <h1 className="display-4">Hi, I'm the header</h1>
              </div>
            </div>
          </div>
        )
    }
}
export default Header;
