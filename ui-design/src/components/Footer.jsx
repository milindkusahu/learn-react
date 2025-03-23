import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Information */}
          <div className="footer-column">
            <h3>About Us</h3>
            <p>
              We are a dedicated team of developers and designers passionate
              about creating beautiful, functional websites and applications.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Twitter">
                t
              </a>
              <a href="#" aria-label="Instagram">
                i
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a href="/web-development">Web Development</a>
              </li>
              <li>
                <a href="/ui-ux-design">UI/UX Design</a>
              </li>
              <li>
                <a href="/digital-marketing">Digital Marketing</a>
              </li>
              <li>
                <a href="/seo">SEO Optimization</a>
              </li>
              <li>
                <a href="/maintenance">Website Maintenance</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li>123 Web Street, Digital City</li>
              <li>contact@yourcompany.com</li>
              <li>(123) 456-7890</li>
              <li>Mon-Fri: 9AM - 5PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
