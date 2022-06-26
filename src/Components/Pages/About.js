import React from "react";
import "../../Styles/About/About.css"
import { motion } from "framer-motion";
import { social } from "../../Data/Datas";
import { Link } from "react-router-dom"




function About() {
  return (
    <motion.div className="main-about">
      <motion.div className="text">
        <motion.div className="me">Who am I?</motion.div>
        I'm a Web Developer from Kyrgyzstan.
        I use my passion and skills to create amazing
        and digital products by using  various tools and animations.
        I'm going to be Independent employee with high attention to details
      </motion.div>
      <motion.div className="social-media">
        {social.map(items => <motion.div key={items.id} className="social-icons"  ><a href={items.path} target="_blank" style={{ color: items.color }}>{items.icon}</a></motion.div>)}
      </motion.div>
    </motion.div >

  );
}

export default About;
