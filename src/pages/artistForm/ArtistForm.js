import React, { useState } from "react";
import { CheckIcon, XIcon } from "lucide-react";
import axios from "axios";
import "./ArtistForm.css";

const ArtistForm = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("1 - 3 years");
  const [files, setFiles] = useState({
    headshot: null,
    resume: null,
    reference: null,
    vss: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");



  const checkAuth = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/verify-token', {
        withCredentials: true
      });
      if(response){
      setUserId(response.data.user._id);}
    } catch (error) {
      console.log(error);
    }
  };


  const handleReviewSelection = (review) => {
    if (selectedReviews.includes(review)) {
      setSelectedReviews(selectedReviews.filter((r) => r !== review));
    } else {
      setSelectedReviews([...selectedReviews, review]);
    }
  };



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
    checkAuth();
    try {
      const formData = new FormData();
      
      // Add text fields
      formData.append('role', selectedReviews);
      formData.append('stylesTeach', selectedServices);
      formData.append('bio', bio);
      formData.append('experience', experience);

      // Add files
      if (files.headshot) formData.append('headshot', files.headshot);
      if (files.resume) formData.append('resume', files.resume);
      if (files.reference) formData.append('reference', files.reference);
      if (files.vss) formData.append('vss', files.vss);

      
      

      const response = await axios.post(
        `http://localhost:8080/api/v1/auth/update-user/${userId}`,
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
          <h1 className="">Welcome to the Artist Forum</h1>
          <p className="artist-form-container-p">
            Please fill out the registration form below to join our community of
            talented dance artists.
          </p>
          <form onSubmit={handleSubmit} className="artist-form-div">
            <div>
              <label className="mb-2 artist-label-head">
                1. You would like to earn money as a{" "}
                <span className="artist-form-head-span">(Select one or more)</span>
              </label>
              <div className="artist-form-services">
                {selectedReviews.map((review) => (
                  <div key={review} className="artist-form-services-card">
                    <span>{review}</span>
                    <button
                      type="button"
                      onClick={() => handleReviewSelection(review)}
                      className="text-white hover:text-gray-200 focus:outline-none"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="dance-educator"
                    name="dance-educator"
                    className="form-checkbox h-5 w-5"
                    checked={selectedReviews.includes("Dance Educator")}
                    onChange={() => handleReviewSelection("Dance Educator")}
                  />
                  <label htmlFor="dance-educator">Dance Educator</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="adjudicator"
                    name="adjudicator"
                    className="form-checkbox h-5 w-5"
                    checked={selectedReviews.includes("Adjudicator")}
                    onChange={() => handleReviewSelection("Adjudicator")}
                  />
                  <label htmlFor="adjudicator">Adjudicator</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="emcee"
                    name="emcee"
                    className="form-checkbox h-5 w-5"
                    checked={selectedReviews.includes("Emcee")}
                    onChange={() => handleReviewSelection("Emcee")}
                  />
                  <label htmlFor="emcee">Emcee</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="brand-ambassador"
                    name="brand-ambassador"
                    className="form-checkbox h-5 w-5"
                    checked={selectedReviews.includes("Brand Ambassador")}
                    onChange={() => handleReviewSelection("Brand Ambassador")}
                  />
                  <label htmlFor="brand-ambassador">Brand Ambassador</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="choreographer"
                    name="choreographer"
                    className="form-checkbox h-5 w-5"
                    checked={selectedReviews.includes("Choreographer")}
                    onChange={() => handleReviewSelection("Choreographer")}
                  />
                  <label htmlFor="choreographer">Choreographer</label>
                </div>
              </div>
            </div>

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
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="ballet"
                    name="ballet"
                    className="form-checkbox h-5 w-5"
                    checked={selectedServices.includes("Ballet")}
                    onChange={() => handleServiceSelection("Ballet")}
                  />
                  <label htmlFor="ballet">Ballet</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="ballroom"
                    name="ballroom"
                    className="form-checkbox h-5 w-5"
                    checked={selectedServices.includes("Ballroom")}
                    onChange={() => handleServiceSelection("Ballroom")}
                  />
                  <label htmlFor="ballroom">Ballroom</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="irish"
                    name="irish"
                    className="form-checkbox h-5 w-5"
                    checked={selectedServices.includes("Irish")}
                    onChange={() => handleServiceSelection("Irish")}
                  />
                  <label htmlFor="irish">Irish</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="jazz"
                    name="jazz"
                    className="form-checkbox h-5 w-5"
                    checked={selectedServices.includes("Jazz")}
                    onChange={() => handleServiceSelection("Jazz")}
                  />
                  <label htmlFor="jazz">Jazz</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="swing"
                    name="swing"
                    className="form-checkbox h-5 w-5"
                    checked={selectedServices.includes("Swing")}
                    onChange={() => handleServiceSelection("Swing")}
                  />
                  <label htmlFor="swing">Swing</label>
                </div>
                <div className="artistInput">
                  <input
                    type="checkbox"
                    id="other"
                    name="other"
                    className="form-checkbox h-5 w-5"
                    checked={selectedServices.includes("Other")}
                    onChange={() => handleServiceSelection("Other")}
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="bio" className="mb-2 artist-label-head">
                3. Tell us about yourself{" "}
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

            <div>
              <label htmlFor="headshot" className="mb-2 artist-label-head">
                4. Upload your headshot{" "}
                <span className="artist-form-head-span">(in image)</span>
              </label>
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
                <span className="artist-form-head-span">(in pdf)</span>
              </label>
              <input
                type="file"
                id="vss"
                name="vss"
                accept=".pdf"
                className="w-full artist-form-select"
                onChange={(e) => handleFileChange(e, 'vss')}
              />
            </div>

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
                    className={`artist-experience-card ${
                      experience === exp ? "active" : ""
                    }`}
                    onClick={() => setExperience(exp)}
                  >
                    {exp}
                  </div>
                ))}
              </div>
            </div>

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