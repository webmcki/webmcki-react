import React from 'react'
import { Link } from 'react-router-dom'
import Sil from './Sil'
import Sol from './Sol'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props
  //console.log(auth)
  const links = auth.uid ? <Sil/> : <Sol/>
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">별이계획</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)