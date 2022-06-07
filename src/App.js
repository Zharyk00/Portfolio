import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Skills from "./Components/Pages/Skills";
import SayHello from "./Components/Pages/SayHello";
import Projects from "./Components/Pages/Projects";
export const userContext = React.createContext();
function App() {
  const [posts, setPosts] = useState("Asan");
  useEffect(() => {
    (async function () {
      const data = await axios("https://jsonplaceholder.typicode.com/posts");
      // setPosts(data.data);
      // console.log(data);
    })();
  }, []);
  return (
    <div className="App">
      <userContext.Provider value={{ posts, setPosts }}>
        <Nav />
      </userContext.Provider>
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
