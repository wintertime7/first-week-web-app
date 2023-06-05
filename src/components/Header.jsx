// Main imports
import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Header.css'

function Header() {
  return (
    <div className='header'>
      <h2 className="logo">rainers <span id='surname-span'>smolenskis</span></h2>
      <nav>
        <ul className='nav-links'>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>
      <a href="#" className="contact-button"><button>contact me</button></a>
    </div>
  )
}

export default Header