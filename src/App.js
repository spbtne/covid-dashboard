import React from 'react';
import "./App.css";

function App() {

  return (
    <div className="App">
    <header className="header container">
      <h1 className="header-title">Covid 19 statistic</h1>
    </header>
    <main className="main container">
      <div className="infected">
        <div className="global">global</div>
        <div className="country">country</div>
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
