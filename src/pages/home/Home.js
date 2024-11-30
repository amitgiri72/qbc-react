import React, { useEffect, useState } from "react";
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
import axios from "axios";
const Home = () => {

  const [services, setServices] = useState([]);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



   // Get number of cards to display based on screen size
   const getServicesPerPage = () => {
    if (windowWidth >= 1024) return 4;    // Large screens
    if (windowWidth >= 768) return 3;     // Tablet
    return 2;                             // Mobile
  };

  // Update window width when resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Reset current index when screen size changes to prevent empty spaces
      setCurrentServiceIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

   // Fetch services data
   useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/v1/service/get-service');
        if (data.success) {
          setServices(data.service);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    const binary = String.fromCharCode(...new Uint8Array(buffer));
    return window.btoa(binary);
  };

  const handlePrevServices = () => {
    setCurrentServiceIndex((prevIndex) => {
      const newIndex = prevIndex - getServicesPerPage();
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNextServices = () => {
    setCurrentServiceIndex((prevIndex) => {
      const newIndex = prevIndex + getServicesPerPage();
      const maxStartIndex = Math.max(0, services.length - getServicesPerPage());
      return newIndex >= maxStartIndex ? maxStartIndex : newIndex;
    });
  };

  // Get current services to display
  const currentServices = services.slice(
    currentServiceIndex,
    currentServiceIndex + getServicesPerPage()
  );

  // Check if navigation buttons should be enabled
  const canGoBack = currentServiceIndex > 0;
  const canGoForward = currentServiceIndex + getServicesPerPage() < services.length;

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="home-services-main">
        <h3>Our Services</h3>

       
        <div className="home-service-cards">
          <div 
            className={`left-button ${!canGoBack ? 'disabled' : ''}`}
            onClick={canGoBack ? handlePrevServices : undefined}
            style={{ opacity: canGoBack ? 1 : 0.5, cursor: canGoBack ? 'pointer' : 'default' }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>

          <div className="service-cards-container">
            {services.length > 0 ? (
              currentServices.map((service) => {
                const base64Image = `data:${service.photo.contentType};base64,${arrayBufferToBase64(service.photo.data.data)}`;

                return (
                  <div className="home-service-card" key={service._id}>
                    <img src={base64Image} alt={service.name} />
                    <h4>{service.name}</h4>
                  </div>
                );
              })
            ) : (
              <p>Loading services...</p>
            )}
          </div>

          <div 
            className={`right-button ${!canGoForward ? 'disabled' : ''}`}
            onClick={canGoForward ? handleNextServices : undefined}
            style={{ opacity: canGoForward ? 1 : 0.5, cursor: canGoForward ? 'pointer' : 'default' }}
          >
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
