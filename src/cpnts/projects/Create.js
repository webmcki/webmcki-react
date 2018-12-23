import React, { Component } from 'react'

class Create extends Component {
  state = {
    title: '',
    content: ''
  }

  handelSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
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
            <input type="email" id="title" onChange={this.handelChange}/>
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

export default Create

