import React from "react";
import "./casesByCountry.css";
import CountryItem from "./CountryItem";

function CasesByCountry(props) {
  return (
    <div className="country-cases">
      <h2 className="country-cases-title">Cases by country</h2>
      <ul className="country-cases-list">
        {props.gettingCountries.map((countryItem, index) => {
          return <CountryItem gettingCountryData={countryItem} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default CasesByCountry;
