import React from 'react'
import './hallowen.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'

const Hallowen = () => {
  return (
    <div className='hallowen'>
        <div className="cc">
            <img src={icon2} alt="pic" className='imgpic'/>
            <div className="iner">
                <p className="ff">Reasonable Prices</p>
                <p className="ffl">We understand the importance of providing quality service at a reasonable price, which is why we strive to keep our fees competitive within the industry</p>
            </div>
        </div>
        <div className="cc">
            <img src={icon1} alt="pic" className='imgpic'/>
            <div className="iner">
                <p className="ff">
                Professional Team</p>
                <p className="ffl">Our technicians are well-trained and equipped to handle a wide range of problems, ensuring that you receive efficient and effective solutions for your specific needs.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Hallowen
