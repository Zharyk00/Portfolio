import React from "react";
import "../../Styles/About/About.css"
import { motion } from "framer-motion";



function About() {
  return (
    <motion.div className="main-about">
      <motion.div className="image"></motion.div>
      <motion.div className="main-text">
        <motion.div className="text">
          <motion.div className="me">Who <span style={{ color: 'red' }}>am I</span> ?</motion.div>
          <motion.p><motion.span ><motion.span>About:</motion.span></motion.span>
            I'm a Web Developer from Kyrgyzstan <br /><br /><motion.span >Me:</motion.span> I use my passion and skills to create
            <motion.span>amazing</motion.span>
            and <motion.span>digital</motion.span> products by using  various tools and animations.<br /><br />
            Striving: I'm going to be Independent employee with high attention to details.
          </motion.p>
        </motion.div>
      </motion.div >


    </motion.div>
  );
}

export default About;
