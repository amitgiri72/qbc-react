import React, { useEffect, useState } from 'react'
import "./ViewProfile.css"
import axios from 'axios';
import Cookies from 'js-cookie';
const ViewProfile = () => {

    const userId = Cookies.get('userId');



    const [user, setUser] = useState([]);

    const fetchUserDetails = async (userId) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/v1/auth/user/${userId}`
            );
            if (response) {
                setUser(response.data.user);
                console.log(response.data.user)
            }

        } catch (error) {
            console.error(`Error fetching user details for ${userId}:`, error);

        }
    };



    useEffect(() => {
        fetchUserDetails(userId);
    }, []);


    return (
        <div className='artist-view-profile'>
            <div className="artist-viewp-hero">
                <div className="artist-viewp-profile">
                    <div className="artist-viewp-profilepic">
                        <img src='images/se2.png' alt='pic' />
                    </div>
                    <div className="artist-viewp-profileinfo">
                        <h1>{user.name}</h1>
                        <p>{user.role}</p>
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