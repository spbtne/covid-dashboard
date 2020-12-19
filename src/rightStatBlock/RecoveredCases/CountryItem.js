import React from "react";
import "./countryItem.css";

function CountryItem(props) {
  const readableAmount = props.gettingCountryData.TotalRecovered.toString().replace(
    /(\d)(?=(\d\d\d)+([^\d]|$))/g,
    "$1 "
  );
  return (
    <li className="country-recoveredCases-wrapper">
      <div className="country-title">{props.gettingCountryData.Country}</div>
      <div className="country-recoveredAmount">
        <div className="amount-wrapper">{readableAmount}</div>
      </div>
    </li>
  );
}

export default CountryItem;
