import React, { useContext } from "react";
import { motion } from "framer-motion";
import { userContext } from "../../App";

function Projects() {
  const { title, setTitle } = useContext(userContext);
  return (
    <motion.div onViewportEnter={() => setTitle("Projects")} id="projects">
      The most random word in English is aardvark. Of course, there's really no
      way to answer this question because its entirely based on opinion.The most
      random word in English is aardvark. Of course, there's really no way to
      answer this question because its entirely based on opinion.The most random
      word in English is aardvark. Of course, there's really no way to answer
      this question because its entirely based on opinion.The most random word
      in English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion. The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
      English is aardvark. Of course, there's really no way to answer this
      question because its entirely based on opinion.The most random word in
    </motion.div>
  );
}

export default Projects;
