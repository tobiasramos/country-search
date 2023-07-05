import { useState } from "react";
import "./filter.css";

const Filter = ({ handleFilter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    handleFilter(selectedValue);
  };
  return (
    <div>
      <select value={selectedOption} onChange={handleFilterChange}>
        <option>Filtrar por região</option>
        <option value="Africa">África</option>
        <option value="Americas">América</option>
        <option value="Asia">Ásia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
