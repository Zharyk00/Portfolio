import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Button, Snackbar, Slide } from '@mui/material'
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik"
import { BsFillPersonFill } from "react-icons/bs"
import { SiGmail, SiGooglemessages } from "react-icons/si"
import "../../Styles/Home/Home.css";
import * as Yup from 'yup'
import MuiAlert from '@mui/material/Alert';
function Home() {

  const form = useRef();
  const [greet, setGreet] = useState("Hello");
  const [who, setWho] = useState("I am");
  const [name, setName] = useState("Zharyk");
  const [open, setOpen] = useState(false)


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const initialValues = { name: '', gmail: '', massage: '' }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const sentForm = await emailjs.sendForm('service_1akujeo', 'template_egho8is', form.current, 'MmbEmr0wzQvDHu2CG')
      console.log(sentForm)
      setOpen(!!sentForm.status)
    }
    catch (error) {
      console.log("Something went wrong:", error)
    }
  }
  const ValidatioSchema = Yup.object({
    name: Yup.string().required("required"),
    gmail: Yup.string().email("invalid email name").required("required"),
    message: Yup.string().required("required"),
  })




  return (
    <motion.div
      className="main-page" id="hey">
      <motion.div className="greet">
        <motion.h1
          className="first"
          style={{ color: "#4f7afe" }}
          whileHover={{ x: 20, transition: { type: "spring", stiffness: 150 }, }}
          onHoverStart={() => setGreet("World")}
          onHoverEnd={() => setGreet("Hello")}>
          {greet}
        </motion.h1>
        <motion.h1
          className="first"
          style={{ color: "white" }}
          whileHover={{ x: 20, transition: { type: "spring", stiffness: 150 }, }}
          onHoverStart={() => setWho("Full Stack")}
          onHoverEnd={() => setWho("I am")}>
          {who}
        </motion.h1>
        <motion.h1
          className="first"
          style={{ color: "white" }}
          whileHover={{ x: 20, transition: { type: "spring", stiffness: 150 }, }}
          onHoverStart={() => setName("Developer")}
          onHoverEnd={() => setName("Zharyk")} >
          {name}
        </motion.h1>
      </motion.div>


      <Formik
        initialValues={initialValues}
        validationSchema={ValidatioSchema}
      >

        {(formik) => (
          <div className="container">
            <Form ref={form} onSubmit={onSubmit} className="form" autoComplete="off">
              <h3 className="title">Say Hello</h3>
              <div className="form__inputs">
                <label htmlFor="name"> {<BsFillPersonFill />}</label>
                <Field name="name" id="name" placeholder="name" />
              </div>
              <ErrorMessage name="name" component="p" />
              <div className="form__inputs">
                <label htmlFor="gmail">{<SiGmail />}</label>
                <Field id="gmail" name="gmail" placeholder="gmail" />
              </div>
              <ErrorMessage name="gmail" component="p" />
              <div className="form__inputs">
                <label htmlFor="message">{<SiGooglemessages />}</label>
                <Field as="textarea" name="message" id="message" placeholder="message" />
              </div>
              <ErrorMessage name="message" component="p" />
              <Button type="submit" onClick={() => open ? setOpen(true) : setOpen(false)} disableRipple disabled={!(formik.isValid && formik.dirty)} className="button">Send</Button>
            </Form>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Message submitted successfully!
              </Alert>
            </Snackbar>
          </div>

        )}
      </Formik>


    </motion.div >
  );
}

export default Home;
