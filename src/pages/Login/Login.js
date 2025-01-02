import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';

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
            if(response){
                Cookies.set('userId', response.data.user._id, { expires: 7 });
            const from = location.state?.from?.pathname || '/';
            console.log("amit",response.data)
            navigate(from, { replace: true });
            toast.success("Login");
            setSuccess(response.data.message || 'Login successful!');
            setError('');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            setSuccess('');
        }
    };

    return (
        <div className="login-main">
            <ToastContainer/>
            <div className="login">
                <div className="login-logo">
                    <img src="images/logo.png" alt="logo" />
                </div>

                <div className="login-content">
                    <h2>Unleash Your Creativity</h2>

                    <p>Welcome back to QBC! Join a vibrant community of dancer educators and artists, share your passion and earn a living doing what you love.</p>
                    
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
