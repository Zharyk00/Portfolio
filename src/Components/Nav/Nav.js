import React, { useContext, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
// import { NavLink } from "react-router-dom";
import "../../Styles/NavStyle/NavStyle.css";
import { motion } from "framer-motion";
import { linkMovements } from "../../Animations/Animation";
import { userContext } from "../../App";
import { NavHashLink as NavLink } from "react-router-hash-link";
function Nav() {
  const { posts, setPosts } = useContext(userContext);
  const { hidden1, visible1 } = linkMovements;
  const info = useRef();

  return (
    <motion.div className="main-nav" id="blur">
      <motion.div className="avatar">
        <motion.svg
          drag
          dragConstraints={{ left: 0, right: 300 }}
          width="80"
          height="50"
          viewBox="0 0 488 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="finaly">
            <g id="Line 1" filter="url(#filter0_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                  },
                }}
                d="M17.8921 149.989L178.167 61.4533"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
            <g id="Line 3" filter="url(#filter1_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 2,
                  },
                }}
                d="M183.611 291.455L305.455 9.38948"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
            <g id="Line 5" filter="url(#filter2_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                  },
                }}
                d="M470.108 149.011L309.833 237.547"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
            <g id="Line 2" filter="url(#filter3_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 1,
                  },
                }}
                d="M178.209 237.687L16.687 151.791"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
            <g id="Line 4" filter="url(#filter4_b_4_13)">
              <motion.path
                initial={{ rotate: 180, opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: 1,
                  pathLength: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 1,
                  },
                }}
                d="M309.791 61.3129L471.313 147.209"
                stroke="#00BDE7"
                strokeWidth="15"
                strokeLinecap="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_b_4_13"
              x="7.35668"
              y="50.9179"
              width="181.346"
              height="109.606"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_b_4_13"
              x="173.075"
              y="-1.14635"
              width="142.916"
              height="303.137"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_b_4_13"
              x="299.297"
              y="138.476"
              width="181.346"
              height="109.606"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_b_4_13"
              x="6.15156"
              y="141.255"
              width="182.593"
              height="106.967"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_b_4_13"
              x="299.255"
              y="50.7775"
              width="182.593"
              height="106.967"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2.01709" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_4_13"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_4_13"
                result="shape"
              />
            </filter>
          </defs>
        </motion.svg>
      </motion.div>

      <motion.div variants={linkMovements} className="links">
        <motion.div
          initial={hidden1}
          animate={visible1}
          whileHover={{
            scale: 1.2,
            y: -5,
          }}
        >
          <NavLink to="#homeHash" smooth>
            Home
          </NavLink>
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
          <NavLink to="#aboutHash" smooth>
            About
          </NavLink>
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
          <NavLink to="#skillsHash" smooth activeClassName="selected">
            Skills
          </NavLink>
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
          <NavLink
            to="#projectHash"
            smooth
            activeClassName="selected"
            activeStyle={{ color: "red" }}
          >
            Projects
          </NavLink>
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
          <NavLink to="#sayHash" smooth>
            SayHello
          </NavLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
