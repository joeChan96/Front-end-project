import React, { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

function PointsLayer(props) {
  const { data, selectedIndex } = props;
  return data.map((item, index) => (
    <PointMarker
      key={index}
      content={item.name}
      center={{ lat: item.lat, lng: item.lng }}
      openPopup={selectedIndex === index}
    />
  ));
}

function PointMarker(props) {
  const markerRef = useRef(null);
  const { center, content, openPopup } = props;

  useEffect(() => {
    if (openPopup) markerRef.current.leafletElement.openPopup();
  }, [openPopup]);

  return (
    <CircleMarker ref={markerRef} center={center}>
      <Popup>{content}</Popup>
    </CircleMarker>
  );
}

function MapExample(props) {
  const [selected, setSelected] = useState();
  const { zoom, center, locations } = props;

  function handleItemClick(index) {
    setSelected(index);
  }

  return (
    <div>
      <MapContainer center={center} zoom={zoom}>
        <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <PointsLayer selectedIndex={selected} data={locations} />
      </MapContainer>
    </div>
  );
}

export default MapExample;
