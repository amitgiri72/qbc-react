import React from 'react'
import "./Services.css"
import Navbar from '../../componnents/Navbar/Navbar1/Navbar'
const Services = () => {
  return (
    <div className='services-main'>
      <Navbar />
      <div className="services">
        <h3>For Clients</h3>
        <p>We are passionate about providing a space where food enthusiasts from all walks of life can come together to inspire and be inspired. Whether you're a seasoned chef or a home cook, our platform is designed to make sharing your culinary creations easy and enjoyable.We are passionate about providing a space where food enthusiasts from all walks of life can come together to inspire and be inspired. Whether you're a seasoned chef or a home cook, our platform is designed to make sharing your culinary creations easy and enjoyable.</p>
      </div>

      <div className="cards">
        <div className="card">
          <img src='images/se1.png' alt='img' />
          <h4>Card Title</h4>
        </div>
        <div className="card">
          <img src='images/se1.png' alt='img' />
          <h4>Card Title</h4>
        </div>
        <div className="card">
          <img src='images/se1.png' alt='img' />
          <h4>Card Title</h4>
        </div>
        <div className="card">
          <img src='images/se1.png' alt='img' />
          <h4>Card Title</h4>
        </div>
        <div className="card">
          <img src='images/se1.png' alt='img' />
          <h4>Card Title</h4>
        </div>
        <div className="card">
          <img src='images/se1.png' alt='img' />
          <h4>Card Title</h4>
        </div>
        <div className="card">
          <img src='images/se1.png' alt='img' />
          <h4>Card Title</h4>
        </div>
        <div className="card">
          <img src='images/se1.png' alt='img' />
          <h4>Card Title</h4>
        </div>
      </div>
    </div>
  )
}

export default Services