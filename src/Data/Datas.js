import { AiOutlineHome, AiFillCodeSandboxCircle } from "react-icons/ai"
import { BsBraces, BsPerson, BsGithub, BsTelegram, BsInstagram, BsWhatsapp, BsGrid1X2Fill, BsThreeDots } from "react-icons/bs"
import { MdWorkOutline } from "react-icons/md"
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript } from "react-icons/tb"
import { FaReact, FaGitAlt, FaDocker } from "react-icons/fa"
import { SiMobx, SiReactrouter, SiFramer, SiMaterialui, SiSass, SiTypescript, SiNodedotjs, SiNestjs, SiMongodb, SiNginx } from 'react-icons/si'


export const menu = [
  { id: 1, path: "hey", links: <AiOutlineHome />, delay: 1.4 },
  { id: 2, path: "about", links: <BsPerson />, delay: 1.2 },
  { id: 3, path: "skills", links: <BsBraces />, delay: 1 },
  { id: 4, path: "work", links: <MdWorkOutline />, delay: 0.8 },
];

export const skills = [
  { id: 0.1, number: 1, initial: 3, skill: "Front-End", percent: "80%", rate: 80, color: "", },



];

export const Front = [
  { id: 1, skill: 'HTML5', icon: <TbBrandHtml5 />, color: '#FF5733' },
  { id: 2, skill: 'CSS', icon: <TbBrandCss3 />, color: '#146CAD' },
  { id: 3, skill: 'JavaScript', icon: <TbBrandJavascript />, color: '#EAD41C' },
  { id: 4, skill: 'React', icon: <FaReact />, color: '#5CD0EE' },
  { id: 5, skill: 'MobX', icon: <SiMobx />, color: '#D65A12' },
  { id: 6, skill: "R-Router", icon: <SiReactrouter />, color: '#E93F4C' },
  { id: 7, skill: "Fr-Motion", icon: <SiFramer />, color: '#ED44F2' },
  { id: 8, skill: "MaterialUi", icon: <SiMaterialui />, color: '#0079F2' },
  { id: 9, skill: "Sass", icon: <SiSass />, color: '#C26191' },
  { id: 10, skill: "FlexBox", icon: <AiFillCodeSandboxCircle />, color: '#28A0D5' },
  { id: 11, skill: "CssGrid", icon: <BsGrid1X2Fill />, color: '#D5745A' },
]

export const Back = [
  { id: 1, skill: 'NodeJs', icon: <SiNodedotjs />, color: '#6AA05B' },
  { id: 2, skill: 'NestJs', icon: <SiNestjs />, color: '#D5214A' },
  { id: 3, skill: 'MongoDB', icon: <SiMongodb />, color: '#1DA657' },
  { id: 4, skill: 'Nginx', icon: <SiNginx />, color: '#009100' },
  { id: 4, icon: <BsThreeDots />, color: 'white' }
]

export const Others = [
  { id: 1, skill: 'Git', icon: <FaGitAlt />, color: '#F23722' },
  { id: 2, skill: 'Docker', icon: <FaDocker />, color: '#00B2E2' },
  { id: 3, skill: 'Typescript', icon: <SiTypescript />, color: '#0074C2' },
]
// { id: 7, languge: "Animation", },
// { id: 8, languge: "Formik", },
// { id: 9, languge: `EmailJs` },
// { id: 10, languge: `More...` },
//  { id: 0, languge: "Git", }
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
