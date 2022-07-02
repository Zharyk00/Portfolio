import React from "react";
import { Routes, Route } from 'react-router-dom'
import { motion } from "framer-motion";
import "../src/Styles/App/App.css";
import Nav from "./Components/Pages/Nav";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Skills from "./Components/Pages/Skills";
import Portfolio from "./Components/Pages/Portfolio";
export const userContext = React.createContext();
function App() {
  return (
    <motion.div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/hello" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/work" element={<Portfolio />}></Route>
        </Route>
      </Routes>
    </motion.div>
  );
}

export default App;
