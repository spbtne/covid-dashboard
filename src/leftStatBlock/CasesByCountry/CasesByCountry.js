import React from "react";
import "./casesByCountry.css";
import CountryItem from "./CountryItem";

function CasesByCountry({ getCountriesData, isTodayData }) {
  return (
    <div className="country-cases">
      <h2 className="country-cases-title">Cases by Country</h2>
      <ul className="country-cases-list">
        {getCountriesData.map((countryItem, index) => {
          return (
            <CountryItem
              getCountryData={countryItem}
              isTodayData={isTodayData}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CasesByCountry;
