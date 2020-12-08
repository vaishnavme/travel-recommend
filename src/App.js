import React, { useState } from "react";
import { travelData } from "./Dataset";

import "./styles.css";

let travelPlace = Object.keys(travelData);

export default function App() {
  const [selectedRegion, setRegion] = useState("All Place");

  function getTravelPlace(region) {
    setRegion(region);
  }

  return (
    <div className="App">
      <h1>India Travel 🧭</h1>
      <h2>Journey to see Magic happen! </h2>
      <hr />
      <div className="buttonBlock">
        {travelPlace.map((region) => {
          return (
            <button key={region} onClick={() => getTravelPlace(region)}>
              {region}
            </button>
          );
        })}
      </div>
      {travelData[selectedRegion].map((place) => {
        return (
          <div className="place">
            <div className="card-image">
              <img src={place.image} className="image" alt="place"></img>
            </div>
            <div className="card-info">
              <h1 className="place-name">{place.name}</h1>
              <p className="place-description">{place.description}</p>
              <h3 className="place-region">Region : {place.region}</h3>
              <h4 className="place-time">Best Time : {place.bestTime}</h4>
            </div>
          </div>
        );
      })}

      <footer>
        <small>
          Made with ❤️ by <a href="https://vaishnavs.netlify.app">Vaishnav</a>
        </small>
      </footer>
    </div>
  );
}
