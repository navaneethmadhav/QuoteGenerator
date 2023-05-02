import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
        <Link to={'/'} className='nav-links'>Home</Link>
        <Link to={'/bookmarks'} className='nav-links'>Bookmarks</Link>
    </div>
  )
}

export default Header