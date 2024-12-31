import React, { useEffect, useState } from 'react'
import "./BookingRequest.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
  
  

const BookingRequest = () => {
    const jobId = useParams().id;
    const [jobOffer, setJobOffer] = useState([]);


    const handleGetJob = async () => {
        try {
          const response = await axios.get(
            `https://qbc-backend.onrender.com/api/v1/job/job-detail/${jobId}`
          );
          if (response) {
            setJobOffer(response.data.job);
            
            
            
            
          }
        } catch (error) {
          console.error("Error fetching job details:", error);
          
        }
      };
    
      useEffect(() => {
        handleGetJob();
      }, []);
    return (
        <div className='client-booking-request'>
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
                    <div className="booking-price">
                        <h4>45$ /hr</h4>
                    </div>
                    <div className="job-offer-location">
                    <h3>
              Location: <span>{jobOffer.city}</span>
            </h3>
            <p>{jobOffer.address}</p>
                    </div>

                    <div className="job-offer-info-details">
                        <h3>Details</h3>
                        <h3>Details</h3>
            <h5>
              Dates: <span>{jobOffer.startDate && new Date(jobOffer.startDate).toDateString()} - {jobOffer.endDate && new Date(jobOffer.endDate).toDateString()}</span>
            </h5>
            <h5>
              Time: <span>{jobOffer.from && formatTime(jobOffer.from)} - {jobOffer.to && formatTime(jobOffer.to)}</span>
            </h5>

            <p>
              {jobOffer.description}
            </p>
                    </div>

                    <div className="booking-artist-info">
                        <h3>Artist:</h3>

                    </div>
                    <div className="job-offer-button">
                        <button>Invoice Details</button>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default BookingRequest