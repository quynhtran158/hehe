import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/Home.css";
import HomeCarousel from "./HomeCarousel";
import Introduction from "./Introduction";
import SupportText from "./SupportText";
import SupportCard from "./SupportCard";

function Home() {
  useEffect(() => {
    function googleTranslateInit() {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_button'
      );
    }

    if (window.google) {
      googleTranslateInit();
    } else {
      // Load the Google Translate API script
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateInit';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="Home" id="Home">
      <div id="google_translate_button"></div>
      <Introduction />
      <HomeCarousel />
      <SupportText />
      <SupportCard />
    </section>
  );
}

export default Home;
