import React, { useState } from 'react'
import "./ConfirmedJobs.css"
const ConfirmedJobs = () => {

    const [activeTab, setActiveTab] = useState('jobOffer');

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
        <div className="artist-dash-card" key={job.id}>
          <div className="artist-dash-card-1">
            <h4>{job.company}</h4>
            <p>{job.position}</p>
            <span>{job.location}, {job.postedDays} days ago</span>
          </div>
          <div className="artist-dash-card-2">
            <h4>{job.date}</h4>
            <p>{job.time}</p>
            <span>{job.day}</span>
          </div>
          <div className="artist-dash-card-3">
            <h4>${job.hourlyRate}/hr</h4>
          </div>
        </div>
      ));
    };
  
  return (
    <div className='confirmed-jobs'>
        <div className="artistdjobpannel">
            <div className="create-new-job">
                <button>+ Create New</button>
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
          {activeTab === 'jobOffer' ? renderJobCards(jobOffers) : renderJobCards(confirmedJobs)}
        </div>
      </div>
    </div>
  )
}

export default ConfirmedJobs