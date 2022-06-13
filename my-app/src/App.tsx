import "./App.css";
import Header from "./header";
import Main from "./Main";

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
        <Header />
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: "#ffffff",
            height: "100vh",
          }}
        >
          <Main />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
