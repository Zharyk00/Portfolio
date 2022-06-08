import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../Styles/ComponentsStyles/skillsStyle/skills.css";
import LinearProgress from "@mui/material/LinearProgress";
import { flexbox } from "@mui/system";

function Skills() {
  const [progress, setProgress] = useState([
    { id: 1, languge: "Html", percent: "80%", color: "#D84924" },
    { id: 2, languge: "Css", percent: "75%", color: "#0271B3" },
    { id: "subCss", languge: "Sass", percent: "95%", color: "#C36192" },
    { id: "subCss", languge: "FlexBox", percent: "95%", color: "#2449D8" },
    { id: "subCss", languge: "CssGrid", percent: "98%", color: "#3460A6" },
    { id: "subCss", languge: "Animation", percent: "90%", color: "#DC5B5D" },
    { id: 3, languge: "JavaScript", percent: "60%", color: "#D99924" },
    { id: 4, languge: "React", percent: "70%", color: "#5CCFEE" },
    {
      id: "subReact",
      languge: "React-router-dom@6",
      percent: "80%",
      color: "#80BB44",
    },
    {
      id: "subReact",
      languge: "Framer-motion",
      percent: "70%",
      color: "#DD22CC",
    },
    { id: 5, languge: "Material-Ui", percent: "75%", color: "#007FFF" },
    { id: 6, languge: "Git", percent: "70%", color: "#841184" },
  ]);
  console.log(progress);

  return (
    <div id="skillsHash">
      <motion.div
        style={{
          width: "500px",
          height: 3,
          background: "grey",
          borderRadius: 10,
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          style={{ color: "red", height: 3, borderRadius: 10 }}
          whileInView={{
            width: "50%",
            background: "red",
            transition: { type: "tween", duration: 2, ease: "easeOut" },
          }}
        ></motion.div>
      </motion.div>
      <motion.h1>skill</motion.h1>
      The most random word in English is aardvark. Of course, there's really no
      way to answer this question because its entirely based on opinion. That
      being said, feel free to contact us if you think you know a more random
      word than aardvark.The most random word in English is aardvark. Of course,
      there's really no way to answer this question because its entirely based
      on opinion. That being said, feel free to contact us if you think you know
      a more random word than aardvark.The most random word in English is
      aardvark. Of course, there's really no way to answer this question because
      its entirely based on opinion. That being said, feel free to contact us if
      you think you know a more random word than aardvark.The most random word
      in English is aardvark. Of course, there's really no way to answer this to
      contact us if you think you know a more random word than aardvark.The
      question because its entirely based on opinion. That being said, feel free
      most random word in English is aardvark. Of course, there's really no way
      to answer this question because its entirely based on opinion. That being
      said, feel free to contact us if you think you know a more random word
      than aardvark.The most random word in English is aardvark. Of course,
      there's really no way to answer this question because its entirely based
      on opinion. That being said, feel free to contact us if you think you know
      a more random word than aardvark.The most random word in English is
      aardvark. Of course, there's really no way to answer this question because
      its entirely based on opinion. That being said, feel free to contact us if
      you think you know a more random word than aardvark.The most random word
      in English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion. That being said, feel free
      to contact us if you think you know a more random word than aardvark.The
      most random word in English is aardvark. Of course, there's really no way
      to answer this question because its entirely based on opinion. That being
      said, feel free to contact us if you think you know a more random word
      than aardvark.The most random word in English is aardvark. Of course,
      there's really no way to answer this question because its entirely based
      on opinion. That being said, feel free to contact us if you think you know
      a more random word than aardvark.The most random word in English is
      aardvark. Of course, there's really no way to answer this question because
      its entirely based on opinion. That being said, feel free to contact us if
      you think you know a more random word than aardvark. The most random word
      in English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.
    </div>
  );
}

export default Skills;
