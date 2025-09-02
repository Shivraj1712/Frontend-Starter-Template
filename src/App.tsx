import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FlexBox from "./components/FlexBox";
import GridSystem from "./components/GridSystem";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FlexBox />
      <GridSystem />
      <Footer />
    </>
  );
};

export default App;
