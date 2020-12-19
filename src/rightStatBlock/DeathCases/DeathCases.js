import React from "react";
import "./deathCases.css";
import CountryItem from "./CountryItem";

function DeathCases(props) {
  const readableAmount = props.getDeathsAmount
    .toString()
    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  return (
    <div className="country-deathCases">
      <h2 className="country-deathCases-title">Deaths</h2>
      <p className="global-deathsAmount">{readableAmount}</p>
      <ul className="country-deathCases-list">
        {props.gettingCountriesDeaths.map((countryItem, index) => {
          return <CountryItem gettingCountryData={countryItem} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default DeathCases;
