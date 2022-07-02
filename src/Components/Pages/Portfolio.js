import React from "react";
import { motion } from "framer-motion";
import { BsEmojiSmileUpsideDown } from "react-icons/bs"
import '../../Styles/Projects/Projects.css'



function Portfolio() {

  return (
    <motion.div className="main-container">
      <motion.div className="title">My projects</motion.div>
      <motion.div className="content-work">
        Comming soon!
        <BsEmojiSmileUpsideDown className="icon" />
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
