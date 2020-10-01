import React from 'react';

import './styles.css';

function Select({ label, name, options, ...rest }) {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select type="text" id={name} {...rest}>
        <option value="" disabled hidden>Select an option</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  );
}

export default Select;