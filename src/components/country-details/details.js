import { Link } from "react-router-dom";
import numeral from "numeral";

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
      <Link to="/">Voltar</Link>
      <article className="datails">
        <img src={country.flags.png} alt={"Logo do " + country.name} />
        <div className="description">
          <h1>{country.name}</h1>
          <div className="descriptions">
            <p>Nome nativo: {country.nativeName}</p>
            <p>População: {numeral(country.population).format("0,0")}</p>
            <p>Região: {country.region}</p>
            <p>Sub região: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
            <p>Domínio de nível superior: {country.topLevelDomain}</p>
            <p>Moedas: {country.currencies[0].name}</p>
            <p>Linguagens: {country.languages[0].name}</p>
            <p>Países fronteiriçõs: {country.borders.join(" ")}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CountryDetails;
