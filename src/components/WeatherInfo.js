import React from 'react';

const WeatherInfo = ({ data }) => {
  if (!data) return null;

  return (
    <div style={styles.weatherBox}>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <p>🌡️ {data.main.temp}°C</p>
      <p>💨 Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

const styles = {
  weatherBox: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '10px',
    display: 'inline-block',
    backgroundColor: '#f0f8ff',
  },
};

export default WeatherInfo;
