import React from 'react'
import "./About.css"
import Navbar from '../../componnents/Navbar/Navbar1/Navbar'

function About() {
  return (
    <div className='about-main'>
      <Navbar />
      <div className="about">
        <h3>About</h3>
        <p>Quick Ball Change is Canada's Premier Agency for Dance Educators. Our platforms allows artists to make a living doing what they love and for studios hire versatile and professional artists. Our roster spans across Canada, ranging in all disciplines to include certified RAD ballet instructors, certified ACRO instructors, Ballroom champions, professional Musical Theatre & Film/TV Actor Dancers!  We specialize in substitute teaching, but include a complete roster for all teaching needs.  Our services are absolutely free for all studios and schools to use! All teachers are referenced checked and monitored with constant studio/teacher feedback.Studios, schools, academies or individuals send us their needs and we match them up with our best suited, available clients in their area. Whether you are in a pinch to cover your classes or just looking to spice it up with the edgiest choreography, QBC has the solution for you.</p>
      </div>
      <div className="about">
        <h3>Our Mission</h3>
        <p>Our missions is to create a supportive and professional community where Artists can generate an income sharing their passion and studios/clients can provide fun and top level dance training to their clientele.</p>
      </div>

      <div className="why">
        <div className="left font-vietnam">
          <span>Why</span><span>Choose</span> <span>US</span>
        </div>
        <div className="right">
          <div className="right-l">
            <div className="td"></div>
            <div className="right-l1">


              <h5>For Artist:</h5>
              <li><img src='images/star.png' /><span>Flexible Hours</span></li>
              <li><img src='images/star.png' /><span>Financial Stability</span></li>
              <li><img src='images/star.png' /><span>Do what you love</span></li>
            </div>
            <div className="right-l2"></div>
          </div>
          <div className="right-l">
            <div className="td"></div>
            <div className="right-l1">
              <h5>For Artist:</h5>

              <li><img src='images/star.png' /><span>Versetile Roaster</span></li>
              <li><img src='images/star.png' /><span>Professional</span></li>
              <li><img src='images/star.png' /><span>Reference & Background Check</span></li>
            </div>
            <div className="right-l2"></div>

          </div>
          <div className="right-r"></div>

        </div>
      </div>
      <div className="about">
        <h3>For Clients</h3>
        <p>We are passionate about providing a space where food enthusiasts from all walks of life can come together to inspire and be inspired. Whether you're a seasoned chef or a home cook, our platform is designed to make sharing your culinary creations easy and enjoyable.We are passionate about providing a space where food enthusiasts from all walks of life can come together to inspire and be inspired. Whether you're a seasoned chef or a home cook, our platform is designed to make sharing your culinary creations easy and enjoyable.</p>
      </div>
      <div className="about">
        <h3>For Artists</h3>
        <p>Our mission is to create a welcoming and supportive community where everyone can share their love for food and cooking. We strive to foster connections, celebrate diversity, and encourage culinary exploration.Our mission is to create a welcoming and supportive community where everyone can share their love for food and cooking. We strive to foster connections, celebrate diversity, and encourage culinary exploration.</p>
      </div>


    </div>
  )
}

export default About