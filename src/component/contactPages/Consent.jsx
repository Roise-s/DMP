import './consent.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from "react";

const Consent = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "acc3cf74-f0e1-4e34-b6df-0b88ff967192");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>
            Send me a message <img src={msg_icon} alt="" />
        </h3>
        <p>Feel free to reach out through the contact form or find my contact information below. Your feedback, questions and interveiws are important to me as I strive to provide exceptional service.</p>
        <ul>
            <li><img src={mail_icon} alt="" />gauteng@danielmakapaneprojects.co.za</li>
            <li><img src={phone_icon} alt="" />012 023 4759</li>
            <li><img src={location_icon} alt="" />Pretoria: 3639 Marikana Dr, Block T - Ext, Soshanguve, 0164 Joburg: 64b krokodil road, Norkem park, Kempton park 1618</li>
        </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>From</label>
            <input type="email" name='Email' placeholder='Enter your Email' required/>
            <label>Subject</label>
            <input type="text" name='Subject' placeholder='e.g Job role, Interveiws etc' required/>
            <label>Compose email</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
        </div>
    </div>
  )
}

export default Consent
