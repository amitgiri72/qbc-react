import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedStats from './AnimatedStats';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const images = [
    "images/hero.png",
    "images/hero2.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const naviagteSignup = () =>{
    navigate('/register')
  }
  return (
    <div className="relative min-h-screen bg-red-600 overflow-hidden">
      {/* Main container with 10% padding */}
      <div className="container mx-auto h-screen px-[10%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left content section */}
          <div className="relative z-20 flex flex-col justify-center space-y-8 py-12 lg:py-0">
            {/* Hero text container */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row items-center lg:items-baseline justify-center lg:justify-start gap-2 sm:gap-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Earn</h1>
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-100">Effortlessly</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-100 text-center lg:text-left">
                  As An Artist
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-baseline justify-center lg:justify-start gap-2 sm:gap-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Hire</h2>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-100">Skilled Artists</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 text-lg font-semibold text-red-600 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200" onClick={naviagteSignup}>
                Hire Now
              </button>
              <button className="px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-red-500 transition-colors duration-200" onClick={naviagteSignup}>
                Join Now
              </button>
            </div>
          </div>
          

          {/* Right image section - Removed blur border for laptop */}
          <div className="absolute inset-0 lg:relative lg:inset-auto">
            {/* Mobile blur overlay - only shows on mobile */}
            <div className="absolute inset-0 bg-red-600/60 backdrop-blur-sm z-10 lg:hidden"></div>
            
            {/* Image container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          lg:relative lg:inset-auto lg:transform-none lg:h-full 
                          lg:flex lg:items-center lg:justify-end">
              <div className="relative w-[280px] sm:w-[400px] h-[420px] sm:h-[600px] 
                            md:w-[400px] md:h-[600px] 
                            lg:w-[500px] lg:h-[700px]">
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
      <AnimatedStats/>
    </div>
  );
};

export default HeroSection;