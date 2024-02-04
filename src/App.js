import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
