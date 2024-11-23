import React from 'react'
import "./CreateJob.css"
const CreateJob = () => {
    return (
        <div className='client-create-job'>
            <div className="create-job-form">
                <div className="create-job-form-row">
                    <div className="create-job-form-item-p">
                        <p>Studio Name</p>
                    </div>
                    <div className="create-job-form-item">
                        <input type="text" placeholder='enter studio name' />
                    </div>
                </div>
                <div className="create-job-form-rows">
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Style</p>
                        </div>
                        <div className="create-job-form-item">
                            <input type="text" placeholder='enter style' />
                        </div>
                    </div>
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Rate</p>
                        </div>
                        <div className="create-job-form-item">
                            <input type="text" placeholder='$ / hr' />
                        </div>
                    </div>
                </div>
                <div className="create-job-form-rows">
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>City</p>
                        </div>
                        <div className="create-job-form-item">
                            <input type="text" placeholder='enter city name' />
                        </div>
                    </div>
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Postal Code</p>
                        </div>
                        <div className="create-job-form-item">
                            <input type="text" placeholder='enter postal code' />
                        </div>
                    </div>
                </div>
                <div className="create-job-form-row">
                    <div className="create-job-form-item-p">
                        <p>Address</p>
                    </div>
                    <div className="create-job-form-item">
                        <textarea type="text" placeholder='enter your address' />
                    </div>
                </div>


                <div className="create-job-form-rows">
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Start Date</p>
                        </div>
                        <div className="create-job-form-item">
                            <input type="date" placeholder='enter studio name' />
                        </div>
                    </div>
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>End Date</p>
                        </div>
                        <div className="create-job-form-item">
                            <input type="date" placeholder='enter studio name' />
                        </div>
                    </div>
                </div>
                <div className="create-job-form-rows">
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>From</p>
                        </div>
                        <div className="create-job-form-item">
                            <input type="time" placeholder='enter from' />
                        </div>
                    </div>
                    <div className="create-job-form-row">
                        <div className="create-job-form-item-p">
                            <p>Till</p>
                        </div>
                        <div className="create-job-form-item">
                            <input type="time" placeholder='enter time' />
                        </div>
                    </div>
                </div>

                <div className="create-job-form-row">
                    <div className="create-job-form-item-p">
                        <p>Address</p>
                    </div>
                    <div className="create-job-form-item">
                        <textarea type="text" placeholder='enter studio name' />
                    </div>
                </div>
                <div className="create-job-form-row">
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default CreateJob