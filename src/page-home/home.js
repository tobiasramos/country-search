import "./home.css";
import data from "../data/data.json";
import { useState } from "react";
import Search from "../components/search/search";

const Home = () => {
  const [countries, setCountries] = useState(data);

  const handleSearch = (searchCountries) => {
    const results = data.filter((country) =>
      country.name.toLowerCase().includes(searchCountries.toLowerCase())
    );
    setCountries(results);
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <div className="country-container">
        {countries.map((country) => (
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
