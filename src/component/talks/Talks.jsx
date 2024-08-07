import React from 'react'
import './talks.css'
import pic1 from '../../assets/WhatsApp-Image-2024-07-03-at-07.34.59-1.jpeg'
import pic2 from '../../assets/WhatsApp-Image-2024-07-03-at-07.55.46.jpeg'
import pic3 from '../../assets/WhatsApp-Image-2024-07-03-at-12.13.14.jpeg'

const Talks = () => {
  return (
    <div className='talks'>
        <p className="hww">How We Works</p>
        <p className="long-p">Here's what our satisfied clients are saying</p>
        <div className="anbox">
            <div className="minebox">
                <img src={pic1} alt="none" className='dipics'/>
                <p className="oneee">Audrey Nkuna</p>
                <p className="oooo">House Construction</p>
                <p className="longgg">I believe Daniel Makapane Projects provided the finest value for the renovation and new entrance to my house. I strongly recommend Peter Maswanganyi and Daniel Makapane Projects Construction.</p>
            </div>

            <div className="minebox">
                <img src={pic2} alt="none" className='dipicss'/>
                <p className="oneee">Mr Van de Merwe</p>
                <p className="oooo">Resort Water Works</p>
                <p className="longgg">I hired them to construct the pools at my resort, and they did not disappoint. The services were superb, and the personnel remained professional throughout the construction phase.</p>
            </div>

            <div className="minebox">
                <img src={pic3} alt="none" className='dipicsss'/>
                <p className="oneee">Grace Sithole</p>
                <p className="oooor">Salon Interior, Designing and Carpentry</p>
                <p className="longggr">Good customer service, experienced staff, and excellent results. I personally recommend them for home carpentry services.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Talks
