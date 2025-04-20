import React, { useState } from 'react';

const CityName = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      onSearch(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={handleChange}
        style={styles.input}
      />
      <button onClick={handleClick} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CityName;
