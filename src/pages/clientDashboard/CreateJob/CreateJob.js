

import React, { useState } from 'react';
import axios from 'axios';
import './CreateJob.css';
import { toast } from 'react-toastify';

const CreateJob = () => {
    const [formData, setFormData] = useState({
        studioName: '',
        style: '',
        rate: '',
        city: '',
        postalCode: '',
        address: '',
        startDate: '',
        endDate: '',
        from: '',
        to: '',
        description: '',
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form data
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post('https://qbc-backend.onrender.com/api/v1/job/create-job', formData);
            setLoading(false);

            if (response.data.success) {
                toast.success("Job created successfully")
                setMessage('Job created successfully!');
                setFormData({
                    studioName: '',
                    style: '',
                    rate: '',
                    city: '',
                    postalCode: '',
                    address: '',
                    startDate: '',
                    endDate: '',
                    from: '',
                    to: '',
                    description: '',
                });
            } else {
                toast.error('Failed to create job. Please try again.')
                
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error('An error occurred. Please try again.')
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className='client-create-job'>
            <form className='create-job-form' onSubmit={handleSubmit}>
                <div className="create-job-form-row">
                    <div className="create-job-form-item-p">
                        <p>Studio Name</p>
                    </div>
                    <div className="create-job-form-item">
                        <input
                            type="text"
                            name="studioName"
                            placeholder="Enter studio name"
                            value={formData.studioName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Other Input Fields */}
                <div className="create-job-form-rows">
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Style</p>
                        </div>
                        <div className="create-job-form-item">
                            <input
                                type="text"
                                name="style"
                                placeholder="Enter style"
                                value={formData.style}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Rate</p>
                        </div>
                        <div className="create-job-form-item">
                            <input
                                type="text"
                                name="rate"
                                placeholder="$ / hr"
                                value={formData.rate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* City and Postal Code */}
                <div className="create-job-form-rows">
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>City</p>
                        </div>
                        <div className="create-job-form-item">
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter city name"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Postal Code</p>
                        </div>
                        <div className="create-job-form-item">
                            <input
                                type="text"
                                name="postalCode"
                                placeholder="Enter postal code"
                                value={formData.postalCode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Address */}
                <div className="create-job-form-row">
                    <div className="create-job-form-item-p">
                        <p>Address</p>
                    </div>
                    <div className="create-job-form-item">
                        <textarea
                            name="address"
                            placeholder="Enter your address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>

                {/* Dates */}
                <div className="create-job-form-rows">
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Start Date</p>
                        </div>
                        <div className="create-job-form-item">
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>End Date</p>
                        </div>
                        <div className="create-job-form-item">
                            <input
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Time */}
                <div className="create-job-form-rows">
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>From</p>
                        </div>
                        <div className="create-job-form-item">
                            <input
                                type="time"
                                name="from"
                                value={formData.from}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>To</p>
                        </div>
                        <div className="create-job-form-item">
                            <input
                                type="time"
                                name="to"
                                value={formData.to}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="create-job-form-row">
                    <div className="create-job-form-item-p">
                        <p>Description</p>
                    </div>
                    <div className="create-job-form-item">
                        <textarea
                            name="description"
                            placeholder="Enter description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="create-job-form-row">
                    <button type="submit" disabled={loading}>
                        {loading ? 'Posting...' : 'Post'}
                    </button>
                </div>

               
            </form>
        </div>
    );
};

export default CreateJob;


