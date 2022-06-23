import React, { useState, useRef, useEffect, createRef } from "react";
import heritageInfo from "./heritageInfo";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import "./leaflet.css";

import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function Leaflet({ id }) {
  const [map, setMap] = useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          Visiting time: {heritage.visiting_time}
          {heritage.visiting_time < 2 ? " hour" : " hours"}
        </div>
        <br />
        <div>
          <Button variant="outlined" sx={{ p: "5" }} onClick={handleClickOpen}>
            Learn More...
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              {heritage.name}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>{heritage.description}</Typography>
              <Typography gutterBottom sx={{ pt: 3 }}>
                <b>Address:</b> {heritage.address}
              </Typography>
              <Typography gutterBottom>
                <b>Opening hours:</b> {heritage.opening_hours}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Understand
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
    );

    return (
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
