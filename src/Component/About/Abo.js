import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Abo.css';

const Abo = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>About Weather App</h2>

        <div className="content">
          <div className="content-text">
            <p>
              Welcome to the Weather App, your go-to source for accurate and up-to-date weather information.
            </p>
            <p>
              Our app is designed to provide you with real-time weather updates, forecasts, and other relevant information
              to help you plan your day.
            </p>
            <p>
              Whether you're a casual user or a weather enthusiast, our app caters to all with its user-friendly interface
              and comprehensive weather data.
            </p>
          </div>
          <div className="content-image">
            <img
              src="https://jknewstoday.com/wp-content/uploads/2021/09/weather.png"
              alt="Weather App"
              className="image"
            />
          </div>
        </div>

        <h3>Key Features</h3>
        <ul>
          <li>Real-time weather updates</li>
          <li>7-day weather forecasts</li>
          <li>Interactive maps and charts</li>
          <li>Customizable location settings</li>
        </ul>

        <h3>Contact Information</h3>
        <p>
          For any inquiries or feedback, feel free to reach out to us at <a href="mailto:info@example.com">info@example.com</a>.
        </p>

        <p>
          Thank you for choosing Weather App for all your weather needs!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Abo;
