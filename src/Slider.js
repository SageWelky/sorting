import React from 'react';

const Slider = ({ id, min, max, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Slider;
