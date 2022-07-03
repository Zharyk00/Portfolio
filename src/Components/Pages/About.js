import React from "react";
import "../../Styles/About/About.css"
import { motion } from "framer-motion";
import { social } from "../../Data/Datas";





function About() {
  return (
    <motion.div className="main-about">
      <motion.div className="text">
        <motion.div className="me">Who am I?</motion.div>
        <div className="text-about">
          I'm a <span className="emphasize">Web Developer</span> from Kyrgyzstan.
          I use my passion and skills to create <span className="emphasize">Cross-browser </span>
          and <span className="emphasize">Adaptive </span> products by using  various tools and animations.
          I'm going to be <span className="emphasize">Independent</span> employee with high attention to details.
        </div>
      </motion.div>
      <motion.div className="social-media">
        {social.map(items => <motion.div key={items.id} className="social-icons"  ><a href={items.path} target="_blank" style={{ color: items.color }}>{items.icon}</a></motion.div>)}
      </motion.div>
      <div className="level"><div>English :   Upper-intermediate</div></div>
    </motion.div >

  );
}

export default About;
