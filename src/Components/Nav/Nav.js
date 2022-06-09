import React, { useContext, useRef, useState } from "react";
import "../../Styles/NavStyle/NavStyle.css";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { userContext } from "../../App";

function Nav() {
  const { title, setTitle } = useContext(userContext);
  const [header, setHeader] = useState("Home");

  return (
    <motion.div className="main-nav" id="blur">
      <motion.h1>{title}</motion.h1>
      <motion.div className="links">
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
          whileHover={{
            scale: 1.2,
            y: -5,
          }}
        >
          <HashLink
            to="#homeHash"
            scroll={(el) => {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              setTitle("Home");
            }}
            smooth
          >
            Home
          </HashLink>
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
          <HashLink
            to="#aboutHash"
            scroll={(el) => {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              setTitle("About");
            }}
          >
            About
          </HashLink>
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
          <HashLink
            scroll={(el) => {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              setTitle("Skills");
            }}
            to="#skillsHash"
          >
            Skills
          </HashLink>
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
          <HashLink
            to="#projectHash"
            scroll={(el) => {
              el.scrollIntoView({ behavior: "smooth", block: "center" });
              setTitle("Project");
            }}
          >
            Projects
          </HashLink>
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
          <HashLink
            to="#sayHash"
            scroll={(el) => {
              el.scrollIntoView({ behavior: "smooth", block: "end" });
              setTitle("SayHello");
            }}
          >
            SayHello
          </HashLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
