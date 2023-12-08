import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";

const App = () => {
  const buildingData = [
    { name: "Building A", coordinates: [longitudeA, latitudeA] },
    { name: "Building B", coordinates: [longitudeB, latitudeB] },
    // Add more buildings here
  ];

  return (
    <div>
      <ComposableMap>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {buildingData.map((building) => (
          <circle
            key={building.name}
            cx={projection(building.coordinates)[0]}
            cy={projection(building.coordinates)[1]}
            r={10}
            fill="blue"
          />
        ))}
      </ComposableMap>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);