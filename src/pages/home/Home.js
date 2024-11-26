import React from "react";
import Navbar from "../../componnents/Navbar/Navbar1/Navbar";
import HeroSection from "../../componnents/Hero/Hero";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="home-services-main">
        <h3>Our Services</h3>

        <div className="home-service-cards">
        <div className="left-button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="home-service-card">
            <img src="images/se1.png" alt="img" />
            <h4>Card Title</h4>
          </div>
          <div className="home-service-card">
            <img src="images/se1.png" alt="img" />
            <h4>Card Title</h4>
          </div>
          <div className="home-service-card">
            <img src="images/se1.png" alt="img" />
            <h4>Card Title</h4>
          </div>
          <div className="home-service-card">
            <img src="images/se1.png" alt="img" />
            <h4>Card Title</h4>
          </div>

          <div className="right-button">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>


      <div className="why">
        <div className="left font-vietnam">
          <span>Why</span><span>Choose</span> <span>US ?</span>
        </div>
        <div className="right">
          <div className="right-l">
            <div className="td"></div>
            <div className="right-l1">


              <h5>For Artists :</h5>
              <li><img src='images/star.png' /><span>Flexible Hours</span></li>
              <li><img src='images/star.png' /><span>Financial Stability</span></li>
              <li><img src='images/star.png' /><span>Do what you love</span></li>
            </div>
            <div className="right-l2"></div>
          </div>
          <div className="right-l">
            <div className="td"></div>
            <div className="right-l1">
              <h5>For Studios :</h5>

              <li><img src='images/star.png' /><span>Versatile Roster</span></li>
              <li><img src='images/star.png' /><span>Professional</span></li>
              <li><img src='images/star.png' /><span>Reference & Background Check</span></li>
            </div>
            <div className="right-l2"></div>

          </div>
          <div className="right-r"></div>

        </div>
      </div>

      <div className="home-artist-main">
        <h3>Our Artists</h3>
        <div className="home-artist-cards">
        <div className="left-button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="home-artist-card">
            <img src="images/se3.png" alt="img" />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
          </div>
          <div className="home-artist-card">
            <img src="images/se3.png" alt="img" />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
          </div>
          <div className="home-artist-card">
            <img src="images/se3.png" alt="img" />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
          </div>
          <div className="home-artist-card">
            <img src="images/se3.png" alt="img" />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
          </div>

          <div className="right-button">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        
      </div>

      <div className="artist-home-testimonial">
        <div className="artist-testimonial-head">
          <h3 >Testimonials</h3>
          <div className="atrist-testimonial-border"></div>
        </div>


        <div className="artist-testimonial-cards">
          <div className="left-button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="artist-tesimonial-card">
            <div className="artist-testimonial">
              <div className="artist-testimonial-img">
                <img src="images/se3.png" alt="img" />
              </div>
              <div className="artist-testimonial-text">
                <div className="artist-testimonial-text-card">
                  <p>Kristin Watson</p>
                  <p>Marketing</p>
                  <p>Cordinate</p>
                </div>
                <div className="artist-testimonial-text-card">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <p>Testimonial</p>
                </div>
              </div>
            </div>

            <p className="artist-testimonial-p">
              Building relationships and having fun through community events.
            </p>
          </div>

          <div className="left-button">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
