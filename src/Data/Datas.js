import { AiOutlineHome } from "react-icons/ai"
import { BsBraces, BsPerson, BsGithub, BsTelegram, BsInstagram, BsWhatsapp, BsEmojiSmileFill } from "react-icons/bs"
import { MdWorkOutline } from "react-icons/md"
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb"
import { FaReact } from "react-icons/fa"


export const menu = [
  { id: 1, path: "hello", links: <AiOutlineHome />, delay: 1.4 },
  { id: 2, path: "about", links: <BsPerson />, delay: 1.2 },
  { id: 3, path: "skills", links: <BsBraces />, delay: 1 },
  { id: 4, path: "work", links: <MdWorkOutline />, delay: 0.8 },
];

export const skills = [
  { id: 0.1, number: 1, initial: 3, languge: <TbBrandHtml5 />, percent: "80%", rate: 80, color: "#D84924", },
  { id: 0.2, number: 2, initial: 3, languge: <TbBrandCss3 />, percent: "75%", rate: 75, color: "#0271B3" },
  { id: 0.3, number: 3, initial: 3, languge: <TbBrandJavascript />, percent: "60%", rate: 60, color: "#D99924", },
  { id: 0.4, number: 4, initial: 3, languge: <FaReact />, percent: "70%", rate: 70, color: "#00CDF2" },

];

export const tools = [
  { id: 0, languge: "Git", },
  { id: 1, languge: "ReactRouter", },
  { id: 2, languge: "FramerMotion", },
  { id: 3, languge: "MaterialUi", },
  { id: 4, languge: "Sass", },
  { id: 5, languge: "FlexBox", },
  { id: 6, languge: "CssGrid", },
  { id: 7, languge: "Animation", },
  { id: 8, languge: "Formik", },
  { id: 9, languge: `EmailJs` },
  { id: 10, languge: `More...` },
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
