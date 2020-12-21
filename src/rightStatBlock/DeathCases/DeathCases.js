import React from "react";
import "./deathCases.css";
import CountryItem from "./CountryItem";

function DeathCases({ getCountriesDeaths, getGlobalDeaths }) {
  let readableAmount;
  if (getGlobalDeaths === undefined) {
    readableAmount = false;
  } else {
    readableAmount = getGlobalDeaths
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  }
  return (
    <div className="country-deathCases">
      <h2 className="country-deathCases-title">Deaths</h2>
      <p className="global-deathsAmount">{readableAmount}</p>
      <ul className="country-deathCases-list">
        {getCountriesDeaths.map((countryItem, index) => {
          return <CountryItem getCountryData={countryItem} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default DeathCases;
