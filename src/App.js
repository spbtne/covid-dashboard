import React, { useEffect, useState } from "react";
import GlobalAmount from "./leftStatBlock/GlobalAmount/GlobalAmount";
import CasesByCountry from "./leftStatBlock/CasesByCountry/CasesByCountry";
import DeathCases from "./rightStatBlock/DeathCases/DeathCases";
import RecoveredCases from "./rightStatBlock/RecoveredCases/RecoveredCases";
import "./App.css";
import Header from "./header/header";

function App() {
  const [globalData, setGlobalData] = useState([]);
  const [isToday, setIsToday] = useState([]);

  const [countriesData, setCountriesData] = useState([]);
  const [worldDataCases, setWorldDataCases] = useState([]);
  const [worldDataDeaths, setWorldDataDeaths] = useState([]);
  const [worldDataRecovered, setWorldDataRecovered] = useState([]);

  useEffect(() => {
    const getGlobalData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const dataSummary = await response.json();

      setGlobalData(dataSummary);
      setWorldDataCases(dataSummary.cases);
      setWorldDataDeaths(dataSummary.deaths);
      setWorldDataRecovered(dataSummary.recovered);
      setIsToday(false);
    };

    getGlobalData();
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      const countriesData = await response.json();
      setCountriesData(countriesData);
    };

    getCountriesData();
  }, []);

  return (
    <div className="App">
      <header className="header container">
        <Header />
      </header>
      <main className="main container">
        <div className="infected">
          <div className="global">
            <GlobalAmount getAllCases={worldDataCases} />
          </div>
          <div className="country">
            <CasesByCountry
              getCountriesData={countriesData}
              isTodayData={isToday}
            />
          </div>
          <div className="period-buttons-wrapper">
            <button
              className="period-buttons-total button button--active"
              onClick={() => {
                setWorldDataCases(globalData.cases);
                setWorldDataDeaths(globalData.deaths);
                setWorldDataRecovered(globalData.recovered);
                setIsToday(false);
                document
                  .querySelector(".period-buttons-total")
                  .classList.toggle("button--active");
                document
                  .querySelector(".period-buttons-today")
                  .classList.toggle("button--active");
              }}
            >
              Total
            </button>
            <button
              className="period-buttons-today button"
              onClick={() => {
                setWorldDataCases(globalData.todayCases);
                setWorldDataDeaths(globalData.todayDeaths);
                setWorldDataRecovered(globalData.todayRecovered);
                setIsToday(true);
                document
                  .querySelector(".period-buttons-total")
                  .classList.toggle("button--active");
                document
                  .querySelector(".period-buttons-today")
                  .classList.toggle("button--active");
              }}
            >
              Today
            </button>
          </div>
        </div>
        <div className="map">map</div>
        <div className="day-statistic">
          <div className="day-statistic-data">
            <div className="deaths">
              <DeathCases
                getCountriesDeaths={countriesData}
                getGlobalDeaths={worldDataDeaths}
                isTodayData={isToday}
              />
            </div>
            <div className="lives">
              <RecoveredCases
                getCountriesDataRecovered={countriesData}
                getGlobalRecovered={worldDataRecovered}
                isTodayData={isToday}
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
