import React, { useEffect, useState } from 'react'
import "./ConfirmedJobs.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



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

const ConfirmedJobs = () => {

  const [activeTab, setActiveTab] = useState('jobOffer');

  const [jobs, setJobs] = useState([]);
  const [requestJobs, setRequestJobs] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Fetch jobs data on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/job/bookings?hasBookings=true');
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  // Fetch jobs data on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/job/bookings?hasBookings=false');
        setRequestJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  function formatTime(time24) {
    const [hour, minute] = time24.split(':').map(Number);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
  }



  const navigatePage = async (id) => {
    navigate(`/confirm-booking/${id}`)
  }
  const navigateCreateJobPage = async () => {
    navigate(`/create-job`)
  }




  // Function to render job cards
  const renderJobCards = (jobs) => {
    return jobs.map((job) => (
      <div className="artist-dash-card" key={job.id}  onClick={()=>navigatePage(job._id)}>
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
          <h4>{job.rate}$/hr</h4>
        </div>
      </div>
    ));
  };

  return (
    <div className='confirmed-jobs'>
      <div className="artistdjobpannel">
        <div className="create-new-job">
          <button onClick={()=>navigateCreateJobPage()}>+ Create New</button>
        </div>
        <div className="client-pannel-tabs">
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
          {activeTab === 'jobOffer' ? renderJobCards(jobs) : renderJobCards(requestJobs)}
        </div>
      </div>
    </div>
  )
}

export default ConfirmedJobs