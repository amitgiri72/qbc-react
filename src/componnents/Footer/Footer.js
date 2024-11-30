import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
       <footer className="footer bg-gray-100 pt-20">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h5 className="text-lg font-semibold">Our Mission</h5>
        <ul className="list-none space-y-2">
          <li><a href="#">Mission</a></li>
          <li><a href="#">Values</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">Goal</a></li>
          <li><a href="#">Impact</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>
      <div>
        <h5 className="text-lg font-semibold">Connect With Us</h5>
        <ul className="list-none space-y-2">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Pinterest</a></li>
        </ul>
      </div>
      <div>
        <h5 className="text-lg font-semibold">For Studios</h5>
        <ul className="list-none space-y-2">
          <li><a href="#">Search</a></li>
          <li><a href="#">Book</a></li>
          <li><a href="#">Connect</a></li>
          <li><a href="#">Discover</a></li>
          <li><a href="#">Engage</a></li>
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
          <a href="#">Terms</a> | 
          <a href="#">Privacy</a> | 
          <a href="#">Cookies</a>
        </p>
      </div>
      <div className="text-center md:text-right">
        <p className="social-icons space-x-4">
          <a href="#" className="mx-2"><i className="fab fa-linkedin" /></a>
          <a href="#" className="mx-2"><i className="fab fa-instagram" /></a>
          <a href="#" className="mx-2"><i className="fab fa-twitter" /></a>
        </p>
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer