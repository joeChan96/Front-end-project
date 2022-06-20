import "./maincontent.css";
import Weather from "./weather";
import Leaflet from "./leaflet";
import heritageInfo from "./heritageInfo";

import * as React from "react";
import { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Fade from "@mui/material/Fade";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
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

const MainContent = () => {
  const [value, setValue] = useState("recents");

  // const [turnOn, setTurnOn] = React.useState(true);

  // For transition
  const [checked, setChecked] = useState<boolean>(false);

  const [result, setResult] = useState("");

  function handleChange() {
    setChecked(true);
  }

  function searchResult(e) {
    e.preventDefault();
    setResult(e.target.value);
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
          onClick={() => handleItemClick(heritage.name)}
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

  function handleItemClick(name) {
    // e.preventDefault();
    return name;
  }

  return (
    <div>
      <nav>
        {/* 1st nav part */}

        <AppBar position="static">
          <Container className="header" maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img className="logo" src="onjj.png" />
              </Typography>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>

              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              ></Box>

              <Box sx={{ flexGrow: 0 }}></Box>
              <Weather />
            </Toolbar>
          </Container>
        </AppBar>

        {/* 2nd navpart */}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Search Heritage"
            onClick={handleChange}
          />
          <BottomNavigationAction label="Cycling Path" />
          <BottomNavigationAction label="About us" />
        </BottomNavigation>
      </nav>

      {/* Main Content */}
      <Fade in={checked}>
        <main>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {/* Search field */}
              <Grid
                item
                xl={4}
                sx={{ height: "75%" }} /*sx={displayMap(turnOn)}*/
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  {/* Search part */}

                  <TextField
                    id="standard-search"
                    label="Search heritage by name or district"
                    type="search"
                    // variant="standard"
                    value={result}
                    onChange={searchResult}
                  />
                </Box>

                <List
                  sx={{
                    width: "100%",
                    // maxWidth: 360,
                    maxHeight: 570,
                    bgcolor: "background.paper",
                    overflow: "auto",
                    // display: "none",
                  }}
                >
                  {heritageList}
                </List>
              </Grid>
              <Grid item xl={8} /*sx={displayMap(turnOn)}*/>
                <Item>
                  <Leaflet />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </main>
      </Fade>
    </div>
  );
};
export default MainContent;
