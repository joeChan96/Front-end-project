import React, { useState, useRef, useEffect } from "react";
import "./leaflet.css";

import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

export default function Leaflet() {
  return (
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>There is a blue dog.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
