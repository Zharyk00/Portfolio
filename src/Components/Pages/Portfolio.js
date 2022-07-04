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
        <div className="titles">Experience:   <span className="mark">1 year</span></div>
        <div className="titles">Studied at:   <span className="mark">itpark_osh</span></div>
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
