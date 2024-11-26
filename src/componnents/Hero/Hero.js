import React, { useState, useEffect } from 'react';
import "./Hero.css";
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "images/hero.png",
    "images/hero2.png",
    // "images/hero3.png",
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden artist-hero-c">
     
      {/* Main content container */}
      <div className="container mx-auto h-screen relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left content with increased margin on desktop */}
          <div className="text-center lg:text-left z-20 px-4 lg:pl-[10%] flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-baseline justify-center lg:justify-start gap-4">
                <h1 className="artist-hero-h1">Earn</h1>
                <span className="artist-hero-p">Effortlessly</span>
              </div>
              <h2 className="artist-hero-p">As An Artist</h2>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline justify-center lg:justify-start gap-4">
                <h2 className="artist-hero-h1">Hire</h2>
                <span className="artist-hero-p">Skilled Artists</span>
              </div>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <button className="artist-hero-home-button">
                Hire Now
              </button>
              <button className="artist-hero-home-button2">
                Join Now
              </button>
            </div>
          </div>

          {/* Center image slider with blur overlay on mobile */}
          <div className="absolute top-0 left-0 w-full h-full lg:static">
            {/* Blur overlay only on mobile */}
            <div className="absolute inset-0  backdrop-blur-sm z-10 lg:hidden"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:static lg:transform-none">
              <div className="relative w-[400px] h-[600px]">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Artist ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@300;400&display=swap');

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        body {
          font-family: 'Inter', sans-serif;
        }

        button {
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
        }

        .border {
          border-width: 1.5px;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;