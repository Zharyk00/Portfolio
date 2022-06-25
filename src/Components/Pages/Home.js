import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material'
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik"
import "../../Styles/Home/Home.css";
import * as Yup from 'yup'
function Home() {
  const form = useRef();
  const [greet, setGreet] = useState("Hello");
  const [who, setWho] = useState("I am");
  const [name, setName] = useState("Zharyk");

  const initialValues = { name: '', gmail: '', massage: '' }
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const sentForm = await emailjs.sendForm('service_1akujeo', 'template_egho8is', form.current, 'MmbEmr0wzQvDHu2CG')
      console.log(sentForm.text)
    }
    catch (error) {
      console.log("Something going wrong:", error)
    }
  }
  const ValidatioSchema = Yup.object({
    name: Yup.string().required("required"),
    gmail: Yup.string().email("invalid email name").required("required"),
    message: Yup.string().required("required"),
  })



  return (
    <motion.div
      className="main-page">
      <div
        className="greet-container">
        <motion.div className="greet">
          <motion.h1
            className="first"
            style={{ color: "red" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 }, }}
            whileHover={{ x: 20, transition: { type: "spring", stiffness: 200 }, }}
            onHoverStart={() => setGreet("World")}
            onHoverEnd={() => setGreet("Hello")}>
            {greet}
          </motion.h1>
          <motion.h1
            className="first"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 }, }}
            whileHover={{ x: 20, transition: { type: "spring", stiffness: 200 }, }}
            onHoverStart={() => setWho("Web")}
            onHoverEnd={() => setWho("I am")}>
            {who}
          </motion.h1>
          <motion.h1
            className="first"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.4 }, }}
            whileHover={{ x: 20, transition: { type: "spring", stiffness: 200 }, }}
            onHoverStart={() => setName("Developer")}
            onHoverEnd={() => setName("Zharyk")} >
            {name}
          </motion.h1>
        </motion.div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={ValidatioSchema}>
        {formik => (
          <div className="container">
            <Form ref={form} onSubmit={onSubmit} className="form" >
              <h3 className="title">Say Hello</h3>
              <div className="form__inputs">
                <label htmlFor="name"> Name</label>
                <Field name="name" id="name" placeholder="name" />
                <ErrorMessage name="name" component="text" />
              </div>
              <div className="form__inputs">
                <label htmlFor="gmail">Gmail</label>
                <Field id="gmail" name="gmail" placeholder="gmail" />
                <ErrorMessage name="gmail" component="text" />
              </div>
              <div className="form__inputs">
                <label htmlFor="message">Message</label>
                <Field as="textarea" name="message" id="message" placeholder="message" />
                <ErrorMessage name="message" component="text" />
              </div>
              <Button type="submit" disableRipple disabled={!(formik.isValid && formik.dirty)} className="button">submit</Button>
            </Form>
          </div>

        )}
      </Formik>


    </motion.div >
  );
}

export default Home;
