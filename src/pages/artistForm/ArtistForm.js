import React, { useState } from "react";
import { CheckIcon, XIcon } from "lucide-react";
import "./ArtistForm.css";
const ArtistForum = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

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

  return (
    <>
     <div className="artist-main-hero">
        <h1>Artist Form</h1>
        <p>Help us got to know you better</p>
     </div>
    <div className="artist-form-main">
     
      <div className="artist-form-container">
        <h1 className="">Welcome to the Artist Forum</h1>
        <p className="artist-form-container-p">
          Please fill out the registration form below to join our community of
          talented dance artists.
        </p>
        <div className="artist-form-div">
          <div>
            <label className="mb-2 artist-label-head">
              1. You would like to earn money as a{" "}
              <span className="artist-form-head-span">
                (Select one or more)
              </span>
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
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="critique"
                  name="critique"
                  className="form-checkbox h-5 w-5"
                  checked={selectedReviews.includes("Critique")}
                  onChange={() => handleReviewSelection("Critique")}
                />
                <label htmlFor="critique" className="">
                  Critique
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="competition-commentary"
                  name="competition-commentary"
                  className="form-checkbox h-5 w-5 "
                  checked={selectedReviews.includes("Competition/Commentary")}
                  onChange={() =>
                    handleReviewSelection("Competition/Commentary")
                  }
                />
                <label
                  htmlFor="competition-commentary"
                  className=""
                >
                  Competition/Commentary
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="event-choreography"
                  name="event-choreography"
                  className="form-checkbox h-5 w-5"
                  checked={selectedReviews.includes("Event Choreography")}
                  onChange={() => handleReviewSelection("Event Choreography")}
                />
                <label htmlFor="event-choreography" className="">
                  Event Choreography
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="master-classes"
                  name="master-classes"
                  className="form-checkbox h-5 w-5"
                  checked={selectedReviews.includes("Master Classes")}
                  onChange={() => handleReviewSelection("Master Classes")}
                />
                <label htmlFor="master-classes" className="">
                  Master Classes
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="private-classes"
                  name="private-classes"
                  className="form-checkbox h-5 w-5"
                  checked={selectedReviews.includes("Private Classes")}
                  onChange={() => handleReviewSelection("Private Classes")}
                />
                <label htmlFor="private-classes" className="">
                  Private Classes
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="voice-coach"
                  name="voice-coach"
                  className="form-checkbox h-5 w-5"
                  checked={selectedReviews.includes("Voice Coach")}
                  onChange={() => handleReviewSelection("Voice Coach")}
                />
                <label htmlFor="voice-coach" className="">
                  Voice Coach
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 artist-label-head">
              2. Services you would like to offer also add your base rate for
              each{" "}
              <span className="artist-form-head-span">
                (Select one or more)
              </span>
            </label>
            <div className="artist-form-services">
              {selectedServices.map((service) => (
                <div
                  key={service}
                  className="artist-form-services-card"
                >
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
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="critique"
                  name="critique"
                  className="form-checkbox h-5 w-5"
                  checked={selectedServices.includes("Critique")}
                  onChange={() => handleServiceSelection("Critique")}
                />
                <label htmlFor="critique" className="">
                  Critique
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="competition-commentary"
                  name="competition-commentary"
                  className="form-checkbox h-5 w-5"
                  checked={selectedServices.includes("Competition/Commentary")}
                  onChange={() =>
                    handleServiceSelection("Competition/Commentary")
                  }
                />
                <label
                  htmlFor="competition-commentary"
                  className=""
                >
                  Competition/Commentary
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="event-choreography"
                  name="event-choreography"
                  className="form-checkbox h-5 w-5 "
                  checked={selectedServices.includes("Event Choreography")}
                  onChange={() => handleServiceSelection("Event Choreography")}
                />
                <label htmlFor="event-choreography" className="">
                  Event Choreography
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="master-classes"
                  name="master-classes"
                  className="form-checkbox h-5 w-5 "
                  checked={selectedServices.includes("Master Classes")}
                  onChange={() => handleServiceSelection("Master Classes")}
                />
                <label htmlFor="master-classes" className="">
                  Master Classes
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="private-classes"
                  name="private-classes"
                  className="form-checkbox h-5 w-5"
                  checked={selectedServices.includes("Private Classes")}
                  onChange={() => handleServiceSelection("Private Classes")}
                />
                <label htmlFor="private-classes" className="">
                  Private Classes
                </label>
              </div>
              <div className=" artistInput">
                <input
                  type="checkbox"
                  id="voice-coach"
                  name="voice-coach"
                  className="form-checkbox h-5 w-5"
                  checked={selectedServices.includes("Voice Coach")}
                  onChange={() => handleServiceSelection("Voice Coach")}
                />
                <label htmlFor="voice-coach" className="">
                  Voice Coach
                </label>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="discipline"
              className="mb-2 artist-label-head"
            >
              3. Styles you would like to teach{" "}
              <span className="artist-form-head-span">
                (Select one or more){" "}
              </span>
            </label>
            <select
              id="discipline"
              name="discipline"
              className="w-full artist-form-select"
            >
              <option value="">Select--</option>
              <option value="painting">Painting</option>
              <option value="photography">Photography</option>
              <option value="dance">Dance</option>
              <option value="videographer">Videographer</option>
              <option value="acting-coach">Acting Coach</option>
              <option value="voice-coach">Voice Coach</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="website"
              className="mb-2 artist-label-head"
            >
              4. Drop your portfolio or resume link here
            </label>
            <input
              type="text"
              id="website"
              name="website"
              className="w-full artist-form-select"
              placeholder="Enter link here"
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="mb-2 artist-label-head"
            >
              5. How many years of experience you have
            </label>

            <div className="artist-experience-cards">
                  <div className="artist-experience-card">Less than 1 year</div>
                  <div className="artist-experience-card active">1 - 3 years</div>
                  <div className="artist-experience-card">3- 5 years</div>
                  <div className="artist-experience-card">more than 10 years</div>
            </div>
          </div>
          <button
            type="submit"
            className="artist-form-button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ArtistForum;
