import "./App.css";
import MapWrapper from "./MapWrapper";
import Navpart from "./Navigation";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <Navpart />
      <MapWrapper />
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
