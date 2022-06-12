import React, { useContext} from "react";
import "../../Styles/Nav/Nav.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { userContext } from "../../App";
import { menu } from "../../Data/Datas";

function Nav() {
  const { title } = useContext(userContext);
  

  return (
    <motion.div className="main-nav" id="blur">
      <motion.h2 className="title">{title}</motion.h2>
      <motion.div className="links">
        {menu.map((items) => {
          return (
            <motion.div
              key={items.id}
              initial={{ x: -100, opacity: 0 }}
              animate={{x: 0, opacity: 1, transition: { delay: items.delay,duration: 1.6, type: "spring",stiffness: 50} }}
              whileHover={{  scale: 1.1,y: -5, cursor:'pointer' }}
              whileTap={{ scale: 0.8 }}>
              <Link to={items.path} spy={true} smooth="easeInOutQuint" offset={-90} duration={500} activeClass="active">
                {items.links}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

    </motion.div>
  );
}

export default Nav;
