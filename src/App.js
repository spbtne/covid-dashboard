import React, { useState, useEffect } from "react";
import GlobalAmount from "./leftStatBlock/GlobalAmount/GlobalAmount";
import CasesByCountry from "./leftStatBlock/CasesByCountry/CasesByCountry";
import DeathCases from "./rightStatBlock/DeathCases/DeathCases";
import RecoveredCases from "./rightStatBlock/RecoveredCases/RecoveredCases";
import "./App.css";
import Header from "./header/header";

function App() {
  const [infectedAmount, setInfectedAmount] = useState([]);
  const [deathsAmount, setDeathsAmount] = useState([]);
  const [recoveredAmount, setRecoveredAmount] = useState([]);
  const [countriesArray, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://api.covid19api.com/summary");
      const dataSummary = await response.json();
      setInfectedAmount(dataSummary.Global.TotalConfirmed);
      setCountries(dataSummary.Countries);
      setDeathsAmount(dataSummary.Global.TotalDeaths);
      setRecoveredAmount(dataSummary.Global.TotalRecovered);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="header container">
        <Header />
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
            <div className="deaths">
              <DeathCases
                gettingCountriesDeaths={countriesArray}
                getDeathsAmount={deathsAmount}
              />
            </div>
            <div className="lives">
              <RecoveredCases
                gettingCountriesRecovered={countriesArray}
                getRecoveredAmount={recoveredAmount}
              />
            </div>
          </div>
          <div className="graph">graph</div>
        </div>
      </main>
      <footer className="footer container">RSS</footer>
    </div>
  );
}

export default App;
