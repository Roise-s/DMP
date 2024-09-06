import React, { useState } from 'react'
import './footer.css'
import social from '../../assets/facebook.jpg'
import social1 from '../../assets/X.jpg'
import social2 from '../../assets/Insta.jpg'


const Footer = () => {
    const [meets, setMeets] = useState(0)
    
    let meet

    if(meets === 0) {
        meet = ''
    } else {
        meet = 'sent'
    }

  return (
    <div className='footer'>
        <div className="frt">
            <div className="frt1">
                <p className="qwer">D.M.P</p>
                <p className="zxcdsd">Daniel Makapane Projects is committed to using a collaborative approach to successfully execute any service. You'll notice the change right away. </p>
                <div className="numbers">
                    <img src="" alt="" />
                    <p className="inner">+27 67 889 6576</p>
                </div>
                <div className="numbers">
                    <img src="" alt="" />
                    <p className="inner">gauteng@danielmakapaneprojects.co.za</p>
                </div>
            </div>
            <div className="frt1">
                <p className="te">Explore</p>
                <p className="tees">Buildings</p>
                <p className="tees">Carpentry</p>
                <p className="tees">Electrical Engineering</p>
                <p className="tees">Plastering</p>
                <p className="tees">Plumbing</p>
                <p className="tees">Lapa and Pools</p>
                <p className="tees">Solar and Gate Motor Installation</p>
            </div>
            <div className="frt1">
                <p className="news">Our Newsletter</p>
                <p className="subscri">Subscribe for deals, offers and upcoming events.</p>
                <div className="lowwset">
                    <input type="text" className="input1" placeholder='Enter your email'/>
                    <button className="btnSet" onClick={() => {setMeets(meets + 1)}}>Send</button>
                </div>
                <div className="lowwset">
                    <p>{meet}</p>
                    <button className="socalBtn">
                        <img src={social} alt="" className='soss'/>
                    </button>
                    <button className="socalBtn">
                    <img src={social1} alt="" className='sos'/></button>
                    <button className="socalBtn">
                    <img src={social2} alt="" className='sos'/></button>
                </div>
            </div>
        </div>
        <div className="low">
            <p className="loxw">© 2024 Daniel Makapane projects</p>
        </div>
      
    </div>
  )
}

export default Footer
