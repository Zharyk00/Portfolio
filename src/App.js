import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Skills from "./Components/Pages/Skills";
import SayHello from "./Components/Pages/SayHello";
import Projects from "./Components/Pages/Projects";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="hello" element={<SayHello />} />
        <Route path="skills" element={<Skills />} />
        <Route path="project" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
