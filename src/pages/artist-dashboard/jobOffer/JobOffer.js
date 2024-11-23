import React from "react";
import "./JobOffer.css";
const JobOffer = () => {
  return (
    <div className="job-offer">
     
      <div className="job-offer-info">
        <div className="job-offer-head">
          <div className="job-offer-head-c">
            <h2>Job Title</h2>
            <p>Job Description</p>
          </div>
          <div className="job-offer-head-time">
            <p>2 Days ago</p>
          </div>
        </div>
        <div className="job-offer-location">
          <h3>
            Location: <span>Florida</span>
          </h3>
          <p>Creature Space 1234 Dance Lane Orlando, FL 32801</p>
        </div>

        <div className="job-offer-info-details">
          <h3>Details</h3>
          <h5>
            Dates: <span>1st march 2024</span>
          </h5>
          <h5>
            Time: <span>10 pm</span>
          </h5>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            repudiandae possimus earum nesciunt. Atque accusamus perspiciatis
            perferendis consectetur nihil exercitationem, ex ut!
          </p>
        </div>

        <div className="job-offer-additional">
            <h3>Additional Information</h3>
            <textarea 
            placeholder="Enter some additional info you would like to add"/>
        </div>
        <div className="job-offer-button">
            <button>Confirm</button>
        </div>
      </div>
      {/* </div> */}
    </div>
    
  );
};

export default JobOffer;
