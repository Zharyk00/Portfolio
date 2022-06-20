import React from "react";
import { motion } from "framer-motion";
import "../../Styles/Skills/Skills.css";
import { skills } from "../../Data/Datas";
function Skills() {

  return (
    <motion.div className="main-skills">
      {skills.map((item) => (
        <motion.div key={item.id} className="lines" style={{ width: "100%", height: "20px", borderRadius: 10 }}>
          <motion.div
            initial={{ width: item.initial }}
            style={{ height: '100%', borderRadius: 10 }}
            whileInView={{
              width: item.percent, backgroundColor: item.color,
              transition: { type: "tween", duration: 2, ease: "easeOut", delay: item.id, }
            }}
          >{item.languge}</motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Skills;




