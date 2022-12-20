import React, { Fragment } from "react";
import { motion } from "framer-motion";
import "../../Styles/Skills/Skills.css";
import { Back, Front, Others } from "../../Data/Datas";
function Skills() {

  return (
    <Fragment>
      <p id="skills" className="title">Languages I speak</p>
      <div className="main-skills" id="skills">
        <div className="front">
          <article className="front_block">
            <p style={{ display: 'grid', placeContent: 'center', color: 'white' }}>Front-end</p>
            <div className="front_first_line">
              <motion.div
                className="front_second_line"
                initial={{ width: '3%' }}
                animate={{
                  width: '65%', backgroundColor: '#D84924',
                  transition: { type: "tween", duration: 2, ease: "easeOut", delay: 0.1 }
                }}>
              </motion.div></div>
          </article>
          <article className="skill_lists">
            {Front.map(front => (
              <section className="skills">
                <div style={{ fontSize: '25px', color: front.color }}>{front.icon}</div>
                <p style={{ color: '#DBB287' }}>{front.skill}</p>
              </section>
            ))}
          </article>

        </div>

        <div className="back">
          <article className="back_block">
            <p style={{ display: 'grid', placeContent: 'center', color: 'white' }}>Back-End</p>
            <div className="back_first_line">
              <motion.div
                className="back_second_line"
                initial={{ width: '3%' }}
                animate={{
                  width: '40%', backgroundColor: '#D84924',
                  transition: { type: "tween", duration: 2, ease: "easeOut", delay: 0.1 }
                }}>
              </motion.div></div>
          </article>
          <article className="skill_lists">
            {Back.map(front => (
              <section className="skills">
                <div style={{ fontSize: '25px', color: front.color }}>{front.icon}</div>
                <p style={{ color: '#DBB287' }}>{front.skill}</p>
              </section>
            ))}
          </article><br />


          <article className="back_block">
            <p style={{ display: 'grid', placeContent: 'center', color: 'white', marginBottom: '20px' }}>Others</p>
            <div className="back_first_line" style={{ marginBottom: '20px' }}>
              <motion.div

                className="back_second_line"
                initial={{ width: '3%' }}
                animate={{
                  width: '60%', backgroundColor: '#D84924',
                  transition: { type: "tween", duration: 2, ease: "easeOut", delay: 0.1 }
                }}>
              </motion.div></div>
          </article>
          <article className="skill_lists">
            {Others.map(front => (
              <section className="skills">
                <div style={{ fontSize: '25px', color: front.color }}>{front.icon}</div>
                <p style={{ color: '#DBB287' }}>{front.skill}</p>
              </section>
            ))}
          </article>

        </div>


      </div>
    </Fragment>
  );
}

export default Skills;
