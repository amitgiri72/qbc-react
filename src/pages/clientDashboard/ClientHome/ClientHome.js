import React from 'react'
import "./ClientHome.css"


const ClientHome = () => {
  return (
    <div className='clinet-home-dashboard'>

<div className="client-home">
    <h1>Hello Indiana</h1>
    <button>View Profile</button>
</div>
<div className="artist-dash-b">
                <h3>Confirmed Bookings <span className='artist-dash-b-job'>3</span></h3>
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

export default ClientHome