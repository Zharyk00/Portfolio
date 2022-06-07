import React from "react";
import { motion, useMotionValue } from "framer-motion";
import "../../Styles/ComponentsStyles/HomePage.css";
import { displayName } from "../../Animations/Animation";
import WBIcon from "../../Svg/WBIcon";

function Home() {
  const delay = useMotionValue([1]);
  const { hidden, visible } = displayName;

  return (
    <div className="main-page">
      <motion.div className="greet">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          Hello
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            color: "red",
            transition: { duration: 0.3, delay: 0.2 },
          }}
        >
          I am
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 1.5 },
          }}
        >
          Zharyk
        </motion.h1>
      </motion.div>
      <motion.div className="me">
        {/* <WBIcon fill="red" width="300" height="300" color="red" /> */}
      </motion.div>
    </div>
  );
}

export default Home;
