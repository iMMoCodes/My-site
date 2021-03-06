import React from "react";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <>
    <Navbar />
    <Welcome />
    <About />
    <Projects />
    <Contact />
    </>
  );
}

export default App;