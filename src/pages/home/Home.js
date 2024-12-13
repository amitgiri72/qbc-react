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
  const [artists, setArtists] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
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
      setCurrentArtistIndex(0);
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

  // Fetch testimonial data
  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/v1/testimonial/get-testimonial');
        if (data.success) {
          setTestimonials(data.testimonial);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchTestimonial();
  }, []);



  // Fetch artists and their categories
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/v1/artist/get-all'); // Adjust API endpoint as needed
        if (data.success) {
          const artistsWithCategories = await Promise.all(
            data.artists.map(async (artist) => {
              if (artist.category && artist.category.length > 0) {
                const categoryIds = artist.category[0].split(",");
                const categories = await fetchCategoryDetails(categoryIds);
                return { ...artist, categories }; // Add fetched categories to the artist object
              }
              return { ...artist, categories: [] }; // Handle artists without categories
            })
          );
          setArtists(artistsWithCategories);

        }
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  const fetchCategoryDetails = async (categoryIds) => {
    try {
      const categoryPromises = categoryIds.map((id) =>
        axios.get(`http://localhost:8080/api/v1/service/single-service/${id.trim()}`)
      );
      const categoryResponses = await Promise.all(categoryPromises);
      return categoryResponses.map((response) => response.data.service); // Return category data
    } catch (error) {
      console.error("Error fetching category details:", error);
      return [];
    }
  };


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

  const handlePrevArtists = () => {
    setCurrentArtistIndex((prevIndex) => {
      const newIndex = prevIndex - getServicesPerPage();
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNextArtists = () => {
    setCurrentArtistIndex((prevIndex) => {
      const newIndex = prevIndex + getServicesPerPage();
      const maxStartIndex = Math.max(0, artists.length - getServicesPerPage());
      return newIndex >= maxStartIndex ? maxStartIndex : newIndex;
    });
  };

  // Get current services to display
  const currentServices = services.slice(
    currentServiceIndex,
    currentServiceIndex + getServicesPerPage()
  );
  // Get current services to display
  const currentArtists = artists.slice(
    currentArtistIndex,
    currentArtistIndex + getServicesPerPage()
  );

  // Check if navigation buttons should be enabled
  const canGoBack = currentServiceIndex > 0;
  const canGoForward = currentServiceIndex + getServicesPerPage() < services.length;
  // Check if navigation buttons should be enabled
  const canGoBackArtist = currentArtistIndex > 0;
  const canGoForwardArtist = currentArtistIndex + getServicesPerPage() < artists.length;


  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };


  const arrayBufferToBase64Artist = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
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

          <div
            className={`left-button ${!canGoBackArtist ? 'disabled' : ''}`}
            onClick={canGoBackArtist ? handlePrevArtists : undefined}
            style={{ opacity: canGoBackArtist ? 1 : 0.5, cursor: canGoBackArtist ? 'pointer' : 'default' }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>

          <div className="service-cards-container">
            {artists.length > 0 ? (
              currentArtists.map((artist) => {
                const base64Image = `data:${artist.headshot.contentType};base64,${arrayBufferToBase64Artist(artist.headshot.data.data)}`;

                return (
                  <div className="home-artist-card" key={artist._id}>
                    <img src={base64Image} alt={artist.name} />
                    <h4>{artist.name}</h4>
                    <p>{artist.city}</p>
                    <div className="artist-cat-s">
                      {artist.categories.length > 0 ? (
                        artist.categories.slice(0, 3).map((category) => ( // Limit to max 3 categories
                          <span key={category._id}>{category.name}</span>
                        ))
                      ) : (
                        <p></p>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Loading artists...</p>
            )}
          </div>

          <div
            className={`right-button ${!canGoForwardArtist ? 'disabled' : ''}`}
            onClick={canGoForwardArtist ? handleNextArtists : undefined}
            style={{ opacity: canGoForwardArtist ? 1 : 0.5, cursor: canGoForwardArtist ? 'pointer' : 'default' }}
          >
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
          <div
            className="left-button"
            onClick={handlePrevTestimonial}
            style={{
              opacity: testimonials.length > 1 ? 1 : 0.5,
              cursor: testimonials.length > 1 ? "pointer" : "default",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          {testimonials.length > 0 ? (
            <div className="artist-tesimonial-card">
              <div className="artist-testimonial">
                <div className="artist-testimonial-img">
                  {testimonials[currentTestimonialIndex]?.photo && (
                    <img
                      src={`data:${testimonials[currentTestimonialIndex]?.photo.contentType};base64,${arrayBufferToBase64Artist(
                        testimonials[currentTestimonialIndex]?.photo.data.data
                      )}`}
                      alt={testimonials[currentTestimonialIndex]?.name}
                      className="testimonial-image"
                    />
                  )}
                </div>
                <div className="artist-testimonial-text">
                  <div className="artist-testimonial-text-card">
                    <p>{testimonials[currentTestimonialIndex]?.name}</p>
                    <p>{testimonials[currentTestimonialIndex]?.category}</p>
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
                {testimonials[currentTestimonialIndex]?.comment}
              </p>

            </div>
          ) : (
            <p>Loading testimonials...</p>
          )}
          <div
            className="left-button"
            onClick={handleNextTestimonial}
            style={{
              opacity: testimonials.length > 1 ? 1 : 0.5,
              cursor: testimonials.length > 1 ? "pointer" : "default",
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
