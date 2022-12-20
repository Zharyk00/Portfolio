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
export const social = [
  { id: 1, icon: <BsGithub />, color: "#ffffff", path: "https://github.com/Zharyk00" },
  { id: 2, icon: <BsTelegram />, color: "#0088cc", path: "https://t.me/Zharyk_dev" },
  { id: 3, icon: <BsInstagram />, color: "#8B35A8", path: "https://www.instagram.com/web__develop/?hl=en" },
  { id: 4, icon: <BsWhatsapp />, color: "#24CC63", path: "https://wa.me/message/ZYKLVQFKHF3BA1" },
]

export const projects = [
  { id: 1, path: "https://github.com/Zharyk00/Portfolio", name: "Portfolio", image: 'https://mir-s3-cdn-cf.behance.net/projects/404/0f2bf1145234233.Y3JvcCwzODM1LDMwMDAsNjM2LDA.png' },
  { id: 2, path: "https://github.com/Zharyk00/adminka", name: "Adminka (React-Admin)", image: 'https://blog.theodo.com/static/cb8ab6b78ccddc58ae27cc4aa94fe499/ee604/react-admin-logo.png' },
  { id: 3, path: "https://task-two-delta.vercel.app/", name: "Just nft images", image: 'https://blockbuild.africa/wp-content/uploads/2022/08/NFT-Utility.jpeg' },
  { id: 4, path: "https://github.com/Zharyk00/bil_back", name: "Nest", image: 'https://img.freepik.com/premium-vector/back-end-icon-simple-element-illustration-back-end-concept-symbol-design-can-be-used-web-mobile_159242-7912.jpg' },
  { id: 5, path: "https://kadyrbek00.github.io/new/", name: "Kadyrbek's portfolio", image: 'https://previews.123rf.com/images/kchung/kchung1610/kchung161001407/64508477-portfolio-written-by-hand-hand-writing-on-transparent-board-photo.jpg' },
]
