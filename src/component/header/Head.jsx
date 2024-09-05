import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className='head'>
      <button className="cname">
        Daniel Mokopone Projects 
      </button>
      <button className="hbtn">
        <Link style={{color: 'white', textDecoration: 'none'}} to='/'>Home</Link>
      </button>
      <button className="hbtn">
      <Link style={{color: 'white', textDecoration: 'none'}} to='/about'>About</Link>
      </button>
      <button className="hbtn">
      <Link style={{color: 'white', textDecoration: 'none'}} to='/projects'>Projects</Link>
      </button>
      <button className="hbtn">
      <Link style={{color: 'white', textDecoration: 'none'}} to='/contacts'>Contacts</Link>
      </button>
      <button className="email">
        
      <Link style={{color: 'white', textDecoration: 'none'}} to='/contacts'>Email Us</Link>
      </button>
    </div>
  )
}

export default Head
