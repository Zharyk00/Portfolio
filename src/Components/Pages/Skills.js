import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import "../../Styles/ComponentsStyles/skillsStyle/skills.css";
import { userContext } from "../../App";

function Skills() {
  const { title, setTitle } = useContext(userContext);
  const [rate, setRate] = useState(0);
  const [progress, setProgress] = useState([
    {
      id: 0.1,
      initial: 3,
      languge: "Html",
      percent: "80%",
      rate: 80,
      color: "#D84924",
    },
    {
      id: 0.2,
      initial: 3,
      languge: "Css",
      percent: "75%",
      rate: 75,
      color: "#0271B3",
    },
    {
      id: 0.3,
      initial: 3,
      subC: "subCss",
      languge: "Sass",
      percent: "95%",
      rate: 95,
      color: "#C36192",
    },
    {
      id: 0.4,
      initial: 3,
      subC: "subCss",
      languge: "FlexBox",
      percent: "95%",
      rate: 95,
      color: "#2449D8",
    },
    {
      id: 0.5,
      initial: 3,
      subC: "subCss",
      languge: "CssGrid",
      percent: "98%",
      rate: 98,
      color: "#3460A6",
    },
    {
      id: 0.6,
      initial: 3,
      subC: "subCss",
      languge: "Animation",
      percent: "90%",
      rate: 90,
      color: "#DC5B5D",
    },
    {
      id: 0.7,
      initial: 3,
      languge: "JavaScript",
      percent: "60%",
      rate: 60,
      color: "#D99924",
    },
    {
      id: 0.8,
      initial: 3,
      languge: "React",
      percent: "70%",
      rate: 70,
      color: "#5CCFEE",
    },
    {
      id: 0.9,
      initial: 3,
      subR: "subReact",
      languge: "ReactRouterDom@6",
      percent: "80%",
      rate: 80,
      color: "#80BB44",
    },
    {
      id: 1,
      initial: 3,
      subR: "subReact",
      languge: "FramerMotion",
      percent: "70%",
      rate: 70,
      color: "#DD22CC",
    },
    {
      id: 1.1,
      initial: 3,
      languge: "MaterialUi",
      percent: "75%",
      rate: 75,
      color: "#007FFF",
    },
    {
      id: 1.01,
      initial: 3,
      languge: "Git",
      percent: "70%",
      rate: 70,
      color: "#841184",
    },
  ]);

  return (
    <motion.div onViewportEnter={() => setTitle("Skills")} id="skillsHash">
      <motion.div
        className="progress"
        style={{
          width: "500px",
          height: "600px",
          borderRadius: 10,
        }}
      >
        {progress.map((item) => (
          <div key={item.id}>
            {item.languge}
            <motion.div
              initial={{ width: item.initial }}
              style={{ height: 3, borderRadius: 10 }}
              whileInView={{
                width: item.percent,
                backgroundColor: item.color,
                transition: {
                  type: "tween",
                  duration: 2,
                  ease: "easeOut",
                  delay: item.id,
                },
              }}
            ></motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;
