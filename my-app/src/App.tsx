import "./App.css";
import MainContent from "./maincontent";
// import Main from "./Main";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";

function App() {
  return (
    <div>
      <CssBaseline />

      <Container
        maxWidth={false}
        sx={{
          bgcolor: "#ffffff",
          height: "100%",
          width: "100%",
        }}
      >
        <MainContent />
      </Container>
    </div>
  );
}

export default App;
