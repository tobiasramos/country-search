import "./home.css";
import data from "../data/data.json";
import { useState } from "react";
import Search from "../components/search/search";
import Filter from "../components/filter/filter";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState(data);
  const [filteredCountries, setFilteredCountries] = useState(data);
  const history = useHistory();

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

  const handleClick = (countryName) => {
    history.push(`/country/${countryName}`);
  };

  return (
    <>
      <div className="filters">
        <Search handleSearch={handleSearch} />
        <Filter handleFilter={handleFilter} />
      </div>
      <div className="country-container .app.dark">
        {filteredCountries.map((country) => (
          <div
            className="country"
            key={country.name}
            onClick={() => handleClick(country.name)}
          >
            <img src={country.flags.png} alt={"Logo do " + country.name} />
            <div className="description">
              <h4 className="bold800">{country.name}</h4>
              <p>
                <span className="bold600">População:</span> {country.population}
              </p>
              <p>
                <span className="bold600">Região:</span> {country.region}
              </p>
              <p>
                <span className="bold600">Capital:</span> {country.capital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
