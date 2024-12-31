import React from 'react';

const AnimatedStats = () => {
    return (
        <div className="stats" style={{ background: "black", color: "white" }}>

            <marquee behavior=""><span style={{ marginRight: "40px" }}>Successful Bookings: 555 </span> <span style={{ marginRight: "80px" }}> |</span> <span>Income Earned: $45554</span> <span style={{ marginLeft: "70vw" }}>Successful Bookings: 5555 </span> <span style={{ marginRight: "40px" }}> |</span> <span>Income Earned: $45554</span></marquee>



        </div>
    );
};

export default AnimatedStats;