import React from 'react'
import './Four.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Four = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9fdad893-748c-45c4-b272-308a9e486e85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact from or find our contact information below.Your feedback,questions,and suggestions aee important to us as we strive to provide exceptionsl service to our community</p>
            <ul>
                <li><img src={mail_icon} alt="" />s21_shruti_sawrate@mgmcen.ac.in</li>
                <li><img src={phone_icon} alt="" />+91 8855987137</li>
                <li><img src={location_icon} alt="" />Nanded Bypass Rd, Hingoli Naka, Ambekar Nagar, Nanded-Waghala, Nanded, Maharashtra 431601</li>
            </ul>
        </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter Your Name' required/>
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required />
          <label>Write Your message here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Four
