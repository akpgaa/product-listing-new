import React, { useState } from "react";

const DropdownComponent = ({ options = [], onSelect = () => {} }) => {
  // const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    // setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <select
        class="form-select"
        aria-label="Default select example"
        // value={selectedOption}
        onClick={(e) => handleSelect(e.target.value)}
      >
        <option key="" value="">
          Select Category
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
