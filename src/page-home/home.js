import "./home.css";
import data from "../data/data.json";
import { useState } from "react";

const Home = () => {
  const [countries, setCountries] = useState(data);
  return (
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
  );
};

export default Home;
