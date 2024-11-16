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
    delay: 0.4,
  },
  {
    id: 2,
    text: "Anand V Potty",
    colr: "var(--fullWhite--)",
    weight: 600,
    delay: 0.45,
  },
  {
    id: 3,
    text: "Front-End Developer",
    colr: "var(--favPink--)",
    weight: 500,
    delay: 0.5,
  },
  {
    id: 4,
    text: "As a passionate junior Front-End Developer based in Kerala, I have dedicated myself to mastering the latest technologies through self-study and hands-on experience. By developing numerous projects, I have sharpened my skills and enjoyed the rewarding experience of delivering fulfilling solutions for my clients.",
    colr: "var(--lightGrayTypeTwo--)",
    weight: 200,
    delay: 0.55,
  },
  {
    id: 5,
    text: "There's a unique thrill that comes with embarking on new projects, accompanied by the surreal satisfaction of watching my creations come to life.",
    colr: "var(--lightGrayTypeTwo--)",
    weight: 200,
    delay: 0.6,
  },
  {
    id: 6,
    text: "I am committed to crafting visually stunning and user-friendly websites, and I eagerly seek opportunities to further enhance my expertise and contribute to innovative web experiences.",
    colr: "var(--lightGrayTypeTwo--)",
    weight: 200,
    delay: 0.65,
  },
];

//-------| About Page Items |-------//
export const aboutText = [
  {
    id: 1,
    heading: "Past",
    dscr: "Completing my B-Tech, I discovered a passion for programming. What began as a curiosity evolved into a genuine enjoyment, particularly in web development, which blends creativity & problem-solving. I focused on building my skills in web technologies, leading me to where I am today.",
  },
  {
    id: 2,
    heading: "Present",
    dscr: "I’m currently a React Developer at a dynamic startup, where I transitioned from an intern to a full-time role. Working in a startup has given me the opportunity to take on diverse responsibilities and grow my expertise while making a tangible impact on projects.",
  },
  {
    id: 3,
    heading: "Future",
    dscr: "I’m expanding my skills beyond web development, learning mobile development for cross-platform apps and exploring Next.js to master efficient web frameworks. My goal is to become a versatile developer in both web and mobile tech, ready to adapt and drive innovation.",
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
        rating: 4.5,
      },
      {
        id: 2,
        itemName: "JavaScript",
        icon: jsIcon,
        rating: 4,
      },
      {
        id: 3,
        itemName: "Vanilla js",
        icon: jsIcon,
        rating: 4,
      },
      {
        id: 4,
        itemName: "React",
        icon: reactIcon,
        rating: 4,
      },
      {
        id: 5,
        itemName: "Redux",
        icon: reduxIcon,
        rating: 4,
      },
      {
        id: 6,
        itemName: "TypeScript",
        icon: tsIcon,
        rating: 2,
      },
      {
        id: 7,
        itemName: "React Native",
        icon: reactIcon,
        rating: 3.5,
      },
      {
        id: 8,
        itemName: "Flutter-Dart",
        icon: flutterIcon,
        rating: 3,
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
        rating: 4,
      },
      {
        id: 2,
        itemName: "BootStrap",
        icon: bootstrapIcon,
        rating: 4,
      },
      {
        id: 3,
        itemName: "TailwindCSS",
        icon: twIcon,
        rating: 3.5,
      },
      {
        id: 4,
        itemName: "Material UI",
        icon: muiIcon,
        rating: 4.5,
      },
      {
        id: 5,
        itemName: "ANT Design",
        icon: antdIcon,
        rating: 4,
      },
      {
        id: 6,
        itemName: "Styled-Components",
        icon: styleCompIcon,
        rating: 4.5,
      },
      {
        id: 7,
        itemName: "Chakra UI",
        icon: cuiIcon,
        rating: 3.5,
      },
      {
        id: 8,
        itemName: "GSAP",
        icon: gsapIcon,
        rating: 2.5,
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
        rating: 3.5,
      },
      {
        id: 2,
        itemName: "Github",
        icon: gitHubIcon,
        rating: 3.5,
      },
      {
        id: 3,
        itemName: "Gitlab",
        icon: gitLabIcon,
        rating: 3.5,
      },
      {
        id: 4,
        itemName: "VS Code",
        icon: vsIcon,
        rating: 4,
      },
      {
        id: 5,
        itemName: "Notion",
        icon: notionIcon,
        rating: 4.5,
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
