import "./search.css";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ handleSearch }) => {
  const [searchCountries, setSearchCountries] = useState("");

  const handleChange = (event) => {
    const searchCountries = event.target.value;
    setSearchCountries(searchCountries);
    handleSearch(searchCountries);
  };
  return (
    <div className="search-container">
      <BsSearch color="hsl(207, 26%, 17%)"/>
      <input
        type="text"
        value={searchCountries}
        onChange={handleChange}
        placeholder="Digite o país..."
      />
    </div>
  );
};

export default Search;
