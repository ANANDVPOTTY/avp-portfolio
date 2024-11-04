// Images & Icons
import tsIcon from "../assets/images/ts.svg";
import jsIcon from "../assets/images/js.svg";
import twIcon from "../assets/images/tw.svg";
import fbIcon from "../assets/images/fb.svg";
import muiIcon from "../assets/images/mui.svg";
import cssIcon from "../assets/images/css.svg";
import cuiIcon from "../assets/images/cui.svg";
import gitIcon from "../assets/images/git.svg";
import vsIcon from "../assets/images/vscode.svg";
import antdIcon from "../assets/images/antd.svg";
import htmlIcon from "../assets/images/html.svg";
import gsapIcon from "../assets/images/gsap.svg";
import instaIcon from "../assets/images/insta.svg";
import reduxIcon from "../assets/images/redux.svg";
import reactIcon from "../assets/images/react.svg";
import gitLabIcon from "../assets/images/glab.svg";
import gitHubIcon from "../assets/images/ghub.svg";
import notionIcon from "../assets/images/notion.svg";
import flutterIcon from "../assets/images/flutter.svg";
import whatsAppIcon from "../assets/images/whatsApp.svg";
import bootstrapIcon from "../assets/images/bootstrap.svg";
import styleCompIcon from "../assets/images/styleComp.svg";
import linkedinIcon from "../assets/images/linkedinIcon.svg";

//-------| Navbar Items |-------//
export const navItems = [
  {
    id: 1,
    menu: "Home",
    navId: "home",
  },
  {
    id: 2,
    menu: "About",
    navId: "about",
  },
  {
    id: 3,
    menu: "Skills",
    navId: "skills",
  },
  {
    id: 4,
    menu: "Projects",
    navId: "projects",
  },
  {
    id: 5,
    menu: "Contact",
    navId: "contact",
  },
];

//-------| Home Page Items |-------//
export const homeText = [
  {
    id: 1,
    text: "Hello! I am",
    colr: "var(--lightGrayTypeOne--)",
    weight: 300,
    delay: 0.1,
  },
  {
    id: 2,
    text: "Anand V Potty",
    colr: "var(--fullWhite--)",
    weight: 600,
    delay: 0.15,
  },
  {
    id: 3,
    text: "Front-End Developer",
    colr: "var(--favPink--)",
    weight: 500,
    delay: 0.2,
  },
  {
    id: 4,
    text: "As a passionate junior Front-End Developer based in Kerala, I have dedicated myself to mastering the latest technologies through self-study and hands-on experience. By developing numerous projects, I have sharpened my skills and enjoyed the rewarding experience of delivering fulfilling solutions for my clients.",
    colr: "var(--lightGrayTypeTwo--)",
    weight: 200,
    delay: 0.25,
  },
  {
    id: 5,
    text: "There's a unique thrill that comes with embarking on new projects, accompanied by the surreal satisfaction of watching my creations come to life.",
    colr: "var(--lightGrayTypeTwo--)",
    weight: 200,
    delay: 0.3,
  },
  {
    id: 6,
    text: "I am committed to crafting visually stunning and user-friendly websites, and I eagerly seek opportunities to further enhance my expertise and contribute to innovative web experiences.",
    colr: "var(--lightGrayTypeTwo--)",
    weight: 200,
    delay: 0.35,
  },
];

//-------| About Page Items |-------//
export const aboutText = [
  {
    id: 1,
    heading: "Past",
    dscr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad qui, ipsam quisquam aliquid id quia rerum? Natus itaque quas suscipit, odio ipsam dolores voluptatibus ullam soluta maiores, ex blanditiis libero culpa esse illum magni adipisci eveniet eaque deserunt nesciunt.",
  },
  {
    id: 2,
    heading: "Present",
    dscr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad qui, ipsam quisquam aliquid id quia rerum? Natus itaque quas suscipit, odio ipsam dolores voluptatibus ullam soluta maiores, ex blanditiis libero culpa esse illum magni adipisci eveniet eaque deserunt nesciunt.",
  },
  {
    id: 3,
    heading: "Future",
    dscr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad qui, ipsam quisquam aliquid id quia rerum? Natus itaque quas suscipit, odio ipsam dolores voluptatibus ullam soluta maiores, ex blanditiis libero culpa esse illum magni adipisci eveniet eaque deserunt nesciunt.",
  },
];

