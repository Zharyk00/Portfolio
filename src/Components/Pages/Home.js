import React, { useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import "../../Styles/ComponentsStyles/homeStyle/HomePage.css";
import { displayName } from "../../Animations/Animation";
import WBIcon from "../../Svg/WBIcon";
import Projects from "./Projects";
import SayHello from "./SayHello";
import Skills from "./Skills";
import About from "./About";

function Home() {
  const delay = useMotionValue([1]);
  const { hidden, visible } = displayName;
  const [greet, setGreet] = useState("Hello");
  const [who, setWho] = useState("I am");
  const [name, setName] = useState("Zharyk");

  return (
    <div className="main-page" id="homeHash">
      <motion.div className="greet">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            color: "red",
            transition: { duration: 0.5, delay: 0.5 },
          }}
          whileHover={{
            x: 50,
            transition: { type: "spring", stiffness: 200 },
          }}
          onHoverStart={() => setGreet("World")}
          onHoverEnd={() => setGreet("Hello")}
        >
          {greet}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            color: "white",
            transition: { duration: 0.3, delay: 0.2 },
          }}
          whileHover={{
            x: 50,
            transition: { type: "spring", stiffness: 200 },
          }}
          onHoverStart={() => setWho("Web")}
          onHoverEnd={() => setWho("I am")}
        >
          {who}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            color: "white",
            transition: { duration: 0.5, delay: 1.5 },
          }}
          whileHover={{
            x: 50,
            transition: { type: "spring", stiffness: 200 },
          }}
          onHoverStart={() => setName("Developer")}
          onHoverEnd={() => setName("Zharyk")}
        >
          {name}
        </motion.h1>
      </motion.div>
      <motion.div className="me">
        {/* <WBIcon fill="red" width="300" height="300" color="red" /> */}
      </motion.div>
      <About />
      <Projects />
      <SayHello />
      <Skills />
    </div>
  );
}

export default Home;
