import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return <p style={styles.error}>{message}</p>;
};

const styles = {
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default ErrorMessage;