//-------| Skills Page Items |-------//
export const skillItems = [
  {
    id: 1,
    heading: "Front End",
    skill: [
      {
        id: 1,
        itemName: "Html",
        icon: htmlIcon,
      },
      {
        id: 2,
        itemName: "JavaScript",
        icon: jsIcon,
      },
      {
        id: 3,
        itemName: "Vanilla js",
        icon: jsIcon,
      },
      {
        id: 4,
        itemName: "React",
        icon: reactIcon,
      },
      {
        id: 5,
        itemName: "Redux",
        icon: reduxIcon,
      },
      {
        id: 6,
        itemName: "TypeScript",
        icon: tsIcon,
      },
      {
        id: 7,
        itemName: "React Native",
        icon: reactIcon,
      },
      {
        id: 8,
        itemName: "Flutter-Dart",
        icon: flutterIcon,
      },
    ],
  },
  {
    id: 2,
    heading: "Styling & Design",
    skill: [
      {
        id: 1,
        itemName: "CSS",
        icon: cssIcon,
      },
      {
        id: 2,
        itemName: "BootStrap",
        icon: bootstrapIcon,
      },
      {
        id: 3,
        itemName: "TailwindCSS",
        icon: twIcon,
      },
      {
        id: 4,
        itemName: "Material UI",
        icon: muiIcon,
      },
      {
        id: 5,
        itemName: "ANT Design",
        icon: antdIcon,
      },
      {
        id: 6,
        itemName: "Styled-Components",
        icon: styleCompIcon,
      },
      {
        id: 7,
        itemName: "Chakra UI",
        icon: cuiIcon,
      },
      {
        id: 8,
        itemName: "GSAP",
        icon: gsapIcon,
      },
    ],
  },
  {
    id: 3,
    heading: "Tools",
    skill: [
      {
        id: 1,
        itemName: "Git",
        icon: gitIcon,
      },
      {
        id: 2,
        itemName: "Github",
        icon: gitHubIcon,
      },
      {
        id: 3,
        itemName: "Gitlab",
        icon: gitLabIcon,
      },
      {
        id: 4,
        itemName: "VS Code",
        icon: vsIcon,
      },
      {
        id: 5,
        itemName: "Notion",
        icon: notionIcon,
      },
    ],
  },
];

//-------| Project Page Items |-------//
export const projectText = [
  {
    id: 1,
    heading: "React",
    dscr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad qui, ipsam quisquam aliquid id quia rerum? Natus itaque quas suscipit, odio ipsam dolores voluptatibus ullam soluta maiores, ex blanditiis libero culpa esse illum magni adipisci eveniet eaque deserunt nesciunt.",
  },
  {
    id: 2,
    heading: "React-Native",
    dscr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad qui, ipsam quisquam aliquid id quia rerum? Natus itaque quas suscipit, odio ipsam dolores voluptatibus ullam soluta maiores, ex blanditiis libero culpa esse illum magni adipisci eveniet eaque deserunt nesciunt.",
  },
  {
    id: 3,
    heading: "Flutter",
    dscr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad qui, ipsam quisquam aliquid id quia rerum? Natus itaque quas suscipit, odio ipsam dolores voluptatibus ullam soluta maiores, ex blanditiis libero culpa esse illum magni adipisci eveniet eaque deserunt nesciunt.",
  },
];

//-------| Contact Page Items |-------//
export const contactItems = [
  {
    id: 1,
    link: "",
    icon: instaIcon,
  },
  {
    id: 2,
    link: "",
    icon: linkedinIcon,
  },
  {
    id: 3,
    link: "",
    icon: fbIcon,
  },
  {
    id: 4,
    link: "",
    icon: whatsAppIcon,
  },
];
