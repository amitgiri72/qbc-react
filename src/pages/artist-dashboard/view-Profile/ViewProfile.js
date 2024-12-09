import React, { useEffect, useState } from 'react';
import "./ViewProfile.css";
import axios from 'axios';
import Cookies from 'js-cookie';

const ViewProfile = () => {
  const userId = Cookies.get('userId');
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user details
  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/auth/user/${userId}`
      );
      if (response) {
        setUser(response.data.user);
        // If user has categories, fetch their details
        if (response.data.user.category && response.data.user.category[0]) {
          const categoryIds = response.data.user.category[0].split(',');
          fetchCategoryDetails(categoryIds);
        }
      }
    } catch (error) {
      console.error(`Error fetching user details for ${userId}:`, error);
      setLoading(false);
    }
  };

  // Fetch category details for each category ID
  const fetchCategoryDetails = async (categoryIds) => {
    try {
      const categoryPromises = categoryIds.map(id => 
        axios.get(`http://localhost:8080/api/v1/service/single-service/${id.trim()}`)
      );
      
      const categoryResponses = await Promise.all(categoryPromises);
      const categoryData = categoryResponses.map(response => response.data.service);
      setCategories(categoryData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching category details:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails(userId);
  }, []);

  // Convert buffer data to image URL
  const getImageUrl = (imageData) => {
    if (!imageData || !imageData.data) return 'images/default-profile.png';
    const buffer = Buffer.from(imageData.data);
    const base64 = buffer.toString('base64');
    return `data:${imageData.contentType};base64,${base64}`;
  };


  const arrayBufferToBase64 = (buffer) => {
    // Convert the Buffer (Array) to Base64 string
    const binary = String.fromCharCode(...new Uint8Array(buffer));
    return window.btoa(binary);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='artist-view-profile'>
      <div className="artist-viewp-hero">
        <div className="artist-viewp-profile">
          <div className="artist-viewp-profilepic">
            <img 
              src={`data:${user.headshot.contentType};base64,${arrayBufferToBase64(user.headshot.data.data)}`} 
              alt={user?.name || 'Profile'} 
            />
          </div>
          <div className="artist-viewp-profileinfo">
            <h1>{user?.name}</h1>
            <p>{user?.role}</p>
            
            <p>Experience: {user?.experience}</p>
            <p>Styles: {user?.stylesTeach?.join(', ')}</p>
          </div>
        </div>
        <div className="artist-viewp-button">
          <button className='artist-viewp-follow'>View Profile</button>
          <button className='artist-viewp-message'>Edit Profile</button>
        </div>
      </div>

      <div className="artist-view-services">
        <h2 className='artist-view-services-h2'>Services</h2>
        <div className="artist-viewp-service-cards">
          {categories.map((category, index) => (
            <div className="artist-viewp-service-card" key={category._id || index}>
              <img 
                src={`data:${category.photo.contentType};base64,${arrayBufferToBase64(category.photo.data.data)}`} 
                alt={category.name} 
              />
              <h4>{category.name}</h4>
              <p>${category.rate}/hr</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;