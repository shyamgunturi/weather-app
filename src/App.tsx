import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const generateRandomWeatherData = () => {
    return {
      temperature: (Math.random() * 40).toFixed(1),
      feels_like: (Math.random() * 40).toFixed(1),
      windspeed: (Math.random() * 15).toFixed(1),
      winddirection: Math.floor(Math.random() * 360),
      time: new Date().toLocaleString(),
    };
  };

  const handleSearch = () => {
    if (city.trim() === '') {
      setError('Please enter a city name.');
      setWeather(null); // Clear previous weather data if input is empty
      return;
    }
    setError('');  // Clear any previous error
    setWeather(generateRandomWeatherData());
  };

  const handleReset = () => {
    setCity('');
    setWeather(null);
    setError('');
  };

  const backgroundStyle = {
    backgroundImage: "url('https://img.freepik.com/free-vector/flat-design-monsoon-season-clouds-illustration_23-2149424294.jpg')", // Replace with a real image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    minWidth: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    backgroundColor: "#1E3A8A",
    color: "#fff",
    padding: "12px 30px",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
    marginRight: "10px",
  };

  const inputStyle = {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "2px solid #ccc",
    width: "100%",
    fontSize: "16px",
    marginBottom: "20px",
    transition: "border-color 0.3s ease",
  };

  const weatherBoxStyle = {
    padding: "20px",
    border: "4px solid #1E40AF",
    borderRadius: "10px",
    backgroundColor: "#F3F4F6",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    color: "#1E3A8A",
  };

  const headingStyle = {
    fontWeight: "bold",
    color: "black",
  };

  const errorStyle = {
    color: "#DC2626",
    backgroundColor: "#FEE2E2",
    padding: "10px",
    borderRadius: "8px",
    margin: "15px 0",
    textAlign: "center",
    fontWeight: "bold",
  };

  return (
    <div style={backgroundStyle}>
      <div className="p-6 max-w-md w-full bg-white/80 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Weather Now</h1>
        
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={inputStyle}
        />

        <div className="flex mb-4 justify-center">
          <button 
            onClick={handleSearch} 
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1D4ED8")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1E3A8A")}
            className="transform hover:scale-105"
          >
            Get Weather
          </button>
          <button 
            onClick={handleReset} 
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#DC2626")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#EF4444")}
            className="transform hover:scale-105"
          >
            Reset
          </button>
        </div>

        {error && <p style={errorStyle}>{error}</p>}

        {weather && (
          <div style={weatherBoxStyle}>
            <h2 style={headingStyle} className="text-2xl font-semibold text-center mb-4">
              Weather in {city || "your location"}
            </h2>
            <div className="space-y-2">
              <p><strong style={headingStyle}>Temperature:</strong> <span className="font-semibold">{weather.temperature}°C</span></p>
              <p><strong style={headingStyle}>Feels Like:</strong> <span className="font-semibold">{weather.feels_like}°C</span></p>
              <p><strong style={headingStyle}>Wind Speed:</strong> <span className="font-semibold">{weather.windspeed} m/s</span></p>
              <p><strong style={headingStyle}>Wind Direction:</strong> <span className="font-semibold">{weather.winddirection}°</span></p>
              <p><strong style={headingStyle}>Time:</strong> <span className="font-semibold">{weather.time}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;












