import React, { useEffect, useState } from 'react';
import "./ArtistDJobs.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



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

const ArtistDJobs = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('jobOffer');



  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  
 
  // Fetch jobs data on component mount
  useEffect(() => {
      const fetchJobs = async () => {
          try {
              const response = await axios.get('http://localhost:8080/api/v1/job/get-jobs');
              setJobs(response.data.jobs); // Assuming the API response contains an array of jobs
          } catch (error) {
              console.error("Error fetching jobs:", error);
          } 
      };
      fetchJobs();
  }, []);

  function formatTime(time24) {
      const [hour, minute] = time24.split(':').map(Number); // Split and convert to numbers
      const ampm = hour >= 12 ? 'PM' : 'AM'; // Determine AM or PM
      const hour12 = hour % 12 || 12; // Convert to 12-hour format, ensuring 12:00 is handled correctly
      return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
  }
  

  const navigatePage = async (id)=>{
      navigate(`/job-offer/${id}`)
  }







  // Sample data for job offers
  const jobOffers = [
    {
      id: 1,
      company: "Creator Space",
      position: "Substitute Teacher",
      location: "Florida US",
      postedDays: 2,
      date: "1st March 2024",
      time: "10 am - 5pm",
      day: "Friday",
      hourlyRate: 45
    },
    {
      id: 2,
      company: "Art Studio",
      position: "Art Instructor",
      location: "Miami US",
      postedDays: 1,
      date: "3rd March 2024",
      time: "2 pm - 8pm",
      day: "Sunday",
      hourlyRate: 50
    },
    {
      id: 3,
      company: "Dance Academy",
      position: "Dance Teacher",
      location: "Orlando US",
      postedDays: 3,
      date: "5th March 2024",
      time: "9 am - 3pm",
      day: "Tuesday",
      hourlyRate: 40
    }
  ];

  // Sample data for confirmed jobs
  const confirmedJobs = [
    {
      id: 1,
      company: "Music School",
      position: "Piano Teacher",
      location: "Tampa US",
      postedDays: 1,
      date: "2nd March 2024",
      time: "1 pm - 6pm",
      day: "Saturday",
      hourlyRate: 55
    },
    {
      id: 2,
      company: "Youth Center",
      position: "Art Mentor",
      location: "Jacksonville US",
      postedDays: 2,
      date: "4th March 2024",
      time: "3 pm - 7pm",
      day: "Monday",
      hourlyRate: 48
    }
  ];

  // Function to render job cards
  const renderJobCards = (jobs) => {
    return jobs.map((job) => (
      <div className="artist-dash-card" key={job.id} onClick={()=>navigatePage(job._id)}>
        <div className="artist-dash-card-1">
          <h4>{job.studioName}</h4>
          <p>{job.style}</p>
          <span>{job.city}, {job.createdAt && getRelativeTime(job.createdAt)}</span>
        </div>
        <div className="artist-dash-card-2">
          <h4>{job.startDate && new Date(job.startDate).toDateString()}</h4>
          <p>{formatTime(job.from)} - {formatTime(job.to)}</p>
          <span>{new Date(job.startDate).toLocaleString('en-US', { weekday: 'long' })}</span>
        </div>
        <div className="artist-dash-card-3">
          <h4>${job.rate}/hr</h4>
        </div>
      </div>
    ));
  };

  return (
    <div className='artistdjobs'>
      <div className="artistdjobpannel">
        <div className="artist-pannel-tabs">
          <div 
            className={`artist-pannel-tab ${activeTab === 'jobOffer' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobOffer')}
          >
            <p>Jobs Offer</p>
          </div>
          <div 
            className={`artist-pannel-tab ${activeTab === 'confirmedJobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('confirmedJobs')}
          >
            <p>Confirmed Jobs</p>
          </div>
        </div>
        <div className="artist-dash-b-right">
          {activeTab === 'jobOffer' ? renderJobCards(jobs) : renderJobCards(jobs)}
        </div>
      </div>
    </div>
  );
};

export default ArtistDJobs;