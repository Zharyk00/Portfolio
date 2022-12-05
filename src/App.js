import React, { FC } from "react";
import { motion } from "framer-motion";
import "../src/Styles/App/App.css";
import Nav from "./Components/Pages/Nav";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Skills from "./Components/Pages/Skills";
import Portfolio from "./Components/Pages/Portfolio";
import Footer from "./Components/Pages/Footer";
export const userContext = React.createContext();
const App = () => {
  return (
    <motion.div className="App">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </motion.div >
  );
}

export default App;
