import React from "react";
import "./countryItem.css";

function CountryItem({ gettingCountryData }) {
  const readableAmount = gettingCountryData.TotalDeaths.toString().replace(
    /(\d)(?=(\d\d\d)+([^\d]|$))/g,
    "$1 "
  );
  return (
    <li className="country-deathCases-wrapper">
      <div className="country-title">{gettingCountryData.Country}</div>
      <div className="country-deathAmount">
        <div className="amount-wrapper">{readableAmount}</div>
      </div>
    </li>
  );
}

export default CountryItem;
