import React from 'react'
import "./Artist.css"
import Navbar from '../../componnents/Navbar/Navbar1/Navbar'
const Artist = () => {
  return (
    <div className='artist-main'>
        <Navbar/>
     <div className="artist">
        <h3>Artist Profile</h3>
      </div>

      <div className="a-cards">
        <div className="a-card">
            <img src='images/se3.png'alt='img' />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
        </div>
        <div className="a-card">
            <img src='images/se3.png'alt='img' />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
        </div>
        <div className="a-card">
            <img src='images/se3.png'alt='img' />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
        </div>
        <div className="a-card">
            <img src='images/se3.png'alt='img' />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
        </div>
        <div className="a-card">
            <img src='images/se3.png'alt='img' />
            <h4>card title</h4>
            <p>subtitle</p>
            <span>tag</span>
        </div>
      </div>
    </div>
  )
}

export default Artist