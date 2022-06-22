import React, { useState, useRef, useEffect, createRef } from "react";
import heritageInfo from "./heritageInfo";

import "./leaflet.css";

import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

import StarIcon from "@mui/icons-material/Star";

export default function Leaflet({ id }) {
  const [map, setMap] = useState(null);

  // const [selected, setSelected] = useState();

  const marker = heritageInfo.map((heritage, index) => {
    const latlng: any = heritage.coordinates;

    // Popup box display
    const heritageInfo = (
      <div>
        <img className="img" src={heritage.img} />
        <div>
          <b>{heritage.name}</b>
        </div>
        <br />
        <div>{heritage.district}</div>
        <div>
          Visiting time: {heritage.visiting_time}{" "}
          {heritage.visiting_time < 2 ? "hour" : "hours"}
        </div>

        <a href="#">See more...</a>
      </div>
    );

    // if (id === heritage.id) markerRef.current.leafletElement.openPopup();

    return (
      // <Marker position={latlng} key={heritage.name} ref={markerRef}>
      //   <Popup>{heritage.name}</Popup>
      // </Marker>
      <PointMarker
        key={index}
        content={heritageInfo}
        position={latlng}
        openPopup={id === heritage.id}
      />
    );
  });

  function PointMarker({ content, position, openPopup }) {
    const markerRef: any = useRef(null);
    const map = useMap();

    useEffect(() => {
      if (openPopup) {
        markerRef.current.openPopup();
        map.setView(position, 12);
      }
    }, [openPopup]);

    return (
      <Marker position={position} ref={markerRef}>
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
