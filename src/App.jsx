import React from "react";

import Banner from "./componnents/Banner/Banner";
import Bio from "./componnents/Bio/Bio";

import Footer from "./componnents/Footer/Footer";
import Form from "./componnents/Form/Form";
import Navbar from "./componnents/Navbar/Navbar";
import Portfolio from "./componnents/Portfolio/Portfolio";
import Projects from "./componnents/Projects/Projects";
import Questions from "./componnents/Questions/Questions";
import Work from "./componnents/Work/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <Projects />
      <Bio />
      <Portfolio />
      <Questions />
      <Form />
      <Footer />
    </>
  );
};

export default App;
