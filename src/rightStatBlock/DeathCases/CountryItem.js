import React from "react";
import "./countryItem.css";

function CountryItem({ getCountryData }) {
  let readableAmount;
  if (getCountryData.cases === undefined) {
    readableAmount = false;
  } else {
    readableAmount = getCountryData.cases
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  }
  return (
    <li className="country-deathCases-wrapper">
      <div className="country-flag">
        <img
          src={getCountryData.countryInfo.flag}
          width="18"
          alt="national-flag"
        ></img>
      </div>
      <div className="country-title">{getCountryData.country}</div>
      <div className="country-deathAmount">
        <div className="amount-wrapper">{readableAmount}</div>
      </div>
    </li>
  );
}

export default CountryItem;
