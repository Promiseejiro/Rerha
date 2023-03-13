import { BsCardImage } from "react-icons/bs";
import { GiResize } from "react-icons/gi";
import { BiColorFill } from "react-icons/bi";
import { MdQueryBuilder } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { AiFilLike } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { MdOutlineDataUsage } from "react-icons/md";
import { AiOutlineFontSize } from "react-icons/ai";

export const slides = [
  {
    image: "https://i.ibb.co/58Mq6Mb/slide1.jpg",
    heading: "Slide One",
    desc: "This is the description of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    image: "https://i.ibb.co/8gwwd4Q/slide2.jpg",
    heading: "Slide Two",
    desc: "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    image: "https://i.ibb.co/8r7WYJh/slide3.jpg",
    heading: "Slide Three",
    desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
];

export const homepageDesktopNavData = [
  {
    id: 1,
    name: "Home",
    subMenu: [],
    path: "/",
  },
  {
    id: 2,
    name: "product",
    subMenu:
      //  [{ name: "design" }]
      [],
    path: "#",
  },
  {
    id: 3,
    name: "About",
    path: "#",
    subMenu: [],
  },
  {
    id: 3,
    name: "Designs",
    path: "#",
    subMenu: [],
  },
];
export const userDesktopNavData = [
  {
    id: 1,
    name: "Home",
    subMenu: [],
    path: "/",
  },
  {
    id: 3,
    name: "Settings",
    path: "#",
    subMenu: [],
  },
  {
    id: 3,
    name: "Log Out",
    path: "#",
    subMenu: [],
  },
];

export const procedureData = [
  {
    icon: <BsCardImage className="procedure-icon" />,
    text: "Sign up and login user dashboard",
  },
  {
    icon: <GiResize className="procedure-icon" />,
    text: "Upload a frame",
  },
  {
    icon: <BiColorFill className="procedure-icon" />,
    text: "Resize and position defaul avarta",
  },
  {
    icon: <AiOutlineFontSize className="procedure-icon" />,
    text: "input first color or chosose your preferred color ",
  },
  {
    icon: <MdOutlineDataUsage className="procedure-icon" />,
    text: "Input font size or adjust size",
  },
  {
    icon: <MdOutlineDataUsage className="procedure-icon" />,
    text: "Click on generate button to generate frame URL",
  },
  {
    icon: <MdOutlineDataUsage className="procedure-icon" />,
    text: "Congratulation",
  },
];
