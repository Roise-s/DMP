import React from 'react'
import './convert.css'
import { Link } from 'react-router-dom'

const Convert = () => {
  return (
    <div className='convert'>
        <p className="kk">Promo Video</p>
        <p className="ll">Ensuring a safe experience from foundation to completion</p>
        <p className="jjjf">We’re following all protocols to ensure your safety and vaccination drives are underway to ensure our employees are ready to meet you safely.</p>
        <button className="conbtn">
        <Link style={{color: 'white', textDecoration: 'none'}} to='/contacts'>Email Us</Link>
        </button>
      
    </div>
  )
}

export default Convert
