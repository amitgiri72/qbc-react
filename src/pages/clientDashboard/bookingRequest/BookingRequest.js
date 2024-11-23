import React from 'react'
import "./BookingRequest.css"
const BookingRequest = () => {
  return (
    <div className='client-booking-request'>
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
    <div className="booking-price">
        <h4>45$ /hr</h4>
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