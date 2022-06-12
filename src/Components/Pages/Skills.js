import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import "../../Styles/Skills/Skills.css";
import { userContext } from "../../App";
import { progress } from "../../Data/Datas";
function Skills() {
  const { title, setTitle } = useContext(userContext);
  
  return (
    <motion.div className="main-skills" onViewportEnter={() => setTitle("Skills")} id="skills">
      <motion.div
        className="progress"
        style={{ width: "100%",height: "600px",borderRadius: 10}}>
        {progress.map((item) => (
          <motion.div key={item.id} className="lines">
            {item.languge}
            <motion.div
              initial={{ width: item.initial }}
              style={{ height: 3, borderRadius: 10 }}
              whileInView={{ width: item.percent, backgroundColor: item.color,
              transition: { type: "tween",duration: 2,ease: "easeOut",delay: item.id,}}}
            ></motion.div>   
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
         
          
          
        
      
                
                
                 
                  
                  
                  
                
             
            