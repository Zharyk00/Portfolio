import React, { useState } from "react";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Skills from "./Components/Pages/Skills";
import SayHello from "./Components/Pages/SayHello";
import Projects from "./Components/Pages/Projects";
export const userContext = React.createContext();
function App() {
  const [title, setTitle] = useState("Home");
  return (
    <motion.div className="App">
      <userContext.Provider value={{ title, setTitle }}>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <SayHello />
      </userContext.Provider>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="hello" element={<SayHello />} />
        <Route path="skills" element={<Skills />} />
        <Route path="project" element={<Projects />} />
      </Routes>
    </motion.div>
  );
}

export default App;
