import React from 'react'
import "./Contact.css"
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
    <div className="contact-right"></div>
    </div>
    </div>
  )
}

export default Contact