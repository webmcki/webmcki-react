import React from 'react'
import { NavLink } from 'react-router-dom'

const Sil = () => {
  return (
    <ul className="right">
      <li><NavLink to='/create'>새 프로젝트</NavLink></li>
      <li><NavLink to='/'>로그 아웃</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>버턴</NavLink></li>
    </ul>
  )
}

export default Sil