import React, { useState, useRef, useEffect } from "react";
import Main from "./Main";
import "./leaflet.css";

import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

export default function Leaflet() {
  return (
    <div className="map">
      <MapContainer
        center={[22.3193, 114.1694]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.5, 30.5]}>
          <Popup>There is a blue dog.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
