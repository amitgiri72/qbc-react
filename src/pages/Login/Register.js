import React from 'react'
import "./Login.css"
const Register = () => {
    return (
        <div className='login-main'>
            <div className="login">


                <div className="login-logo">
                    <img src="images/logo.png" alt="logo"/>
                </div>

                <div className="login-content">
                    <h2>Unleash Your Creativity</h2>

                    <p>Welcome back! Join the vibrant community of artists and enthusiasts at Shruti Baghela’s creative space. Share your work, discover new art.</p>
                    <input type="text" placeholder='enter your email' />
                    <select name="" id="">
                        <option value="">Select your role</option>
                        <option value="artist">You are a Artist</option>
                        <option value="client">Looking for Artist</option>
                    </select>

                    <input type='password' placeholder='enter your password' />

                    <button>Signup</button>
                </div>
            </div>

        </div>
    )
}

export default Register;