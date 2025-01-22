import React from 'react';

export const Input = ({ id, type, placeholder, value, onChange, required }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="border rounded px-3 py-2 w-full"
    />
  );
};

export default Input;