import React from 'react'
import "./ViewProfile.css"
const ViewProfile = () => {
    return (
        <div className='artist-view-profile'>
            <div className="artist-viewp-hero">
                <div className="artist-viewp-profile">
                    <div className="artist-viewp-profilepic">
                        <img src='images/se2.png' alt='pic' />
                    </div>
                    <div className="artist-viewp-profileinfo">
                        <h1>Indiana Mehta</h1>
                        <p>Artist</p>
                    </div>
                </div>

                <div className="artist-viewp-button">
                    <button className='artist-viewp-follow'>view Profile</button>
                    <button className='artist-viewp-message'>Edit Profile</button>
                </div>
            </div>

            <div className="artist-view-services">

                <h2 className='artist-view-services-h2'>Services</h2>
               
                    <div className="artist-viewp-service-cards">
                        <div className="artist-viewp-service-card">
                            <img src='images/se1.png' alt='img' />
                            <h4>Card Title</h4>
                            <p>$40/hr</p>
                        </div>
                        <div className="artist-viewp-service-card">
                            <img src='images/se1.png' alt='img' />
                            <h4>Card Title</h4>
                            <p>$40/hr</p>
                        </div>
                        <div className="artist-viewp-service-card">
                            <img src='images/se1.png' alt='img' />
                            <h4>Card Title</h4>
                            <p>$40/hr</p>
                        </div>

                    </div>
               
            </div>
        </div>
    )
}

export default ViewProfile