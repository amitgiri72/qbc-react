import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = async () => {
        if (!email || !password) {
            setError('All fields are required');
            setSuccess('');
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/auth/login', 
                { email, password },
                { withCredentials: true } // Ensures cookies are sent with the request
            );
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });
            setSuccess(response.data.message || 'Login successful!');
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            setSuccess('');
        }
    };

    return (
        <div className="login-main">
            <div className="login">
                <div className="login-logo">
                    <img src="images/logo.png" alt="logo" />
                </div>

                <div className="login-content">
                    <h2>Unleash Your Creativity</h2>

                    <p>Welcome back! Join the vibrant community of artists and enthusiasts at Shruti Baghela’s creative space. Share your work, discover new art.</p>
                    
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button onClick={handleLogin}>Login</button>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
