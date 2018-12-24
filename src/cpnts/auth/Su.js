import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'

class Su extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handelSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
    //console.log(this.state)
  }

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    const {auth, authError} = this.props
    if (auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit} className="white">
          <h5 className="grey-text text-darken-3">회원가입</h5>
          <div className="input-field">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">패스워드</label>
            <input type="password" id="password" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">성</label>
            <input type="text" id="firstName" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">이름</label>
            <input type="text" id="lastName" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">회원가입</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
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
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Su)
