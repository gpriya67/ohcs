import React from "react";
import { Element } from "react-scroll";

import Home from "./pages/Home";
import About from "./pages/About";
import Cases from "./pages/Cases";

import Certification from "./pages/Certification";
import Achievements from "./pages/Achievements";
import Enquiry from "./pages/Enquiry";
import Navbar from "./component/Navbar";
import Footer from "./pages/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Navbar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="cases">
        <Cases />
      </Element>

      <Element name="certification">
        <Certification />
      </Element>

      <Element name="achievements">
        <Achievements />
      </Element>

      <Element name="enquiry">
        <Enquiry />
      </Element>

      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1000,
        }}
      />
    </div>
  );
};

export default App;
