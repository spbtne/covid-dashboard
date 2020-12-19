import React, { useState, useEffect } from "react";
import GlobalAmount from "./leftStatBlock/GlobalAmount/GlobalAmount";
import CasesByCountry from "./leftStatBlock/CasesByCountry/CasesByCountry";

import "./App.css";

function App() {
  useEffect(() => {
    const gettingSummary = async () => {
      const api_url = await fetch("https://api.covid19api.com/summary");
      const dataSummary = await api_url.json();
      setAmount(dataSummary.Global.TotalConfirmed);
      setCountries(dataSummary.Countries);
    };
    gettingSummary();
  });

  const [infectedAmount, setAmount] = useState([]);
  const [countriesArray, setCountries] = useState([]);

  return (
    <div className="App">
      <header className="header container">
        <h1 className="header-title">Covid 19 statistic</h1>
      </header>
      <main className="main container">
        <div className="infected">
          <div className="global">
            <GlobalAmount gettingAmount={infectedAmount} />
          </div>
          <div className="country">
            <CasesByCountry gettingCountries={countriesArray} />
          </div>
        </div>
        <div className="map">map</div>
        <div className="day-statistic">
          <div className="day-statistic-data">
            <div className="deaths">deaths</div>
            <div className="lives">lives</div>
          </div>
          <div className="graph">graph</div>
        </div>
      </main>
      <footer className="footer container">RSS</footer>
    </div>
  );
}

export default App;
