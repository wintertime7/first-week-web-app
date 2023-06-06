// Main imports
import React from 'react'
import { Link } from 'react-router-dom'

// Style imports
import '../style/Header.css'

function Header() {
  return (
    <div className='header'>
      <Link to='/'><h2 className="logo">rainers <span id='surname-span'>smolenskis</span></h2></Link>
      <nav>
        <ul className='nav-links'>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>
      <Link to='/contact' className="contact-button"><button>contact me</button></Link>
    </div>
  )
}

export default Header