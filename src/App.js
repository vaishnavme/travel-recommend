import React, { useState } from "react";
import "./styles.css";

const travelPlace = {
  North: [
    { name: "Ladakh", region: "Jammu and Kashmir" },
    { name: "Rohtang La", region: "Himachal Pradesh" },
    { name: "Betaab Valley", region: "Jammu and Kashmir" },
    { name: "Sri Harmandir Sahib", region: "Amritsar, Punjab" }
  ],
  East: [
    { name: "Shillong - Scotland of the East", region: "Meghalaya" },
    { name: "Gangtok - The Gateway to Sikkim", region: "Sikkim" },
    { name: "Majuli - World's Largest Fresh Water Island", region: "Assam" },
    { name: "Konark - The city of the Sun Temple", region: "Orissa" }
  ],
  West: [
    { name: "Goa - Beaches, Sunsets and Crazy Nights", region: "Goa" },
    { name: "Udaipur - The city of Lakes", region: "Rajasthan" },
    { name: "Mahabaleshwar - The land of Strawberries", region: "Maharashtra" },
    { name: "Jodhpur - The Blue City", region: "Rajasthan" }
  ],
  South: [
    {
      name: "Kodaikanal - The Princess of Hill Stations",
      region: "Tamil Nadu"
    },
    { name: "Gokarna - Land of palm trees, blue seas", region: "Karnataka" },
    { name: "Munnar - Roam Amidst the Tea Gardens", region: "Kerala" },
    { name: "Hampi - The Majestic Ruins!", region: "Karnataka" }
  ]
};

export default function App() {
  const [selectedRegion, setRegion] = useState("North");

  function getTravelPlace(regionPlace) {
    setRegion(regionPlace);
  }

  return (
    <div className="App">
      <h1>India Travel 🧭</h1>
      <h2>Journey to see Magic happen! </h2>
      <hr />
      <div className="buttonBlock">
        {Object.keys(travelPlace).map((region) => {
          return (
            <button onClick={() => getTravelPlace(region)}>{region}</button>
          );
        })}
      </div>
      <ul className="placeList">
        {travelPlace[selectedRegion].map((location) => (
          <li>
            <div className="placeName">
              <h3>{location.name}</h3>
            </div>
            <div className="placeRegion">{location.region}</div>
          </li>
        ))}
      </ul>
      <footer>
        <small>
          Made with ❤️ by <a href="https://vaishnavs.netlify.app">Vaishnav</a>
        </small>
      </footer>
    </div>
  );
}
