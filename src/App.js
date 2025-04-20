import React, { useState } from 'react';
import CityName from './components/CityName';
import WeatherInfo from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = 'https://api.openweathermap.org/data/2.5/weather?q=$[city]&units=metric&appid=$[API_KEY]'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌤️ Weather Finder</h1>
      <CityName onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      <ErrorMessage message={error} />
      <WeatherInfo data={weatherData} />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
    padding: '0 20px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
};

export default App;
