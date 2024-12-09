import React, { useEffect, useState } from "react";
import "./ClientHome.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";


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

const ClientHome = () => {
    const userId = Cookies.get('userId'); 

    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    const [user, setUser] = useState([]);
  console.log("user",userId)

    // Fetch jobs data on component mount
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/job/bookings?hasBookings=true');
                setJobs(response.data.jobs); // Assuming the API response contains an array of jobs
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);



    const fetchUserDetails = async (userId) => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/auth/user/${userId}`
          );
          if(response){
            setUser(response.data.user);
          }
         
        } catch (error) {
          console.error(`Error fetching user details for ${userId}:`, error);
        
        }
      };
    
 
    
      useEffect(() => {
        fetchUserDetails(userId);
      }, []);



    function formatTime(time24) {
        const [hour, minute] = time24.split(':').map(Number); // Split and convert to numbers
        const ampm = hour >= 12 ? 'PM' : 'AM'; // Determine AM or PM
        const hour12 = hour % 12 || 12; // Convert to 12-hour format, ensuring 12:00 is handled correctly
        return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
    }


    const viewProfile = async () => {
        navigate("/view-profile")
    }

    const navigatePage = async (id) => {
        navigate(`/confirm-booking/${id}`)
    }



    return (
        <div className="clinet-home-dashboard">
            <div className="client-home">
                <h1>Hello <span style={{textTransform:"uppercase"}}>{user.name}</span></h1>
                <button onClick={()=>viewProfile()}>View Profile</button>
            </div>
            <div className="artist-dash-b">
                <h3>
                    Confirmed Bookings <span className="artist-dash-b-job">3</span>
                </h3>
                {/* <div className="artist-dash-b-left"></div> */}
                <div className="artist-dash-b-right">
                    {loading ? (
                        <p>Loading jobs...</p>
                    ) : jobs.length > 0 ? (
                        jobs.map((job, index) => (
                            <div key={index} className="artist-dash-card" onClick={() => navigatePage(job._id)}>
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
                        ))
                    ) : (
                        <p>No jobs available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientHome;
