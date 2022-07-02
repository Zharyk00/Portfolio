import { AiOutlineHome } from "react-icons/ai"
import { BsBraces, BsPerson, BsGithub, BsTelegram, BsInstagram, BsWhatsapp } from "react-icons/bs"
import { MdWorkOutline } from "react-icons/md"
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb"
import { FaGit, FaReact } from "react-icons/fa"

export const menu = [
  { id: 1, path: "/", links: <AiOutlineHome />, delay: 1.4 },
  { id: 2, path: "about", links: <BsPerson />, delay: 1.2 },
  { id: 3, path: "skills", links: <BsBraces />, delay: 1 },
  { id: 4, path: "work", links: <MdWorkOutline />, delay: 0.8 },
];

export const skills = [
  { id: 0.1, number: 1, initial: 3, languge: <TbBrandHtml5 />, percent: "80%", rate: 80, color: "#D84924", },
  { id: 0.2, number: 2, initial: 3, languge: <TbBrandCss3 />, percent: "75%", rate: 75, color: "#0271B3" },
  { id: 0.3, number: 3, initial: 3, languge: <TbBrandJavascript />, percent: "60%", rate: 60, color: "#D99924", },
  { id: 0.4, number: 4, initial: 3, languge: <FaReact />, percent: "70%", rate: 70, color: "#5CCFEE" },
  { id: 0.5, number: 5, initial: 3, languge: <FaGit />, percent: "70%", rate: 70, color: "#009100", },
];

export const tools = [
  { id: 1, initial: 3, sub: "subReact", languge: "ReactRouter", color: "#e39302", },
  { id: 2, initial: 3, sub: "subReact", languge: "FramerMotion", color: "#e39302", },
  { id: 3, initial: 3, sub: "subReact", languge: "MaterialUi", color: "#e39302", },
  { id: 4, initial: 3, sub: "subCss", languge: "Sass", color: "#e39302", },
  { id: 5, initial: 3, sub: "subCss", languge: "FlexBox", color: "#e39302", },
  { id: 6, initial: 3, sub: "subCss", languge: "CssGrid", color: "#e39302", },
  { id: 7, initial: 3, sub: "subCss", languge: "Animation", color: "#e39302", },
  { id: 8, initial: 3, sub: "subCss", languge: "Formik", color: "#e39302", }
]

export const social = [
  { id: 1, icon: <BsGithub />, color: "#ffffff", path: "https://github.com/Zharyk00" },
  { id: 2, icon: <BsTelegram />, color: "#0088cc", path: "https://t.me/Zharyk_dev" },
  { id: 3, icon: <BsInstagram />, color: "#8B35A8", path: "https://www.instagram.com/web__develop/?hl=en" },
  { id: 4, icon: <BsWhatsapp />, color: "#24CC63", path: "https://wa.me/message/ZYKLVQFKHF3BA1" },
]




export const projects = [
  { id: 1, path: "https://www.siteground.com/", name: "Show" },
  { id: 2, path: "http://amanatcity.kg/", name: "Show" },
  { id: 3, path: "http://vg-stroy.com/", name: "Show" },
  { id: 4, path: "https://www.coronavirus.vic.gov.au/get-pcr-test-covid-19", name: "Show" },
  { id: 5, path: "https://www.zoho.com/sites/", name: "Show" },
]






{/* <motion.div className="quotes" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1.2, transition: { duration: 1 } }}>
<motion.h1>Everyone should know how to program <br /> a computer , because it teaches you<br /> how to think!
</motion.h1> <motion.h2 className="avtor" initial={{ x: -200, opacity: 0 }} animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }}>Steve Jobs</motion.h2>
</motion.div> */}