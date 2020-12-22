import React from "react";
import "./countryItem.css";

function CountryItem({ getCountryData, isTodayData }) {
  let readableAmount;
  if (isTodayData) {
    console.log(isTodayData);
    getCountryData.todayRecovered === undefined
      ? (readableAmount = false)
      : (readableAmount = getCountryData.todayRecovered
          .toString()
          .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
  } else {
    console.log(isTodayData);
    getCountryData.recovered === undefined
      ? (readableAmount = false)
      : (readableAmount = getCountryData.recovered
          .toString()
          .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "));
  }
  return (
    <li className="country-recoveredCases-wrapper">
      <div className="country-flag">
        <img
          src={getCountryData.countryInfo.flag}
          width="18"
          alt="national-flag"
        ></img>
      </div>
      <div className="country-title">{getCountryData.country}</div>
      <div className="country-recoveredAmount">
        <div className="amount-wrapper">{readableAmount}</div>
      </div>
    </li>
  );
}

export default CountryItem;
