import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import CW from "./Components/Map/C&W/CW";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CW />
    </div>
  );
}

export default App;
