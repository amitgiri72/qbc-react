import React, { useEffect, useState } from "react";
import "./JobOffer.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

const getRelativeTime = (date) => {
  const currentDate = new Date();
  const jobDate = new Date(date);
  const differenceInMilliseconds = currentDate - jobDate;

  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return `Just now`;
};


function formatTime(time24) {
  const [hour, minute] = time24.split(':').map(Number); // Split and convert to numbers
  const ampm = hour >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  const hour12 = hour % 12 || 12; // Convert to 12-hour format, ensuring 12:00 is handled correctly
  return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
}


const JobOffer = () => {
  const jobId = useParams().id;
  const userId = Cookies.get('userId'); 
  console.log("user",userId)

  const [jobOffer, setJobOffer] = useState([]);
  const [notes, setNotes] = useState("");

  const handleGetJob = async () => {
    try {
      const response = await axios.get(
        `https://qbc-backend.onrender.com/api/v1/job/job-detail/${jobId}`
      );
      if (response) {
        setJobOffer(response.data.job);
        console.log(response.data.job);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleConfirmJob = async () => {
    try {
      const response = await axios.post(
        `https://qbc-backend.onrender.com/api/v1/job/users/${jobId}`,{userId,notes}
      );
      if (response) {
        toast.success("Job applied successfully")
      }
      else{
        toast.error("error, apply again")
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetJob();


  }, []);


  console.log("jobId", jobId);

  return (
    <div className="job-offer">
      <div className="job-offer-info">
        <div className="job-offer-head">
          <div className="job-offer-head-c">
            <h2>{jobOffer.studioName}</h2>
            <p>{jobOffer.style}</p>
          </div>
          <div className="job-offer-head-time">
            <p>{jobOffer.createdAt && getRelativeTime(jobOffer.createdAt)}</p>
          </div>
        </div>
        <div className="job-offer-location">
          <h3>
            Location: <span>{jobOffer.city}</span>
          </h3>
          <p>{jobOffer.address}</p>
        </div>

        <div className="job-offer-info-details">
          <h3>Details</h3>
          <h5>
            Date/s: <span>{jobOffer.startDate && new Date(jobOffer.startDate).toDateString()} - {jobOffer.endDate && new Date(jobOffer.endDate).toDateString()}</span>
          </h5>
          <h5>
            Time: <span>{jobOffer.from && formatTime(jobOffer.from)} - {jobOffer.to && formatTime(jobOffer.to)}</span>
          </h5>

          <p>
            {jobOffer.description}
          </p>
        </div>

        <div className="job-offer-additional">
          <h3>Additional Information</h3>
          <textarea placeholder="Anything else you would like us to know" value={notes}
            onChange={(e) => setNotes(e.target.value)} />
        </div>
        <div className="job-offer-button">
          <button onClick={ ()=>handleConfirmJob()}>Confirm</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default JobOffer;
