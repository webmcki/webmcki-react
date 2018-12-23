import React, { Component } from 'react'
import Noti from './Noti'
import List from '../projects/List'
import { connect } from 'react-redux'

class Dash extends Component {
  render() {
    //console.log(this.props)
    const { projects } = this.props
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"><List projects={projects} /></div>
          <div className="col s12 m5 offset-m1"></div>
            <Noti />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps) (Dash)