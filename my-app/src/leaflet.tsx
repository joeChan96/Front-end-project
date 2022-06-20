import React, { useState, useRef, useEffect, createRef } from "react";
import heritageInfo from "./heritageInfo";

import "./leaflet.css";

import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

const marker = heritageInfo.map((heritage, index) => {
  const latlng: any = heritage.coordinates;
  return (
    <Marker position={latlng}>
      <Popup>{heritage.name}</Popup>
    </Marker>
  );
});

export default function Leaflet() {
  const [map, setMap] = useState(null);

  // const markerRef = useRef(null);

  // const { center, content, openPopup } = props;

  useEffect(() => {
    if (map) {
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);

  return (
    <div className="map">
      <MapContainer
        center={[22.37, 114.135]}
        zoom={11}
        scrollWheelZoom={true}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {marker}
      </MapContainer>
    </div>
  );
}
