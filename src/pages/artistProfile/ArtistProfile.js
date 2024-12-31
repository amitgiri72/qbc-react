import React, { useEffect, useState } from "react";
import "./ArtistProfile.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArtistProfile = () => {
  const userId = Cookies.get("userId");
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [style, setStyle] = useState([]);
  const [activeModal, setActiveModal] = useState(null); // To track active modal
  const navigate = useNavigate();

  // Fetch user details
  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(
        `https://qbc-backend.onrender.com/api/v1/auth/user/${userId}`
      );
      if (response) {
        setUser(response.data.user);
        if (response.data.user.category && response.data.user.category[0]) {
          const categoryIds = response.data.user.category[0].split(",");
          fetchCategoryDetails(categoryIds);
        }
        if (response.data.user.stylesTeach) {
          const styles = response.data.user.stylesTeach[0].split(",");
          setStyle(styles);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching user details for ${userId}:`, error);
      setLoading(false);
    }
  };

  const fetchCategoryDetails = async (categoryIds) => {
    try {
      const categoryPromises = categoryIds.map((id) =>
        axios.get(`https://qbc-backend.onrender.com/api/v1/service/single-service/${id.trim()}`)
      );
      const categoryResponses = await Promise.all(categoryPromises);
      const categoryData = categoryResponses.map((response) => response.data.service);
      setCategories(categoryData);
    } catch (error) {
      console.error("Error fetching category details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails(userId);
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    const binary = String.fromCharCode(...new Uint8Array(buffer));
    return window.btoa(binary);
  };

  const closeModal = () => setActiveModal(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="artist-profile-main">
      <div className="artist-profile">
        <h3>Artist Profile</h3>
      </div>
      <div className="artist-container">
        <div className="artist-top">
          <div className="artist-image">
            {user.headshot && (
              <img
                src={`data:${user.headshot.contentType};base64,${arrayBufferToBase64(user.headshot.data.data)}`}
                alt="artist headshot"
              />
            )}
          </div>
          <div className="artist-content">
            <div className="acs">
              <h6>Name</h6>
              <div className="content-s">{user.name}</div>
            </div>
            <div className="acs">
              <h6>Style</h6>
              <div className="content-s">
                {style.map((st, index) => (
                  <div className="pspan" key={index}>
                    {st}
                  </div>
                ))}
              </div>
            </div>
            <div className="acs">
              <h6>Services</h6>
              <div className="content-s">
                {categories.map((category, index) => (
                  <div className="pspan" key={category._id || index}>
                    {category.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="artist-bottom">
          <h6>Bio</h6>
          <div className="content-sb">
            <p>{user.bio}</p>
          </div>
          <div className="abr">
            <div className="abrs">
              <h6>Resume</h6>
              <div className="content-s">
                {user.resume ? (
                  <>
                    <div className="pspan" onClick={() => setActiveModal("resume")}>
                      View Resume
                    </div>
                    <a
                      href={`data:${user.resume.contentType};base64,${arrayBufferToBase64(
                        user.resume.data.data
                      )}`}
                      download="resume.pdf"
                    >
                      <div className="pspani">
                        <img src="images/download.png" alt="Download Icon" />
                      </div>
                    </a>
                  </>
                ) : (
                  <div className="pspan">No resume available</div>
                )}
              </div>
            </div>
            <div className="abrs">
              <h6>Headshot</h6>
              <div className="content-s">
                {user.headshot ? (
                  <>
                    <div className="pspan" onClick={() => setActiveModal("headshot")}>
                      View Headshot
                    </div>
                    <a
                      href={`data:${user.headshot.contentType};base64,${arrayBufferToBase64(
                        user.headshot.data.data
                      )}`}
                      download="headshot.jpg"
                    >
                      <div className="pspani">
                        <img src="images/download.png" alt="Download Icon" />
                      </div>
                    </a>
                  </>
                ) : (
                  <div className="pspan">No headshot available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            {activeModal === "resume" && (
              <iframe
                src={`data:${user.resume.contentType};base64,${arrayBufferToBase64(
                  user.resume.data.data
                )}`}
                title="Resume"
                className="modal-frame"
              />
            )}
            {activeModal === "headshot" && (
              <img
                src={`data:${user.headshot.contentType};base64,${arrayBufferToBase64(
                  user.headshot.data.data
                )}`}
                alt="Headshot"
                className="modal-image"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistProfile;
