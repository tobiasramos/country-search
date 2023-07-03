import "./home.css";
import data from "../data/data.json";
import { useState } from "react";
import Search from "../components/search/search";
import Filter from "../components/filter/filter";

const Home = () => {
  const [countries, setCountries] = useState(data);
  const [filteredCountries, setFilteredCountries] = useState(data);

  const handleSearch = (searchCountries) => {
    const results = countries.filter((country) =>
      country.name.toLowerCase().includes(searchCountries.toLowerCase())
    );
    setFilteredCountries(results);
  };

  const handleFilter = (selectedRegion) => {
    if (selectedRegion === "") {
      setFilteredCountries(countries);
    } else {
      const results = countries.filter(
        (country) => country.region === selectedRegion
      );
      setFilteredCountries(results);
    }
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <Filter handleFilter={handleFilter} />
      <div className="country-container">
        {filteredCountries.map((country) => (
          <div className="country">
            <img src={country.flags.png} alt={"Logo do " + country.name} />
            <p>{country.name}</p>
            <p>{country.population}</p>
            <p>{country.region}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
