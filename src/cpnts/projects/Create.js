import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class Create extends Component {
  state = {
    title: '',
    content: ''
  }

  handelSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state)
    this.props.createProject(this.state)
  }

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit} className="white">
          <h5 className="grey-text text-darken-3">새프로젝트</h5>
          <div className="input-field">
            <label htmlFor="title">타이틀</label>
            <input type="text" id="title" onChange={this.handelChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">내용</label>
            <textarea id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handelChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">추가</button>
          </div>
        </form>
      </div>
      
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps) (Create)

