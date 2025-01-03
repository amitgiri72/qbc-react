import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gray-100 pt-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold">Pages</h5>
              <ul className="list-none space-y-2">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">Faqs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                

              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold">Connect With Us</h5>
              <ul className="list-none space-y-2">
                <li><Link to="#">Facebook</Link></li>
                <li><Link to="#">Instagram</Link></li>
                
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold">For Users</h5>
              <ul className="list-none space-y-2">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Signup</Link></li>
                <li><Link to="/artists">Artists</Link></li>
                <li><Link to="/services">Services</Link></li>
                
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold">Contact Us</h5>
              {/* <form action="#">
          <div className="flex items-stretch">
            <input 
              type="email" 
              className="form-control flex-grow border border-gray-300 p-2 rounded-l-md" 
              placeholder="Email address" 
              required 
            />
            <button className="btn bg-red-600 text-white px-4 py-2 rounded-r-md" type="submit">→</button>
          </div>
        </form> */}
              <address className="mt-4">
                <strong>Address:</strong> xyz, Canada<br />
                <strong>Phone No:</strong> +1234567898<br />
                <strong>Email:</strong> xyz@qbc.com
              </address>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 items-center">
            <div className="text-center md:text-left">
              <img src="images/logo.png" alt="Quick Ball Change" className="mb-4 footer-logo mx-auto md:mx-0" />
            </div>
            <div className="text-center">
              <p className="mb-0 terms space-x-2">
                <Link to="/terms">Terms</Link> |
                <Link to="/privacy">Privacy</Link> |
                <Link to="/cookies">Cookies</Link>
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="social-icons space-x-4">
                <Link to="#" className="mx-2"><i className="fab fa-linkedin" /></Link>
                <Link to="#" className="mx-2"><i className="fab fa-instagram" /></Link>
                <Link to="#" className="mx-2"><i className="fab fa-twitter" /></Link>
              </p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default Footer