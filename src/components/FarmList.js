import React, { Component } from 'react';
class FarmList extends Component {
    render() {
        return (
          <div>
            {this.props.renderfarms()}

          </div>
        )
    }
}
export default FarmList;
