import React from "react";
import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 footer-logo">
            <h1>DAS <span>Hospital</span></h1>
            <p>
              Dedicated to providing exceptional healthcare with compassion and
              innovation. Your health and comfort are our top priorities.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
              <li><Link to="/gallary">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><Link to="/doctors">General Care</Link></li>
              <li><Link to="/doctors">Dental Care</Link></li>
              <li><Link to="/doctors">Pathology</Link></li>
              <li><Link to="/doctors">Neurology</Link></li>
              <li><Link to="/doctors">Emergency</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading">Contact Us</h5>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <i className="fas fa-location-dot"></i>
                <p>123 Medical Plaza, Health Street,<br />Lucknow, Uttar Pradesh</p>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone"></i>
                <p>+91 1234567890<br />+91 0987654321</p>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <p>info@dashospital.com<br />emergency@dashospital.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            All Rights Reserved &copy; {new Date().getFullYear()} <span>Shashwat</span> | 
            Made with <i className="fas fa-heart text-danger"></i> by <span>Group 6</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
