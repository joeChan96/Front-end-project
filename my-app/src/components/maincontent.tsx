import "./maincontent.css";
// import NavPage from "./navPage";

import Leaflet from "./leaflet";
import heritageInfo from "./heritageInfo";

// import MapExample from "./mapExample";

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fade from "@mui/material/Fade";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MainContent = ({ checked }) => {
  const [selected, setSelected] = useState();

  const [result, setResult] = useState("");

  const [popup, setPopup] = useState(true);

  function searchResult(event) {
    event.stopPropagation();
    event.preventDefault();
    setPopup(false);
    setResult(event.target.value);
  }

  function onItemClick(id) {
    setSelected(id);
  }

  const heritageList = heritageInfo
    .filter((heritage) => {
      if (result == "") {
        return heritage;
      } else if (heritage.name.toLowerCase().includes(result.toLowerCase())) {
        return heritage;
      } else if (
        heritage.district.toLowerCase().includes(result.toLocaleLowerCase())
      ) {
        return heritage;
      }
    })
    .map((heritage, index) => {
      return (
        <ListItem
          alignItems="flex-start"
          key={index}
          onClick={(e) => {
            onItemClick(heritage.id);
            setPopup(true);
          }}
          className="list"
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={heritage.img} />
          </ListItemAvatar>
          <ListItemText
            primary={heritage.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="#bfbdbd"
                >
                  {heritage.district}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      );
    });

  return (
    <Fade in={checked}>
      <div>
        <main>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {/* Search field */}
              <Grid item xl={4} sx={{ height: "100%" }}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "95%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  {/* Search part */}

                  <TextField
                    // id="standard-search"
                    label="Search heritage by name or district"
                    // type="search"
                    // variant="standard"
                    value={result}
                    onChange={searchResult}
                  />
                </Box>

                <List
                  sx={{
                    width: "100%",
                    // maxWidth: 360,
                    maxHeight: "100vh",
                    bgcolor: "background.paper",
                    overflow: "auto",

                    // display: "none",
                  }}
                >
                  {heritageList}
                </List>
              </Grid>
              <Grid item xl={8} sx={{ height: "100%" }}>
                <Item>
                  <Leaflet id={selected} changePopup={popup} />
                  {/* <MapExample
                    zoom={4}
                    center={{ lat: 22.37, lng: 114.135 }}
                    locations={heritageInfo}
                  /> */}
                </Item>
              </Grid>
            </Grid>
          </Box>
          {/* <InfoPage /> */}
        </main>
      </div>
    </Fade>
  );
};
export default MainContent;
