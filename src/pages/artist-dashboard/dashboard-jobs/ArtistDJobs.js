import React, { useEffect, useState } from "react";
import "./ArtistDJobs.css";
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

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `Just now`;
};

const ArtistDJobs = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("jobOffer");
  const userId = Cookies.get("userId");

  const [jobs, setJobs] = useState([]);
  const [confirmedJobs, setConfirmedJobs] = useState([]);
  const navigate = useNavigate();

  // Fetch jobs data on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://qbc-backend.onrender.com/api/v1/job/get-jobs"
        );
        setJobs(response.data.jobs); // Assuming the API response contains an array of jobs
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  // Fetch confirmed jobs for user data on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `https://qbc-backend.onrender.com/api/v1/job/user/${userId}/confirmed`
        );
        setConfirmedJobs(response.data.jobs); // Assuming the API response contains an array of jobs
        console.log("con", response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  function formatTime(time24) {
    const [hour, minute] = time24.split(":").map(Number); // Split and convert to numbers
    const ampm = hour >= 12 ? "PM" : "AM"; // Determine AM or PM
    const hour12 = hour % 12 || 12; // Convert to 12-hour format, ensuring 12:00 is handled correctly
    return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
  }

  const navigatePage = async (id) => {
    navigate(`/job-offer/${id}`);
  };

  // Function to render job cards
  const renderJobCards = (jobs) => {
    return jobs.map((job) => (
      <div
        className="artist-dash-card"
        key={job.id}
        onClick={() => navigatePage(job._id)}
      >
        <div className="artist-dash-card-1">
          <h4>{job.studioName}</h4>
          <p>{job.style}</p>
          <span>
            {job.city}, {job.createdAt && getRelativeTime(job.createdAt)}
          </span>
        </div>
        <div className="artist-dash-card-2">
          <h4>{job.startDate && new Date(job.startDate).toDateString()}</h4>
          <p>
            {formatTime(job.from)} - {formatTime(job.to)}
          </p>
          <span>
            {new Date(job.startDate).toLocaleString("en-US", {
              weekday: "long",
            })}
          </span>
        </div>
        <div className="artist-dash-card-3">
          <h4>${job.rate}/hr</h4>
        </div>
      </div>
    ));
  };

  return (
    <div className="artistdjobs">
      <div className="artistdjobpannel">
        <div className="artist-pannel-tabs">
          <div
            className={`artist-pannel-tab ${
              activeTab === "jobOffer" ? "active" : ""
            }`}
            onClick={() => setActiveTab("jobOffer")}
          >
            <p>Jobs Offer</p>
          </div>
          <div
            className={`artist-pannel-tab ${
              activeTab === "confirmedJobs" ? "active" : ""
            }`}
            onClick={() => setActiveTab("confirmedJobs")}
          >
            <p>Confirmed Jobs</p>
          </div>
        </div>
        <div className="artist-dash-b-right">
        {activeTab === "jobOffer" && jobs.length === 0 && (
          <div className="no-jobs-message">
            <p>No jobs available</p>
          </div>
        )}
        {activeTab === "confirmedJobs" && confirmedJobs.length === 0 && (
          <div className="no-jobs-message">
            <p>No confirmed jobs available</p>
          </div>
        )}
        {activeTab === "jobOffer" && jobs.length > 0 && renderJobCards(jobs)}
        {activeTab === "confirmedJobs" &&
          confirmedJobs.length > 0 &&
          renderJobCards(confirmedJobs)}
      </div>
      </div>
    </div>
  );
};

export default ArtistDJobs;
