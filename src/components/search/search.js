import './search.css'
import { useState } from "react";

const Search = ({handleSearch}) => {
  const [searchCountries, setSearchCountries] = useState("");

  const handleChange = (event) => {
    const searchCountries = event.target.value;
    setSearchCountries(searchCountries);
    handleSearch(searchCountries);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchCountries}
        onChange={handleChange}
        placeholder="Pesquise o país..."
      />
    </div>
  );
};

export default Search;
