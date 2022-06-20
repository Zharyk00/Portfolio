import { AiOutlineHome } from "react-icons/ai"
import { BsBraces, BsPerson } from "react-icons/bs"
import { MdWorkOutline } from "react-icons/md"
import { IoMdContacts } from "react-icons/io"




export const menu = [
  { id: 1, path: "home", links: <AiOutlineHome />, delay: 1.4 },
  { id: 2, path: "about", links: <BsPerson />, delay: 1.2 },
  { id: 3, path: "skills", links: <BsBraces />, delay: 1 },
  { id: 4, path: "portfolio", links: <MdWorkOutline />, delay: 0.8 },
  { id: 5, path: "sayhello", links: <IoMdContacts />, delay: 0.6 },
];

export const skills = [
  { id: 0.1, number: 1, initial: 3, languge: "Html", percent: "80%", rate: 80, color: "#D84924", },
  { id: 0.2, number: 3, initial: 3, languge: "Css", percent: "75%", rate: 75, color: "#0271B3" },
  { id: 0.7, number: 2, initial: 3, languge: "JavaScript", percent: "60%", rate: 60, color: "#D99924", },
  { id: 0.8, number: 4, initial: 3, languge: "React", percent: "70%", rate: 70, color: "#5CCFEE" },
  { id: 1.2, number: 12, initial: 3, languge: "Git", percent: "70%", rate: 70, color: "#841184", },
];

export const cssTools = [
  { id: 0.3, number: 5, initial: 3, subC: "subCss", languge: "Sass", percent: "95%", rate: 95, color: "#C36192", },
  { id: 0.4, number: 7, initial: 3, subC: "subCss", languge: "FlexBox", percent: "95%", rate: 95, color: "#2449D8", },
  { id: 0.5, number: 9, initial: 3, subC: "subCss", languge: "CssGrid", percent: "98%", rate: 98, color: "#3460A6", },
  { id: 0.6, number: 11, initial: 3, subC: "subCss", languge: "Animation", percent: "90%", rate: 90, color: "#DC5B5D", }
]

export const reactTools = [
  { id: 0.9, number: 6, initial: 3, subR: "subReact", languge: "ReactRouterDom@6", percent: "80%", rate: 80, color: "#80BB44", },
  { id: 1, number: 8, initial: 3, subR: "subReact", languge: "FramerMotion", percent: "70%", rate: 70, color: "#DD22CC", },
  { id: 1.1, number: 10, initial: 3, languge: "MaterialUi", percent: "75%", rate: 75, color: "#007FFF", },
]











{/* <motion.div className="quotes" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1.2, transition: { duration: 1 } }}>
<motion.h1>Everyone should know how to program <br /> a computer , because it teaches you<br /> how to think!
</motion.h1> <motion.h2 className="avtor" initial={{ x: -200, opacity: 0 }} animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }}>Steve Jobs</motion.h2>
</motion.div> */}