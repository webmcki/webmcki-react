import React from 'react'
import { Link } from 'react-router-dom'
import Sil from './Sil'
import Sol from './Sol'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">별이계획</Link>
        <Sil/>
        <Sol/>
      </div>
    </nav>
  )
}

export default Navbar