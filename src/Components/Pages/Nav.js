import React, { Fragment } from "react";
import "../../Styles/Nav/Nav.css";
import { motion } from "framer-motion";
import { Link as NavLink } from "react-scroll";
import { menu } from "../../Data/Datas";

function Nav() {



  return (

    <motion.div className="main-nav">
      <header>
        Full Stack Developer
      </header>
      <div className="shadow">
        {menu.map((items) => {
          return (
            <motion.div
              key={items.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { delay: items.delay, duration: 1.6, type: "spring", stiffness: 50 } }}
            >
              <NavLink to={items.path} spy={true} duration={500} offset={-100} smooth={true}>
                <motion.div className="icons">{items.links}</motion.div>
              </NavLink>
            </motion.div>
          );
        })}
      </div>

    </motion.div >


  );
}

export default Nav;
