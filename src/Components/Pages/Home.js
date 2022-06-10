import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { userContext } from "../../App";
import "../../Styles/ComponentsStyles/homeStyle/HomePage.css";

function Home() {
  const { title, setTitle } = useContext(userContext);
  const [greet, setGreet] = useState("Hello");
  const [who, setWho] = useState("I am");
  const [name, setName] = useState("Zharyk");

  return (
    <motion.div
      className="main-page"
      onViewportEnter={() => setTitle("Home")}
      id="home"
    >
      <motion.div className="greet">
        <motion.h1
          style={{ color: "red" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{opacity: 1,y: 0, transition: { duration: 0.6, delay: 0.5 }, }}
          whileHover={{  x: 50, transition: { type: "spring", stiffness: 200 },}}
          onHoverStart={() => setGreet("World")}
          onHoverEnd={() => setGreet("Hello")}>
          {greet}
        </motion.h1>
        <motion.h1
          style={{ color: "white" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{opacity: 1,y: 0, transition: { duration: 0.6, delay: 1 },}}
          whileHover={{x: 50, transition: { type: "spring", stiffness: 200 }, }}
          onHoverStart={() => setWho("Web")}
          onHoverEnd={() => setWho("I am")}>
          {who}
        </motion.h1>
        <motion.h1
          style={{ color: "white" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.4 }, }}
          whileHover={{ x: 50, transition: { type: "spring", stiffness: 200 }, }}
          onHoverStart={() => setName("Developer")}
          onHoverEnd={() => setName("Zharyk")} >
          {name}
        </motion.h1>
      </motion.div>
      <motion.div className="me">
        About. The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most random word in English is aardvark. Of course, there's
        really no way to answer this question because its entirely based on
        opinion.The most rand
      </motion.div>
    </motion.div>
  );
}

export default Home;
