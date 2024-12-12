import React, { useEffect, useState } from 'react'
import "./Artist.css"
import Navbar from '../../componnents/Navbar/Navbar1/Navbar'
import axios from 'axios';
const Artist = () => {

  const [artists, setArtist] = useState([]);

  // Fetch services data
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/v1/artist/get-all'); // Adjust API endpoint as needed
        if (data.success) {
          setArtist(data.artists);
          console.log(data.artists)
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchArtists();
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    // Convert the Buffer (Array) to Base64 string
    const binary = String.fromCharCode(...new Uint8Array(buffer));
    return window.btoa(binary);
  };



  return (
    <div className='artist-main'>
      <Navbar />
      <div className="artist">
        <h3>Artist Profile</h3>
      </div>

      <div className="a-cards">
        {artists.length > 0 ? (
          artists.map((artist) => {
            // Convert Buffer data to Base64 string
            // const base64Image = `data:${artist.headshot.contentType};base64,${arrayBufferToBase64(artist.headshot.data.data)}`;

            return (
              <div className="a-card">
                <img src='images/se3.png' alt='img' />
                <h4>{artist.name}</h4>
                <p>{artist.city}</p>
                <span>tag</span>
              </div>
            );
          })
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </div>
  )
}

export default Artist