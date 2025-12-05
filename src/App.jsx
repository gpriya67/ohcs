import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Cases from "./pages/Cases";
import Certification from "./pages/certification";
import Achievements from "./pages/Achievements";
import Enquiry from "./pages/Enquiry";
import Navbar from "./component/Navbar";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>

      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="cases">
        <Cases />
      </div>

      <div id="certification">
        <Certification />
      </div>

      <div id="achievements">
        <Achievements />
      </div>

      <div id="enquiry">
        <Enquiry />
      </div>

      <Footer />

    </div>
  );
};

export default App;
