import "./App.css";
import Header from "./header";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { green } from "@mui/material/colors";

function App() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: "#f0f0f0",
            height: "120vh",
          }}
        >
          <Header />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
