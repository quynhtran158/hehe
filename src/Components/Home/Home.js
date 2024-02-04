import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.css";
import HomeCarousel from "./HomeCarousel";
import Introduction from "./Introduction";
import Support from "./Support";

function Home() {
  return (
    <section className="Home" id="Home">
      <Introduction />
      <HomeCarousel />
      <Support />
    </section>
  );
}

export default Home;
