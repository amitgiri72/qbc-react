import React from "react";
import "./ArtistProfile.css";

const ArtistProfile = () => {
  return (
    <div className="artist-profile-main">
      <div className="artist-profile">
        <h3>Artist Profile</h3>
      </div>
      <div className="artist-container">
        <div className="artist-top">
          <div className="artist-image">
            <img src="images/se4.png" alt="artist" />
          </div>
          <div className="artist-content">
            <div className="acs">
              <h6>Name</h6>
              <div className="content-s">amit</div>
            </div>
            <div className="acs">
              <h6>Style</h6>
              <div className="content-s">
                <div className="pspan">azz</div>
                <div className="pspan">azz</div>
                <div className="pspan">azz</div>
                <div className="pspan">azz</div>
                <div className="pspan">azz</div>
              </div>
            </div>
            <div className="acs">
              <h6>Services</h6>
              <div className="content-s">
                <div className="pspan">azz</div>
                <div className="pspan">azz</div>
                <div className="pspan">azz</div>
                <div className="pspan">azz</div>
                <div className="pspan">azz</div>
              </div>
            </div>
          </div>
        </div>

        <div className="artist-bottom">
          <h6>Bio</h6>
          <div className="content-sb">

            <p>
              Indiana Mehta, making her Hollywood Debut in Netflix Feature ‘Work
              It’ is a professional actor, dancer, choreographer and teacher.
              Her most recent work includes choreography for CBC’s SORT OF and
              voicing a cartoon on Nickelodeon. Born in Mumbai, trained in
              Indian Classical/Folk and Western dance forms (Ballet, Jazz,
              Contemporary, Musical Theatre, Hip Hop and more) Indiana was the
              first Indian to graduate from Laine Theatre Arts, UK with a
              National Diploma in Performing Arts (Level 6). She also gained her
              DDI in ISTD Ballet and Modern. Indiana is always on top of her
              training and continues to take classes at The Underground Dance
              Center and Metro Movement.
            </p>
          </div>

          <div className="abr">
            <div className="abrs">
              <h6>Resume</h6>
              <div className="content-s">
                <div className="pspan">azz</div>
                <div className="pspani">
                  <img src="images/download.png" alt="" />
                </div>

              </div>
            </div>
            <div className="abrs">
              <h6>Headshot</h6>
              <div className="content-s">
                <div className="pspan">azz</div>
                <div className="pspani">
                  <img src="images/download.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="artist-profile">
        <h3>Explore Simillar Artist</h3>
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
       
      </div>
    </div>
  );
};

export default ArtistProfile;
