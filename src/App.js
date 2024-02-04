import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Disability from "./Components/Map/Disability/Disability";
import Footer from "./Components/Footer/Footer";
import Booking from "./Components/Booking/Booking";
import CW from "./Components/Map/C&W/CW";
import ContactUs from "./Components/ContactUs/ContactUs";
import Mentor from "./Components/Booking/Mentor";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Disability" element={<Disability />} />
          <Route path="/CW" element={<CW />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
