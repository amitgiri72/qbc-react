import React from 'react';

const AnimatedStats = () => {
    return (
        <div className="stats" style={{ background: "black", color: "white" }}>

            <marquee behavior=""><span style={{ marginRight: "40px" }}>Total Earning: $55555 </span> <span style={{ marginRight: "40px" }}> |</span> <span>Total Clients: 45554</span> <span style={{ marginLeft: "70vw" }}>Total Earning: $55555 </span> <span style={{ marginRight: "40px" }}> |</span> <span>Total Clients: 45554</span></marquee>



        </div>
    );
};

export default AnimatedStats;