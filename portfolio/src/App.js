import React from "react";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  return (
    <>
    <Navbar />
    <Welcome />
    <About />
    <Projects />
    </>
  );
}

export default App;