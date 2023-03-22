import React from "react";
import "./App.scss";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Benefits from "./Components/Benefits/Benefits";
import Network from "./Components/Network/Network";
import Service from "./Components/Service/Service";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Benefits />
      <Network />
    </div>
  );
}

export default App;
