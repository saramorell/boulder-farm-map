import React, { Component } from 'react';
import '../css/farms.css'

class FarmList extends Component {
    render() {
        return (
          <div className="farm-list">
            {this.props.renderfarms()}

          </div>
        )
    }
}
export default FarmList;
