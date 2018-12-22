import React, { Component } from 'react'
import Noti from './Noti'
import List from '../projects/List'

class Dash extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"><List/></div>
          <div className="col s12 m5 offset-m1"></div>
            <Noti/>
        </div>
      </div>
    )
  }
}

export default Dash