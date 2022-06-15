import "./App.css";
import Header from "./header";
import Main from "./Main";
import Weather from "./weather";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { green } from "@mui/material/colors";

function App() {
  return (
    <div>
      <CssBaseline />

      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#ffffff",
          height: "100vh",
        }}
      >
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;
