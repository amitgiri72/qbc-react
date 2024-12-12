import React, { useEffect, useState } from 'react';
import "./Artist.css";
import Navbar from '../../componnents/Navbar/Navbar1/Navbar';
import axios from 'axios';

const Artist = () => {
  const [artists, setArtists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const artistsPerPage = 8; // Number of artists to display per page

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
          setTotalPages(Math.ceil(artistsWithCategories.length / artistsPerPage)); // Calculate total pages
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
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedArtists = artists.slice(
    (currentPage - 1) * artistsPerPage,
    currentPage * artistsPerPage
  );

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <div className='artist-main'>
      <Navbar />
      <div className="artist">
        <h3>Artist Profile</h3>
      </div>

      <div className="a-cards">
        {displayedArtists.length > 0 ? (
          displayedArtists.map((artist) => {
            const base64Image = `data:${artist.headshot.contentType};base64,${arrayBufferToBase64(artist.headshot.data.data)}`;
            return (
              <div className="a-card" key={artist._id}>
                <img src={base64Image} alt={`${artist.name} headshot`} />
                <h4>{artist.name}</h4>
                <p>{artist.city}</p>
                <div className="artist-cat-s">
                  {artist.categories.length > 0 ? (
                    artist.categories.slice(0, 3).map((category) => ( // Limit to max 3 categories
                      <span key={category._id}>{category.name}</span>
                    ))
                  ) : (
                    <p>No categories available</p>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading artists...</p>
        )}
      </div>

      <div className="pagination">
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default Artist;
