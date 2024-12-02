'use client';

import React from 'react';

const TestButton = () => {
  const handleClick = () => {
    console.log('Test Button Click');
  };

  return (
    <header>
      <button type="button" onClick={handleClick}>
        Test Button
      </button>
    </header>
  );
};

export default TestButton;
