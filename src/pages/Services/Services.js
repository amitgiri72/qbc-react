import React, { useEffect, useState } from 'react';
import "./Services.css";
import Navbar from '../../componnents/Navbar/Navbar1/Navbar';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  // Fetch services data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/v1/service/get-service'); // Adjust API endpoint as needed
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
    // Convert the Buffer (Array) to Base64 string
    const binary = String.fromCharCode(...new Uint8Array(buffer));
    return window.btoa(binary);
  };

  return (
    <div className='services-main'>
      <Navbar />
      <div className="services">
        <h3>For Clients</h3>
        <p>
          We are passionate about providing a space where food enthusiasts from all walks of life can come together to inspire and be inspired. 
          Whether you're a seasoned chef or a home cook, our platform is designed to make sharing your culinary creations easy and enjoyable.
        </p>
      </div>

      <div className="cards">
        {services.length > 0 ? (
          services.map((service) => {
            // Convert Buffer data to Base64 string
            const base64Image = `data:${service.photo.contentType};base64,${arrayBufferToBase64(service.photo.data.data)}`;

            return (
              <div className="card" key={service._id}>
                <img src={base64Image} alt={service.name} />
                <h4>{service.name}</h4>
              </div>
            );
          })
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </div>
  );
};

export default Services;
