import React from 'react'
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Contact = () => {
  return (
    <div className='contact-main'>
    <div className="contact">
    <div className="contact-left">
        <h1>Get in Touch</h1>
        <p>Our Experienced and knowlegable team is dedicated to provide you exceptional customer service.</p>
        <div className="contact-form">
            <div className="contact-form-item">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='john doe'/>
            </div>
            <div className="contact-form-item">
            <label htmlFor="name">Email</label>

            <input type="email" placeholder='johndoe@email.com'/>
            </div>
            <div className="contact-form-item">
            <label htmlFor="name">your message</label>
            <textarea  placeholder='enter your message here' rows="4" cols="50"/>
            </div>

            <button>Send Message</button>
        </div>
    </div>
    <div className="contact-right">
        <div className="contact-right-img">
            <img src="images/contact.svg" alt='contact-img'/>
        </div>
        <div className="contact-right-info">
            <div className="contact-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Canada</p>
            </div>
            <div className="contact-address">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>quickballchange@gmail.com  </p>
            </div>
            <div className="contact-address">
            <FontAwesomeIcon icon={faPhone} />
            <p>+1 647 822 9893</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact