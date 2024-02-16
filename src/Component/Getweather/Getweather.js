import React, { useState } from 'react';
import './Getweather.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const API_KEY = 'cad3a83931bca13b9ecdb428308cb571'; // Replace with your actual API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function Getweather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // Added units=metric for Celsius
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <>
    <Navbar />
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Visibility: {weatherData.visibility / 1000} km</p>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default Getweather;
