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
          <h5 className="grey-text text-darken-3">회원정보</h5>
          <div className="input-field">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" onChange={this.handelChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">패스워드</label>
            <input type="password" id="password" onChange={this.handelChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">로그인</button>
          </div>
        </form>
      </div>
      
    )
  }
}

export default Create

