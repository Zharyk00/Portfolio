import React, { useContext} from "react";
import { userContext } from "../../App";
import { motion } from "framer-motion";

function About() {
  const { title, setTitle } = useContext(userContext);
  return (
    <motion.div id="about" onViewportEnter={() => setTitle("About")}>
     <p>
      <code>const ={}</code>
     </p>
    </motion.div>
  );
}

export default About;
