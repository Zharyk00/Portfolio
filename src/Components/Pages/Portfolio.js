import React from "react";
import { motion } from "framer-motion";
import { projects } from '../../Data/Datas'
import { Link } from "react-router-dom"
import '../../Styles/Projects/Projects.css'



function Portfolio() {

  return (
    <motion.div className="main-container">
      <motion.div className="title">My projects</motion.div>
      <motion.div className="items">{projects.map(items => <a href={items.path} target="_blank"><motion.div className="images"><img src="https://i.pinimg.com/1200x/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg" /><p>{items.name}</p></motion.div></a>)}</motion.div>
    </motion.div>
  );
}

export default Portfolio;
