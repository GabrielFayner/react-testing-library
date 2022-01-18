import React, { useState } from "react";

// import { Container } from './styles';

export const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="c-dropdown">
      <button onClick={() => setIsOpen(true)}>{title}</button>
      {isOpen && (
        <ul role="menu">
          {options.map((option) => (
            <li
              key={option}
              role="menuitem"
              onClick={() => handleSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
