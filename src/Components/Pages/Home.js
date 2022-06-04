import React from "react";
import { motion, useMotionValue } from "framer-motion";
import "../../Styles/ComponentsStyles/HomePage.css";
import { displayName } from "../../Animations/Animation";

function Home() {
  const delay = useMotionValue([1]);
  const { hidden, visible } = displayName;

  return (
    <div className="main-page">
      <motion.div className="greet">
        <motion.div className="hi">
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.3,
            }}
            className="letters"
          >
            H
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.4,
            }}
            className="letters"
          >
            i
          </motion.h1>
          <br />
          <br />
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.5,
            }}
            className="letters"
          >
            t
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.6,
            }}
            className="letters"
          >
            h
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.7,
            }}
            className="letters"
          >
            e
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.8,
            }}
            className="letters"
          >
            r
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 0.9,
            }}
            className="letters"
          >
            e
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 0.9,
              easy: "easyout",
              delay: 1,
            }}
            className="letters"
          >
            !
          </motion.h1>
        </motion.div>
        <motion.div className="name">
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.1,
            }}
            className="letters"
          >
            I
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1.1,
              easy: "easyout",
              delay: 1.2,
            }}
            className="letters"
          >
            a
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.3,
            }}
            className="letters"
          >
            m
          </motion.h1>
          <br />
          <br />
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.4,
            }}
            className="letters"
          >
            Z
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.5,
            }}
            className="letters"
          >
            h
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.6,
            }}
            className="letters"
          >
            a
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.7,
            }}
            className="letters"
          >
            r
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.8,
            }}
            className="letters"
          >
            y
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 1.9,
            }}
            className="letters"
          >
            k
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 2,
            }}
            className="letters"
          >
            .
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 2.1,
            }}
            className="letters"
          >
            .
          </motion.h1>
          <motion.h1
            initial={hidden}
            animate={visible}
            transition={{
              type: "tween",
              duration: 1,
              easy: "easyout",
              delay: 2.2,
            }}
            className="letters"
          >
            .
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className="me"></motion.div>
    </div>
  );
}

export default Home;
