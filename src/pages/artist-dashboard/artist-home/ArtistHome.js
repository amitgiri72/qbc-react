// import React from 'react'
// import "./ArtistHome.css"

// const ArtistHome = () => {
//     return (
//         <div className='artist-dash-h'>
//             <div className="artist-dash-hero">
//                 <h1>Hello Indiana Mehta</h1>
//                 <div className="dhs">
//                     <span>View Profile</span>
//                 </div>
//             </div>

//             <div className="artist-dash-b">
//                 <h3>Job for you <span className='artist-dash-b-job'>3</span></h3>
//                 {/* <div className="artist-dash-b-left"></div> */}
//                 <div className="artist-dash-b-right">
//                     <div className="artist-dash-card">
//                         <div className="artist-dash-card-1"><h4>Creater Space</h4>
//                             <p>Subsitute Teacher</p>
//                             <span>Florida US, 2 days ago</span>
//                         </div>
//                         <div className="artist-dash-card-2"><h4>1st march 2024</h4>
//                             <p>10 am -  5pm</p>
//                             <span>Friday</span></div>
//                         <div className="artist-dash-card-3">
//                             <h4>45$/hr</h4>
//                         </div>
//                     </div>
//                     <div className="artist-dash-card">
//                         <div className="artist-dash-card-1"><h4>Creater Space</h4>
//                             <p>Subsitute Teacher</p>
//                             <span>Florida US, 2 days ago</span>
//                         </div>
//                         <div className="artist-dash-card-2"><h4>1st march 2024</h4>
//                             <p>10 am -  5pm</p>
//                             <span>Friday</span></div>
//                         <div className="artist-dash-card-3">
//                             <h4>45$/hr</h4>
//                         </div>
//                     </div>
//                     <div className="artist-dash-card">
//                         <div className="artist-dash-card-1"><h4>Creater Space</h4>
//                             <p>Subsitute Teacher</p>
//                             <span>Florida US, 2 days ago</span>
//                         </div>
//                         <div className="artist-dash-card-2"><h4>1st march 2024</h4>
//                             <p>10 am -  5pm</p>
//                             <span>Friday</span></div>
//                         <div className="artist-dash-card-3">
//                             <h4>45$/hr</h4>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default ArtistHome





import React, { useState, useEffect } from 'react';
import "./ArtistHome.css";
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


const ArtistHome = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch jobs data on component mount
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/job/get-jobs');
                setJobs(response.data.jobs); // Assuming the API response contains an array of jobs
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className='artist-dash-h'>
            <div className="artist-dash-hero">
                <h1>Hello Indiana Mehta</h1>
                <div className="dhs">
                    <span>View Profile</span>
                </div>
            </div>

            <div className="artist-dash-b">
                <h3>Job for you <span className='artist-dash-b-job'>{jobs.length}</span></h3>
                <div className="artist-dash-b-right">
                    {loading ? (
                        <p>Loading jobs...</p>
                    ) : jobs.length > 0 ? (
                        jobs.map((job, index) => (
                            <div key={index} className="artist-dash-card">
                                <div className="artist-dash-card-1">
                                    <h4>{job.studioName}</h4>
                                    <p>{job.style}</p>
                                    <span>{job.city}, {job.createdAt && getRelativeTime(job.createdAt)}</span>
                                </div>
                                <div className="artist-dash-card-2">
                                    <h4>{job.startDate && new Date(job.startDate).toDateString()}</h4>
                                    <p>{job.from} - {job.to}</p>
                                    <span>{new Date(job.startDate).toLocaleString('en-US', { weekday: 'long' })}</span>
                                </div>
                                <div className="artist-dash-card-3">
                                    <h4>{job.rate}$/hr</h4>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No jobs available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArtistHome;
