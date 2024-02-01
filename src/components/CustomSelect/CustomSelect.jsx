import React, { useEffect, useRef, useState } from "react";
import "./CustomSelect.scss"; // Import SCSS file for styling

const CustomSelect = ({
  options,
  onSelect,
  onInputChange,
  answers,
  setAnswers,
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    onInputChange(Date.now(), option);
    setSelectedOption(option);
    setIsOpen(false)
  };

  return (
    <div className="custom-select" ref={selectRef}>
      <div className="selected-option" onClick={toggleDropdown}>
        <div className="value">{selectedOption ? selectedOption.label : "Move size"}</div>
        <div className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</div>
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option.value} className="option" onClick={() => handleSelectOption(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
