import React, { useState, useRef, useEffect, createRef } from "react";
import heritageInfo from "./heritageInfo";

import "./leaflet.css";

import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

export default function Leaflet({ id }) {
  const [map, setMap] = useState(null);

  // const [selected, setSelected] = useState();

  const marker = heritageInfo.map((heritage, index) => {
    const latlng: any = heritage.coordinates;

    // if (id === heritage.id) markerRef.current.leafletElement.openPopup();

    return (
      // <Marker position={latlng} key={heritage.name} ref={markerRef}>
      //   <Popup>{heritage.name}</Popup>
      // </Marker>
      <PointMarker
        key={index}
        content={heritage.name}
        center={latlng}
        openPopup={id === heritage.id}
      />
    );
  });

  function PointMarker({ content, center, openPopup }) {
    const markerRef: any = useRef(null);

    useEffect(() => {
      if (openPopup) markerRef.current.openPopup();
    }, [openPopup]);

    return (
      <Marker position={center} ref={markerRef}>
        <Popup>{content}</Popup>
      </Marker>
    );
  }

  // useEffect(() => {
  //   console.log(id);
  // }, [id]);

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

        {/* <PointsLayer selectedIndex={selected} data={heritageInfo} /> */}
        {marker}
      </MapContainer>
    </div>
  );
}
