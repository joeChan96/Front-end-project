import "./App.css";
import "./components/maincontent.css";
import MainContent from "./components/maincontent";
// import NavPage from "./components/navPage";
import Weather from "./components/weather";
import Contact from "./components/contact";

import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import Box, { BoxProps } from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./App.css";
import "./components/navPage.css";

function Item(props: BoxProps) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        fontSize: "3.5rem",
        fontWeight: "700",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "500",
        height: "100",
        // bgcolor: "#5BC0BE",
        ...sx,
      }}
      {...other}
    />
  );
}

function App() {
  const [value, setValue] = useState("recents");

  const [checked, setChecked] = useState<boolean>(false);

  const [checkedContact, setCheckedContact] = useState(false);

  const [checkedMain, setCheckedMain] = useState(false);

  const [show, setShow] = useState(true);

  const [fadeContact, setFadeContact] = useState(false);

  function handleChange() {
    setCheckedMain(true);
    setChecked(true);
    setShow(false);
    setCheckedContact(false);
  }

  function handleChangeContact() {
    setCheckedMain(false);
    setChecked(false);
    setShow(false);
    setCheckedContact(true);
    setFadeContact(true);
  }

  function changeValue(event, newValue) {
    setValue(newValue);
  }

  const itemData = [
    {
      img: "./heritagePhoto/bird.jpg",
      title: "Bird",
    },
    {
      img: "./heritagePhoto/teahouse.jpg",
      title: "Tea House",
    },
    {
      img: "./heritagePhoto/catholic.jpg",
      title: "Catholic",
    },

    {
      img: "./heritagePhoto/kowlooncity.jpg",
      title: "Kowloon City",
    },
    {
      img: "./heritagePhoto/cheunghole.jpg",
      title: "Cheung's hole",
    },
    {
      img: "./heritagePhoto/hkjaimarket.jpg",
      title: "Aberdeen market",
    },
  ];

  function gotomainpage() {
    window.location.href = "http://joeChan96.github.io/hkyeahheritage/";
  }

  return (
    <div>
      <CssBaseline />

      <Container maxWidth="xl">
        {/* Navigation bar */}

        {/* 1st nav part */}
        <nav>
          <AppBar position="static">
            <Container
              maxWidth="xl"
              sx={{
                width: "100%",
                bgcolor: "#3a506b",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: 160,
                  pt: "1%",
                  pb: "1%",
                  cursor: "pointer",
                }}
                alt="HKYEAH HERITAGE"
                src="./hky.png"
                onClick={gotomainpage}
              />

              <Weather />
            </Container>
          </AppBar>
        </nav>

        {/* 2nd navpart */}
        <BottomNavigation showLabels value={value} onChange={changeValue}>
          <BottomNavigationAction
            label="Search Heritage"
            onClick={handleChange}
          />

          <BottomNavigationAction
            label="Contact us"
            onClick={handleChangeContact}
          />
        </BottomNavigation>

        {/* Nav Page */}

        {show && (
          <div style={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                pt: 5,
                height: 200,
              }}
            >
              <Item sx={{ pt: "20%", height: "100%" }}>
                <Box sx={{ "& button": { m: 1 } }}>
                  <div>Welcome to</div>
                  <div className="logotext">HKYEAH HERITAGE</div>
                  <Button
                    variant="contained"
                    sx={{ width: "50%", height: 50 }}
                    onClick={handleChange}
                  >
                    Start to Search
                  </Button>
                </Box>
              </Item>
              <Item>
                <ImageList
                  sx={{ width: "90%", height: "100%" }}
                  variant="woven"
                  cols={3}
                  gap={8}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img src={item.img} alt={item.title} loading="lazy" />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Item>
            </Box>

            {/* <MainContent show={show} checked={checked} /> */}
          </div>
        )}

        {checkedMain && <MainContent checked={checked} />}

        {checkedContact && <Contact checked={fadeContact} />}
      </Container>
    </div>
  );
}

export default App;
