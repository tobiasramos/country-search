import { Link } from "react-router-dom";
import numeral from "numeral";
import { BiArrowBack } from "react-icons/bi";

import "./details.css";
import data from "../../data/data.json";

const CountryDetails = ({ match }) => {
  const countryName = match.params.name;

  const country = data.find((country) => country.name === countryName);

  if (!country) {
    return <div>País não encontrado</div>;
  }

  return (
    <div className="details-container">
      <div className="btn-back">
        <BiArrowBack className="icon" />
        <Link to="/" className="btn">
          Voltar
        </Link>
      </div>
      <article className="datails">
        <img src={country.flags.png} alt={"Logo do " + country.name} />
        <div className="descriptions-container">
          <h1>{country.name}</h1>

          <ul className="descriptions">
            <li>
              <span className="bold600">Nome nativo:</span>{" "}
              <span>{country.nativeName}</span>
            </li>
            <li>
              <span className="bold600">População:</span>{" "}
              <span>{numeral(country.population).format("0,0")}</span>
            </li>
            <li>
              <span className="bold600">Região: </span>{" "}
              <span>{country.region}</span>
            </li>
            <li>
              <span className="bold600">Sub região:</span>{" "}
              <span>{country.subregion}</span>
            </li>
            <li>
              <span className="bold600">Capital:</span>{" "}
              <span>{country.capital}</span>
            </li>
            <li>
              <span className="bold600">Domínio:</span>{" "}
              <span>{country.topLevelDomain}</span>
            </li>
            <li>
              <span className="bold600">Moedas:</span>{" "}
              <span>{country.currencies[0].name}</span>
            </li>
            <li>
              <span className="bold600">Linguagens:</span>{" "}
              <span>{country.languages[0].name}</span>
            </li>
          </ul>
          <p>Países fronteiriçõs: {country.borders.join(" ")}</p> 
        </div>
      </article>
    </div>
  );
};

export default CountryDetails;
