import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <main>
      {/* Featured Section */}
      <section className="featured-section">
        <div className="container">
          <h1 className="featured-title">Welcome to Our Website</h1>
          <p className="featured-text">
            We specialize in creating beautiful, functional websites that help
            businesses grow and succeed in the digital landscape.
          </p>
          <a href="/services" className="btn">
            Our Services
          </a>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="body-section">
        <div className="container">
          <div className="main-content">
            {/* Main Content Area */}
            <div className="content-area">
              <h2 className="section-title">What We Offer</h2>

              <div className="card">
                <h3 className="card-title">Web Development</h3>
                <p className="card-content">
                  We build responsive, user-friendly websites using the latest
                  technologies and best practices to ensure your online presence
                  is both beautiful and functional.
                </p>
              </div>

              <div className="card">
                <h3 className="card-title">UI/UX Design</h3>
                <p className="card-content">
                  Our design team creates intuitive, engaging user experiences
                  that keep visitors coming back and help convert them into
                  customers.
                </p>
              </div>

              <div className="card">
                <h3 className="card-title">Digital Marketing</h3>
                <p className="card-content">
                  From SEO to social media, we develop comprehensive digital
                  marketing strategies that increase visibility and drive
                  traffic to your website.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="sidebar">
              <h3 className="section-title">Latest News</h3>

              <div className="card">
                <h4 className="card-title">New Project Launch</h4>
                <p className="card-content">
                  We're excited to announce the launch of our newest client
                  website.
                </p>
              </div>

              <div className="card">
                <h4 className="card-title">Team Expansion</h4>
                <p className="card-content">
                  We've welcomed two new developers to our growing team this
                  month.
                </p>
              </div>

              <div className="card">
                <h4 className="card-title">Upcoming Webinar</h4>
                <p className="card-content">
                  Join us next week for a free webinar on responsive design
                  trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
