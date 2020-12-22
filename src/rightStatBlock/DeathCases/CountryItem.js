import React from "react";
import "./countryItem.css";

function CountryItem({ getCountryData, isTodayData }) {
  let readableAmount;
  if (isTodayData) {
    console.log(isTodayData);
    getCountryData.todayDeaths === undefined
      ? (readableAmount = false)
      : (readableAmount = getCountryData.todayDeaths
          .toString()
          .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
  } else {
    console.log(isTodayData);
    getCountryData.deaths === undefined
      ? (readableAmount = false)
      : (readableAmount = getCountryData.deaths
          .toString()
          .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
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
