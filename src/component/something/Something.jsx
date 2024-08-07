import React from 'react'
import './something.css'
import pic from '../../assets/WhatsApp-Image-2024-06-24-at-21.10.40.jpeg'

const Something = () => {
  return (
    <div className='three'>
        <div className="hsrf">
            <button className='sbtn'></button>
            <p className="srf">STRONG RELATIONSHIPS FOR YOUR GOOD</p>
        </div>
      <div className="mainss">
        <div className="htext">
            <p className="texts">Our general contracting team is proud of their connections with subcontractors and other project partners, and they work hard to build cooperation and mutual respect across all of our project sites. Daniel Makapane Projects can closely monitor and promptly detect concerns that may affect the safety, budget, and project timeline by leveraging our team's relationships and measuring project progress through comprehensive schedules, rigorous safety plans, and effective cost control reporting.</p>
            <p className="texts">
            As a general contractor, we have numerous options for working with an owner or customer, including negotiated contracts, Not to Exceed agreements, and hard bid proposals.
            </p>
            <p className="texts">
            Daniel Makapane Projects provides a comprehensive approach to general contracting services, with a focus on excellence, quality, and safety throughout. 
            </p>
        </div>
        <img src={pic} alt="pic" className='qimg' />
      </div>
    </div>
  )
}

export default Something
