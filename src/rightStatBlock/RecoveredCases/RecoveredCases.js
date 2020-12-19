import React from "react";
import "./recoveredCases.css";
import CountryItem from "./CountryItem";

function RecoveredCases({ getRecoveredAmount, gettingCountriesRecovered }) {
  const readableAmount = getRecoveredAmount
    .toString()
    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  return (
    <div className="country-recoveredCases">
      <h2 className="country-recoveredCases-title">Recovered</h2>
      <p className="global-recoveredAmount">{readableAmount}</p>
      <ul className="country-recoveredCases-list">
        {gettingCountriesRecovered.map((countryItem, index) => {
          return <CountryItem gettingCountryData={countryItem} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default RecoveredCases;
