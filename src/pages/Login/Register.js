import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async () => {
        if (!email || !name ||  !role || !password) {
            setError('All fields are required');
            setSuccess('');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                email,
                name,
                role,
                password,
            });

            setSuccess(response.data.message || 'Registered successfully!');
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
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
                        placeholder="Enter your name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="">Select your role</option>
                        <option value="Artist">You are an Artist</option>
                        <option value="Client">Looking for Artist</option>
                    </select>
                    
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button onClick={handleRegister}>Signup</button>
                    
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
                </div>
            </div>
        </div>
    );
};

export default Register;
