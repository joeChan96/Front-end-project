import * as React from "react";
import Leaflet from "./leaflet";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function displayMap(turnOn: boolean) {
  if (turnOn) {
    return { display: "inline" };
  } else {
    return { display: "none" };
  }
}

export default function Main() {
  const [turnOn, setTurnOn] = React.useState(true);

  function handleClick() {
    setTurnOn((prevTurnOn) => {
      return !prevTurnOn;
    });
    displayMap(turnOn);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container id="search-part" spacing={2}>
        <Grid item xl={4} sx={displayMap(turnOn)}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-search"
              label="Search heritage by name or district"
              type="search"
              variant="standard"
            />
          </Box>
        </Grid>
        <Grid item xl={8} sx={displayMap(turnOn)}>
          <Item>
            <Leaflet />
          </Item>
        </Grid>
      </Grid>
      {/* <button onClick={handleClick}>test</button> */}
    </Box>
  );
}
