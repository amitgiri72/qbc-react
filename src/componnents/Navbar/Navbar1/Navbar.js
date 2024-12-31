

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const [profileStatus, setProfileStatus] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const checkRole = async () => {
        try {
            const response = await axios.get('https://qbc-backend.onrender.com/api/v1/auth/check-role', {
                withCredentials: true
            });
            if (response) {
                console.log(response.data.userRole);
                setRole(response.data.userRole);
                console.log(response.data.userStatus);
                setProfileStatus(response.data.userStatus);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    checkRole();
}, [isAuthenticated]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('https://qbc-backend.onrender.com/api/v1/auth/verify-token', {
          withCredentials: true
        });
        if(response){
          console.log(response.data.user._id)
        setIsAuthenticated(true);}
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    
    checkAuth();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Artists', path: '/artist' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const AuthButtons = () => {
    let dashboardLink = null;
  
    if (role === 'Artist') {
      dashboardLink = '/artist-dashboard';
    } else if (role === 'Client') {
      dashboardLink = '/client-home';
    }
  
    return isAuthenticated ? (
      profileStatus === 'Confirmed' ? (
        <Link
          to={dashboardLink}
          className="text-sm font-medium px-6 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-[30px]"
        >
          Dashboard
        </Link>
      ) : profileStatus === 'Pending' ? (
        <Link
          to="/artist-form"
          className="text-sm font-medium px-6 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-[30px]"
        >
          Complete Your Profile
        </Link>
      ) : null
    ) : (
      <>
        <Link
          to="/login"
          className="text-sm font-medium px-6 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-[30px]"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="text-sm font-medium px-6 py-2 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-[30px]"
        >
          SignUp
        </Link>
      </>
    );
  };
  
  const MobileAuthButtons = () => {
    let dashboardLink = null;
  
    if (role === 'Artist') {
      dashboardLink = '/artist-dashboard';
    } else if (role === 'Client') {
      dashboardLink = '/client-home';
    }
  
    return isAuthenticated ? (
      profileStatus === 'Confirmed' ? (
        <Link
          to={dashboardLink}
          className="block w-full px-3 py-2 text-sm font-medium border-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-md"
        >
          Dashboard
        </Link>
      ) : profileStatus === 'Pending' ? (
        <Link
          to="/artist-form"
          className="block w-full px-3 py-2 text-sm font-medium border-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-md"
        >
          Complete Your Profile
        </Link>
      ) : null
    ) : (
      <>
        <Link
          to="/login"
          className="block w-full px-3 py-2 text-sm font-medium border-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-md mb-2"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block w-full px-3 py-2 text-sm font-medium border-1 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-md"
        >
          SignUp
        </Link>
      </>
    );
  };
  

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 font-vietnam">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:justify-around">
          <Link to="/" className="flex-shrink-0">
            <img src="images/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 mx-20">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <AuthButtons />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-100">
              <MobileAuthButtons />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;