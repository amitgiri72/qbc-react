import React, { useEffect, useState } from "react";
import { CheckIcon, XIcon } from "lucide-react";
import axios from "axios";
import "./ArtistForm.css";
import Cookies from "js-cookie";

const ArtistForm = () => {
  const userId = Cookies.get('userId');
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [bio, setBio] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [experience, setExperience] = useState("1 - 3 years");
  const [files, setFiles] = useState({
    headshot: null,
    resume: null,
    reference: null,
    vss: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState([]);
  const [user, setUser] = useState(null);
  const [userCategories, setUserCategories] = useState([]);

  // Fetch category data
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await axios.get('https://qbc-backend.onrender.com/api/v1/service/get-service');
        if (data.success) {
          setCategory(data.service);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchCategory();
  }, []);

  // Fetch category details for user's categories
  const fetchCategoryDetails = async (categoryIds) => {
    try {
      const categoryPromises = categoryIds.map(id =>
        axios.get(`https://qbc-backend.onrender.com/api/v1/service/single-service/${id.trim()}`)
      );
      const categoryResponses = await Promise.all(categoryPromises);
      const categoryData = categoryResponses.map(response => response.data.service);

      // Set the selected reviews based on fetched category data
      const formattedCategories = categoryData.map(cat => ({
        id: cat._id,
        name: cat.name
      }));
      setSelectedReviews(formattedCategories);
      setUserCategories(categoryData);
    } catch (error) {
      console.error('Error fetching category details:', error);
    }
  };

  // Fetch user details and populate form
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://qbc-backend.onrender.com/api/v1/auth/user/${userId}`
        );
        if (response.data.user) {
          const userData = response.data.user;
          setUser(userData);
          // console.log(userData)

          // Set bio
          setBio(userData.bio || "");
          setCity(userData.city || "");
          setStreet(userData.street || "");
          setPostalCode(userData.postalCode || "");
          setCountry(userData.country || "");

          // Set experience
          setExperience(userData.experience || "1 - 3 years");

          // Handle categories
          if (userData.category && userData.category[0]) {
            const categoryIds = userData.category[0].split(',');
            fetchCategoryDetails(categoryIds);
          }

          // Set selected services (styles)
          if (userData.stylesTeach) {
            const styles = userData.stylesTeach[0].split(',');
            setSelectedServices(styles);
          }
        }
      } catch (error) {
        console.error(`Error fetching user details for ${userId}:`, error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const handleReviewSelection = (categoryId, categoryName) => {
    if (selectedReviews.find(review => review.id === categoryId)) {
      setSelectedReviews(selectedReviews.filter(review => review.id !== categoryId));
    } else {
      setSelectedReviews([...selectedReviews, { id: categoryId, name: categoryName }]);
    }
  };

  // Rest of the component remains the same...
  // (Keep all the other functions and JSX exactly as they were in the previous version)

  const handleServiceSelection = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((r) => r !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleFileChange = (e, type) => {
    setFiles({
      ...files,
      [type]: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();

      // Add text fields
      formData.append('category', selectedReviews.map(review => review.id));
      formData.append('stylesTeach', selectedServices);
      formData.append('bio', bio);
      formData.append('street', street);
      formData.append('postalCode',postalCode);
      formData.append('city', city);
      formData.append('country', country);
      formData.append('experience', experience);

      // Add files only if new files are selected
      if (files.headshot) formData.append('headshot', files.headshot);
      if (files.resume) formData.append('resume', files.resume);
      if (files.reference) formData.append('refrenceLetter', files.reference);
      if (files.vss) formData.append('vss', files.vss);

      const response = await axios.post(
        `https://qbc-backend.onrender.com/api/v1/auth/update-user/${userId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("Profile updated successfully!");
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="artist-main-hero">
        <h1>Artist Form</h1>
        <p>Help us get to know you better</p>
      </div>
      <div className="artist-form-main">
        <div className="artist-form-container">
          <h1>Welcome to the Artist Forum</h1>
          <p className="artist-form-container-p">
            Please update your information below or fill out the registration form to join our community.
          </p>
          <form onSubmit={handleSubmit} className="artist-form-div">
            {/* Categories Section */}
            <div>
              <label className="mb-2 artist-label-head">
                1. You would like to earn money as a{" "}
                <span className="artist-form-head-span">(Select one or more)</span>
              </label>
              <div className="artist-form-services">
                {selectedReviews.map((review) => (
                  <div key={review.id} className="artist-form-services-card">
                    <span>{review.name}</span>
                    <button
                      type="button"
                      onClick={() => handleReviewSelection(review.id, review.name)}
                      className="text-white hover:text-gray-200 focus:outline-none"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {category.map((cat) => (
                  <div key={cat._id} className="artistInput">
                    <input
                      type="checkbox"
                      id={cat._id}
                      name={cat.slug}
                      className="form-checkbox h-5 w-5"
                      checked={selectedReviews.some(review => review.id === cat._id)}
                      onChange={() => handleReviewSelection(cat._id, cat.name)}
                    />
                    <label htmlFor={cat._id}>{cat.name}</label>
                  </div>
                ))}
              </div>
            </div>
            {/* Styles Section */}
            <div>
              <label className="mb-2 artist-label-head">
                2. Styles you would like to teach{" "}
                <span className="artist-form-head-span">(Select one or more)</span>
              </label>
              <div className="artist-form-services">
                {selectedServices.map((service) => (
                  <div key={service} className="artist-form-services-card">
                    <span>{service}</span>
                    <button
                      type="button"
                      onClick={() => handleServiceSelection(service)}
                      className="text-white hover:text-gray-200 focus:outline-none"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Ballet", "Ballroom", "Irish", "Jazz", "Swing", "Other"].map((style) => (
                  <div key={style} className="artistInput">
                    <input
                      type="checkbox"
                      id={style.toLowerCase()}
                      name={style.toLowerCase()}
                      className="form-checkbox h-5 w-5"
                      checked={selectedServices.includes(style)}
                      onChange={() => handleServiceSelection(style)}
                    />
                    <label htmlFor={style.toLowerCase()}>{style}</label>
                  </div>
                ))}
              </div>
            </div>


            {/* Experience Section */}
            <div>
              <label className="mb-2 artist-label-head">
                3. How many years of experience you have
              </label>
              <div className="artist-experience-cards">
                {[
                  "Less than 1 year",
                  "1 - 3 years",
                  "3- 5 years",
                  "more than 10 years"
                ].map((exp) => (
                  <div
                    key={exp}
                    className={`artist-experience-card ${experience === exp ? "active" : ""}`}
                    onClick={() => setExperience(exp)}
                  >
                    {exp}
                  </div>
                ))}
              </div>
            </div>

            {/* Bio Section */}
            <div>
              <label htmlFor="bio" className="mb-2 artist-label-head">
                4. Tell us about yourself{" "}
                <span className="artist-form-head-span">(in paragraph)</span>
              </label>
              <textarea
                id="bio"
                name="bio"
                className="w-full artist-form-select"
                placeholder="Hi, I am..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            {/* Address Section */}
            <div>
              <label htmlFor="address" className="mb-2 artist-label-head">
                5. Tell us your address{" "}
                {/* <span className="artist-form-head-span">(in paragraph)</span> */}
              </label>
              {/* <input
                id="street"
                name="street"
                type="text"
                className="w-full artist-form-select"
                placeholder="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                style={{marginBottom:"5px"}}
              /> */}
              {/* <input
                id="postalCode"
                name="postalCode"
                type="text"
                className="w-full artist-form-select"
                placeholder="postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                style={{marginBottom:"5px"}}
              /> */}
              <input
                id="city"
                name="city"
                type="text"
                className="w-full artist-form-select"
                placeholder="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{marginBottom:"5px"}}
              />
              {/* <input
                id="country"
                name="country"
                type="text"
                className="w-full artist-form-select"
                placeholder="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{marginBottom:"5px"}}
              /> */}
            </div>

            {/* File Upload Sections */}
            <div>
              <label htmlFor="headshot" className="mb-2 artist-label-head">
                4. Upload your headshot{" "}
                <span className="artist-form-head-span">(in image)</span>
              </label>
              {user?.headshot && <p className="text-sm text-gray-500 mb-2">Current headshot uploaded</p>}
              <input
                type="file"
                id="headshot"
                name="headshot"
                accept="image/*"
                className="w-full artist-form-select"
                onChange={(e) => handleFileChange(e, 'headshot')}
              />
            </div>

            <div>
              <label htmlFor="resume" className="mb-2 artist-label-head">
                5. Upload your resume{" "}
                <span className="artist-form-head-span">(in pdf)</span>
              </label>
              {user?.resume && <p className="text-sm text-gray-500 mb-2">Current resume uploaded</p>}
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                className="w-full artist-form-select"
                onChange={(e) => handleFileChange(e, 'resume')}
              />
            </div>

            <div>
              <label htmlFor="reference" className="mb-2 artist-label-head">
                6. Upload two reference letters{" "}
                <span className="artist-form-head-span">
                  (both letter in one file (in pdf))
                </span>
              </label>
              {user?.refrenceLetter && <p className="text-sm text-gray-500 mb-2">Current reference letters uploaded</p>}
              <input
                type="file"
                id="reference"
                name="reference"
                accept=".pdf"
                className="w-full artist-form-select"
                onChange={(e) => handleFileChange(e, 'reference')}
              />
            </div>

            <div>
              <label htmlFor="vss" className="mb-2 artist-label-head">
                7. Upload your Vulnerable Sector Screening (VSS){" "}
                <span className="artist-form-head-span">(in pdf, optional)</span>
              </label>
              {user?.vss && <p className="text-sm text-gray-500 mb-2">Current VSS uploaded</p>}
              <input
                type="file"
                id="vss"
                name="vss"
                accept=".pdf"
                className="w-full artist-form-select"
                onChange={(e) => handleFileChange(e, 'vss')}
              />
            </div>

            {/* Experience Section
            <div>
              <label className="mb-2 artist-label-head">
                8. How many years of experience you have
              </label>
              <div className="artist-experience-cards">
                {[
                  "Less than 1 year",
                  "1 - 3 years",
                  "3- 5 years",
                  "more than 10 years"
                ].map((exp) => (
                  <div
                    key={exp}
                    className={`artist-experience-card ${experience === exp ? "active" : ""}`}
                    onClick={() => setExperience(exp)}
                  >
                    {exp}
                  </div>
                ))}
              </div>
            </div> */}

            {error && <div className="text-red-500 mt-4">{error}</div>}

            <button
              type="submit"
              className="artist-form-button"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ArtistForm;