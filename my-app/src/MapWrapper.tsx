import React, { useState, useRef } from "react";
import {
  interaction,
  layer,
  custom,
  control, //name spaces
  Interactions,
  Overlays,
  Controls, //group
  Map,
  Layers,
  Overlay,
  Util,
  //objects
} from "react-openlayers";
import "./MapWrapper.css";

export default function MapWrapper() {
  return (
    <main className="main-grid">
      <div className="search">Onjj</div>
      <div className="map">
        <Map view={{ center: [0, 0], zoom: 1 }}>
          <Layers>
            <layer.Tile />
          </Layers>
        </Map>
      </div>
    </main>
  );
}
