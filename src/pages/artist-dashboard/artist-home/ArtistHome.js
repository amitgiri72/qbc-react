import React from 'react'
import "./ArtistHome.css"

const ArtistHome = () => {
    return (
        <div className='artist-dash-h'>
            <div className="artist-dash-hero">
                <h1>Hello Indiana Mehta</h1>
                <div className="dhs">
                    <span>View Profile</span>
                </div>
            </div>

            <div className="artist-dash-b">
                <h3>Job for you <span className='artist-dash-b-job'>3</span></h3>
                {/* <div className="artist-dash-b-left"></div> */}
                <div className="artist-dash-b-right">
                    <div className="artist-dash-card">
                        <div className="artist-dash-card-1"><h4>Creater Space</h4>
                            <p>Subsitute Teacher</p>
                            <span>Florida US, 2 days ago</span>
                        </div>
                        <div className="artist-dash-card-2"><h4>1st march 2024</h4>
                            <p>10 am -  5pm</p>
                            <span>Friday</span></div>
                        <div className="artist-dash-card-3">
                            <h4>45$/hr</h4>
                        </div>
                    </div>
                    <div className="artist-dash-card">
                        <div className="artist-dash-card-1"><h4>Creater Space</h4>
                            <p>Subsitute Teacher</p>
                            <span>Florida US, 2 days ago</span>
                        </div>
                        <div className="artist-dash-card-2"><h4>1st march 2024</h4>
                            <p>10 am -  5pm</p>
                            <span>Friday</span></div>
                        <div className="artist-dash-card-3">
                            <h4>45$/hr</h4>
                        </div>
                    </div>
                    <div className="artist-dash-card">
                        <div className="artist-dash-card-1"><h4>Creater Space</h4>
                            <p>Subsitute Teacher</p>
                            <span>Florida US, 2 days ago</span>
                        </div>
                        <div className="artist-dash-card-2"><h4>1st march 2024</h4>
                            <p>10 am -  5pm</p>
                            <span>Friday</span></div>
                        <div className="artist-dash-card-3">
                            <h4>45$/hr</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ArtistHome