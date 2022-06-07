import React, { useContext, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import "../../Styles/NavStyle/NavStyle.css";
import { motion } from "framer-motion";
import { linkMovements } from "../../Animations/Animation";
import { userContext } from "../../App";

function Nav() {
  const { posts, setPosts } = useContext(userContext);
  const { hidden1, visible1 } = linkMovements;
  const info = useRef();

  return (
    <motion.div className="main-nav">
      <Avatar alt="Remy Sharp" />

      <motion.div variants={linkMovements} className="links">
        <motion.div
          initial={hidden1}
          animate={visible1}
          whileHover={{
            scale: 1.2,
            y: -5,
          }}
        >
          <NavLink to="/">Home</NavLink>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 1.2,
              duration: 1.6,
              type: "spring",
              stiffness: 50,
            },
          }}
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <NavLink to="about">About</NavLink>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 1,
              duration: 1.6,
              type: "spring",
              stiffness: 50,
            },
          }}
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <NavLink to="skills">Skills</NavLink>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.8,
              duration: 1.6,
              type: "spring",
              stiffness: 50,
            },
          }}
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <NavLink to="project">Projects</NavLink>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.6,
              duration: 1.6,
              type: "spring",
              stiffness: 40,
            },
          }}
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <NavLink to="hello">SayHello</NavLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
