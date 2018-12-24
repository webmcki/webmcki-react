import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Si extends Component {
  state = {
    email: '',
    password: ''
  }

  handelSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state)
    this.props.signIn(this.state)
  }

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const { authError, auth } = this.props
    if(auth.uid) return <Redirect to='/'/>
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
            <div className="red-text center">
              { authError ? <p>{ authError }</p> : null }
            </div>
          </div>
        </form>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  //console.log(state)
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Si)

