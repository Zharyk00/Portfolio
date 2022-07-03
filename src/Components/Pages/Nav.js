import React, { Fragment } from "react";
import "../../Styles/Nav/Nav.css";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { menu } from "../../Data/Datas";

function Nav() {



  return (

    <motion.div className="main-nav">
      <motion.div className="links">
        <div className="effect"></div>
        <div className="about-me">
          <motion.div className="avatar"></motion.div>
          <motion.div className="name">
            Zharyk Bekmamatov<br /><small>Web Developer</small>
          </motion.div>
        </div>
        {menu.map((items) => {
          return (
            <motion.div
              key={items.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: items.delay, duration: 1.6, type: "spring", stiffness: 50 } }}
            >
              <NavLink to={items.path}>
                <motion.div className="icons">{items.links}</motion.div>
              </NavLink>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className="content">
        <Outlet />
      </motion.div>
    </motion.div>


  );
}

export default Nav;
