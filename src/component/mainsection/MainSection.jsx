import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

const MainSection = () => {

  return (
    <div className='ms'>
        <div className="msone">
            <div className="title">
                <button className='bb'></button>
                <p className="titles">Construction Reimagined</p>
            </div>
            <p className="sub">Here at Daniel Makapane Projects we understand the importance of close job site coordination, solid subcontractor partnerships, and proactive communication with owners in delivering quality projects on time and under budget.</p>
            <button className="video">
            <Link style={{color: 'white', textDecoration: 'none'}} to='/about'>Find more</Link>
            </button>
        </div>
        <div className="mstwo">
            <p className="os">Our Services</p>
            <p className="dd">Building</p>
            <p className="dd">Commercial Construction</p>
            <p className="dd">Carpentry And Ceilling</p>
            <p className="dd">CCTV Installation</p>
            <p className="dd">Electrical Engrineering</p>
            <p className="dd">Lapa And Pool Construction</p>
            <p className="dd">Painting</p>
            <p className="dd">Paving</p>
            <p className="dd">Plastering</p>
            <p className="dd">Plumbing</p>
            <p className="dd">Solor Installation</p>
             <p className='dd'>Motor Gate Installating</p>
            <p className='dd'>Tiling</p>
        </div>
      
    </div>
  )
}

export default MainSection
